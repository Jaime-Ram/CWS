"""Zet het archief van de oude cleanwatersystems.nl om naar JSON + afbeeldingen voor de nieuwe site.

Gebruik: python3 -I scripts/extract-oude-site.py "<map Clean Water Systems bestanden>" .
"""
import csv, html, json, os, re, shutil, sys
from html.parser import HTMLParser
from urllib.parse import unquote, urlparse

ARCH, REPO = sys.argv[1], sys.argv[2]
HTML_DIR = os.path.join(ARCH, "html")
ASSETS = os.path.join(ARCH, "assets")
IMG_OUT = os.path.join(REPO, "public", "images", "oud")
DATA_OUT = os.path.join(REPO, "src", "content")
os.makedirs(IMG_OUT, exist_ok=True)
os.makedirs(DATA_OUT, exist_ok=True)

SKIP = {"site-index", "sitemap", "nieuwsbrief"}
log = {"links_onbekend": {}, "img_ontbreekt": {}}


def clean_seg(x):
    x = unquote(unquote(x)).lower()
    x = re.sub(r"[()]", "", x)
    x = re.sub(r"[._\s]+", "-", x)
    x = re.sub(r"[^a-z0-9-]", "", x)
    return re.sub(r"-+", "-", x).strip("-")


def new_slug(old_path):
    p = old_path.strip("/")
    p = re.sub(r"\.html$", "", p)
    if p in ("", "adviesbureau-voor-waterinstallaties", "home", "index.php"):
        return ""
    if p.startswith("sitemap/lp/"):
        return "lp/" + "/".join(clean_seg(s) for s in p[len("sitemap/lp/"):].split("/"))
    if p.startswith("legionella-douchekoppen/categorie/"):
        return "legionella-douchekoppen/" + clean_seg(p.split("/")[-1])
    return "/".join(clean_seg(s) for s in p.split("/"))


# ---------------------------------------------------------------- inlezen
pages_raw = {}
for f in sorted(os.listdir(HTML_DIR)):
    if not f.endswith(".html"):
        continue
    s = open(os.path.join(HTML_DIR, f), encoding="utf-8", errors="replace").read()
    canon = re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', s) or re.search(
        r'<link[^>]+href="([^"]+)"[^>]+rel="canonical"', s)
    old = urlparse(canon.group(1)).path
    pages_raw[old] = s

# oud pad -> nieuw pad (incl. omleidingen van de oude site zelf)
oldnew = {}
for old in pages_raw:
    oldnew[unquote(unquote(old)).rstrip("/") or "/"] = "/" + new_slug(old)
with open(os.path.join(ARCH, "omleidingen.csv")) as fh:
    for r in csv.DictReader(fh):
        src = unquote(unquote(urlparse(r["oude_url"]).path)).rstrip("/") or "/"
        dst = unquote(unquote(urlparse(r["komt_uit_op"]).path)).rstrip("/") or "/"
        if dst in oldnew and src not in oldnew:
            oldnew[src] = oldnew[dst]
oldnew["/home.html"] = "/"
oldnew["/referenties.html"] = oldnew.get("/reviews.html", "/reviews")
oldnew["/sitemap.html"] = "/sitemap"
oldnew["/site-index.html"] = "/sitemap"


def map_href(h, page):
    if not h or h.startswith(("mailto:", "tel:", "#", "javascript")):
        return h
    u = urlparse(h)
    if u.netloc and "cleanwatersystems.nl" not in u.netloc:
        return h
    path = unquote(unquote(u.path)).rstrip("/") or "/"
    if path in oldnew:
        return oldnew[path] + (("#" + u.fragment) if u.fragment else "")
    if path.startswith("/includes/") or path.startswith("/mod/"):
        return h if u.netloc else "https://www.cleanwatersystems.nl" + u.path
    log["links_onbekend"].setdefault(path, set()).add(page)
    return "/" + new_slug(path)


ASSET_FILES = os.listdir(ASSETS)
ASSET_NORM = {}
for a in ASSET_FILES:
    ASSET_NORM[re.sub(r"(�|%)20", " ", a).lower()] = a
copied = {}


def map_img(src, page):
    u = urlparse(src)
    path = unquote(unquote(u.path))
    key = path.lstrip("/").replace("/", "__").lower()
    cands = [key, key + ".webp", re.sub(r"\.webp$", "", key)]
    for c in cands:
        a = ASSET_NORM.get(c)
        if a:
            break
    else:
        # origineel niet bewaard: neem de grootste verkleinde versie uit /resized/
        stem = re.sub(r"(\.(jpe?g|png))?(\.webp)?$", "", os.path.basename(path), flags=re.I).lower()
        sized = []
        for norm, orig in ASSET_NORM.items():
            m = re.match(rf"includes__+files__resized__{re.escape(stem)}-(\d+)\.(webp|jpe?g|png)$", norm)
            if m:
                sized.append((int(m.group(1)), m.group(2) == "webp", orig))
        if not sized:
            log["img_ontbreekt"].setdefault(path, set()).add(page)
            return None
        a = max(sized)[2]
    if a not in copied:
        base = a.split("__")[-1]
        base = re.sub(r"(�|%)20", "-", base)
        name = clean_seg(os.path.splitext(base)[0]) + os.path.splitext(base)[1].lower()
        n, i = name, 2
        while n in copied.values():
            stem, ext = os.path.splitext(name)
            n = f"{stem}-{i}{ext}"
            i += 1
        shutil.copyfile(os.path.join(ASSETS, a), os.path.join(IMG_OUT, n))
        copied[a] = n
    return "/images/oud/" + copied[a]


# ---------------------------------------------------------------- sanitizer
ALLOWED = {"h1", "h2", "h3", "h4", "p", "ul", "ol", "li", "a", "strong", "b", "em", "i", "br",
           "img", "table", "thead", "tbody", "tr", "td", "th", "blockquote"}
DROP_WITH_CONTENT = {"script", "style", "form", "noscript", "svg", "button", "select", "textarea"}
VOID = {"br", "img"}


class Clean(HTMLParser):
    def __init__(self, page):
        super().__init__(convert_charrefs=True)
        self.page, self.out, self.drop, self.blocks = page, [], 0, []
        self.stack = []

    def flush(self):
        h = "".join(self.out).strip()
        if h:
            self.blocks.append({"type": "html", "html": h})
        self.out = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if self.drop:
            if tag in DROP_WITH_CONTENT:
                self.drop += 1
            return
        if tag in DROP_WITH_CONTENT:
            self.drop = 1
            return
        if tag == "iframe":
            m = re.search(r"youtube(?:-nocookie)?\.com/embed/([\w-]+)", a.get("src", ""))
            if m:
                # sluit open tags niet af: video staat bijna altijd los in een <p>
                self.flush_video(m.group(1), a.get("title", ""))
            return
        if tag not in ALLOWED:
            return
        if tag == "b":
            tag = "strong"
        if tag == "i":
            tag = "em"
        if tag == "a":
            href = map_href(a.get("href", ""), self.page)
            cls = ' class="cws-cta"' if "meerinfoblok" in (a.get("class") or "") else ""
            ext = ' target="_blank" rel="noopener"' if href.startswith("http") else ""
            self.out.append(f'<a href="{html.escape(href)}"{cls}{ext}>')
        elif tag == "img":
            src = map_img(a.get("src", ""), self.page)
            if src:
                alt = html.escape(a.get("alt") or a.get("title") or "")
                self.out.append(f'<img src="{src}" alt="{alt}" loading="lazy">')
            return
        else:
            self.out.append(f"<{tag}>")
        if tag not in VOID:
            self.stack.append(tag)

    def flush_video(self, vid, title):
        # sluit alles wat open staat, zet video als los blok, heropen daarna
        open_tags = list(self.stack)
        for t in reversed(open_tags):
            self.out.append(f"</{t}>")
        self.flush()
        self.blocks.append({"type": "youtube", "id": vid, "title": html.unescape(title)})
        for t in open_tags:
            self.out.append(f"<{t}>")

    def handle_endtag(self, tag):
        if self.drop:
            if tag in DROP_WITH_CONTENT:
                self.drop -= 1
            return
        tag = {"b": "strong", "i": "em"}.get(tag, tag)
        if tag in ALLOWED and tag not in VOID and tag in self.stack:
            while self.stack:
                t = self.stack.pop()
                self.out.append(f"</{t}>")
                if t == tag:
                    break

    def handle_data(self, d):
        if not self.drop:
            self.out.append(html.escape(d.replace("\xa0", " "), quote=False))


def tidy(h):
    # koppen zijn al vet; losse <strong>/<em> erin weghalen
    h = re.sub(r"<(h[1-4])>(.*?)</\1>", lambda m: f"<{m.group(1)}>" + re.sub(r"</?(strong|em)>", "", m.group(2)) + f"</{m.group(1)}>", h, flags=re.S)
    # <p> binnen lijst- en tabelcellen uitpakken
    h = re.sub(r"<(li|td|th)>\s*<p>(.*?)</p>\s*</\1>", r"<\1>\2</\1>", h, flags=re.S)
    h = re.sub(r"</p>\s*<p>(?=[^<]*</(li|td)>)", "<br>", h)
    # links naar bestanden op de oude server (bestaat niet meer): alleen de inhoud houden
    h = re.sub(r'<a href="https://www\.cleanwatersystems\.nl/(includes|mod)/[^"]*"[^>]*>(.*?)</a>', r"\2", h, flags=re.S)
    h = re.sub(r"<(p|li|h[1-4]|strong|em)>\s*(<br>\s*)*</\1>", "", h)
    h = re.sub(r"(<br>\s*)+</p>", "</p>", h)
    h = re.sub(r"<p>\s*(<br>\s*)+", "<p>", h)
    # productkaarten uit de oude slider; de nieuwe site toont een eigen productgrid
    h = re.sub(r'<a href="/legionella-douchekoppen/[^"]+">\s*<img.*?</a>', "", h, flags=re.S)
    # knoppen en koppen van de oude pop-upformulieren
    h = re.sub(r'<a href="#popup[^"]*"[^>]*>.*?</a>', "", h, flags=re.S)
    h = re.sub(r"<h4>\s*(Offerte aanvragen|Direct contact|Stel uw vraag)\s*</h4>", "", h)
    h = re.sub(r"[ \t\r\n]+", " ", h)
    h = re.sub(r"<p>\s*</p>", "", h)
    h = re.sub(r"\s+(</(p|li|h[1-4])>)", r"\1", h)
    h = re.sub(r"(<(p|li|h[1-4])>)\s+", r"\1", h)
    return h.strip()


def sanitize(fragment, page):
    c = Clean(page)
    c.feed(fragment)
    c.close()
    for t in reversed(c.stack):
        c.out.append(f"</{t}>")
    c.flush()
    blocks = []
    for b in c.blocks:
        if b["type"] == "html":
            b["html"] = tidy(b["html"])
            if not re.sub(r"<[^>]+>", "", b["html"]).strip() and "<img" not in b["html"]:
                continue
        blocks.append(b)
    return blocks


def between(s, start_marker, end_markers):
    i = s.find(start_marker)
    if i < 0:
        return None
    i = s.find(">", i) + 1
    ends = [s.find(e, i) for e in end_markers]
    ends = [s.rfind("<", i, e) for e in ends if e > 0]
    ends = [e for e in ends if e > 0]
    return s[i:min(ends)] if ends else s[i:]


def text(h):
    return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", h))).strip()


def meta(s, name):
    m = re.search(rf'<meta[^>]+name="{name}"[^>]+content="([^"]*)"', s) or re.search(
        rf'<meta[^>]+content="([^"]*)"[^>]+name="{name}"', s)
    return html.unescape(m.group(1)).strip() if m else ""


# ---------------------------------------------------------------- pagina's
inv = {}
with open(os.path.join(ARCH, "inventaris.csv")) as fh:
    for r in csv.DictReader(fh):
        inv[urlparse(r["url"]).path] = r

pages = []
for old, s in pages_raw.items():
    slug = new_slug(old)
    base = slug.split("/")[-1] if slug else ""
    if old.strip("/").replace(".html", "") in SKIP:
        continue
    title = html.unescape(re.search(r"<title>(.*?)</title>", s, re.S).group(1)).strip()
    desc = meta(s, "description")
    if "inhoudhomefullwrapper" in s:
        frag = between(s, 'id="inhoudhomefullwrapper"', ["codesnippetsholder"])
        kind = "home"
    elif "reviewsfullwrapper" in s:
        frag = between(s, 'id="reviewsfullwrapper"', ['id="standingforwrapper"', "codesnippetsholder"])
        kind = "reviews"
    else:
        frag = between(s, 'class="inhoudvervolgright"', ["codesnippetsholder", 'id="standingforwrapper"'])
        kind = "page"
    if slug.startswith("lp/"):
        kind = "landing"
    elif slug.startswith("legionella-douchekoppen/"):
        kind = "product"
    elif slug in ("contact", "offerte-aanvragen", "afspraak-maken"):
        kind = "form"
    elif slug in ("privacyverklaring", "cookieverklaring"):
        kind = "legal"

    product = None
    if kind == "product" and frag:
        gallery = [map_img(x, slug) for x in re.findall(r'fotoboekblokslide-content.*?<img[^>]+src="([^"]+)"', frag, re.S)]
        art = re.search(r"Artikelnummer:\s*([^<]+)", frag)
        prijs = re.search(r'projectprijseurocijfers">\s*([^<]+)</span>', frag)
        verzend = re.search(r'projectprijs".*?<h4>(.*?)</h4>', frag, re.S)
        h1m = re.search(r"<h1[^>]*>(.*?)</h1>", frag, re.S)
        product = {
            "images": [g for g in gallery if g],
            "articleNumber": text(art.group(1)) if art else "",
            "price": text(prijs.group(1)) if prijs else "",
            "shipping": text(verzend.group(1)) if verzend else "",
        }
        d = frag.find('class="projectdescriptionholder"')
        frag = (f"<h1>{h1m.group(1)}</h1>" if h1m else "") + (frag[frag.rfind("<", 0, d):] if d > 0 else "")
    if kind == "form" and frag:
        frag = re.sub(r"</?(table|tbody|tr)[^>]*>", "", frag)
        frag = re.sub(r"<td[^>]*>\s*(&nbsp;|\s)*</td>", "", frag)
        frag = re.sub(r"</?td[^>]*>", "", frag)
    blocks = sanitize(frag or "", slug)
    h1 = ""
    for b in blocks:
        if b["type"] == "html":
            m = re.search(r"<h1>(.*?)</h1>", b["html"], re.S)
            if m:
                h1 = text(m.group(1))
                b["html"] = b["html"].replace(m.group(0), "", 1).strip()
                break
    blocks = [b for b in blocks if b["type"] != "html" or b["html"]]
    if kind == "reviews":
        blocks = []  # reviews worden apart uitgelezen en als kaarten getoond
    images = re.findall(r'<img src="([^"]+)"', " ".join(b.get("html", "") for b in blocks))
    crumbs = re.search(r'"@type": "BreadcrumbList".*?\]', s, re.S)
    crumb_names = re.findall(r'"name": "([^"]+)"', crumbs.group(0)) if crumbs else []
    pages.append({
        "oldPath": unquote(unquote(old)),
        "slug": slug,
        "kind": kind,
        "title": title,
        "description": desc,
        "h1": h1 or (inv.get(old, {}).get("h1") or title),
        "navName": html.unescape(crumb_names[-1]) if len(crumb_names) > 1 else "",
        "image": (product["images"][0] if product and product["images"] else (images[0] if images else None)),
        "product": product,
        "blocks": blocks,
    })

# reviews los uitlezen
rev_html = pages_raw.get("/reviews.html", "")
reviews = []
for chunk in rev_html.split('class="reviewwrapper"')[1:]:
    name = re.search(r"<h3[^>]*>(.*?)</h3>", chunk, re.S)
    rating = re.search(r"\((\d)/5\)", chunk)
    date = re.search(r'reviewtopdate"[^>]*><p>(.*?)</p>', chunk, re.S)
    body = re.search(r'reviewcontent"[^>]*>(.*?)</div>', chunk, re.S)
    reviews.append({"name": text(name.group(1)) if name else "", "date": text(date.group(1)) if date else "",
                    "rating": int(rating.group(1)) if rating else 5, "text": text(body.group(1)) if body else ""})
total = re.search(r'totalreviewswrapper-rating">\s*<span>([\d.,]+)</span>\s*<span>\((\d+)', rev_html)
review_total = {"rating": total.group(1), "count": int(total.group(2))} if total else None

# ---------------------------------------------------------------- gedeelde blokken (van de homepage)
home = pages_raw.get("/adviesbureau-voor-waterinstallaties.html") or ""
shared = {}


def cards(seg):
    out = []
    for m in re.finditer(r'class="highlightProjects01Container"(.*?)(?=class="highlightProjects02Container")', seg, re.S):
        c = m.group(1)
        before = seg[:m.start()]
        a_open = before.rfind("<a")
        link = re.match(r'<a[^>]*href="([^"]+)"', before[a_open:]) if a_open > before.rfind("</a>") else None
        t = re.search(r"<h3[^>]*>(.*?)</h3>", c, re.S)
        d = re.search(r'highlightProjects01smalldes"[^>]*>(.*?)</p>', c, re.S)
        img = re.search(r'<img[^>]+src="([^"]+)"', c)
        out.append({
            "title": text(t.group(1)) if t else "",
            "text": text(d.group(1)) if d else "",
            "image": map_img(img.group(1), "home") if img and "dummy" not in img.group(1) else None,
            "href": map_href(link.group(1), "home") if link else None,
        })
    return out


seg = between(home, 'id="standingforwrapper"', ['id="reasonswhywrapper"'])
if seg:
    sec = between(seg, "layout-content-holder9", ['class="standingforpoints"', "standingforpoints"]) or ""
    img = re.search(r'afbeeldingblokimg[^>]*src="([^"]+)"|src="([^"]+)"[^>]*afbeeldingblokimg', seg)
    pts = between(seg, "standingforpoints", ["￿"]) or ""
    shared["standingFor"] = {
        "blocks": sanitize(sec, "home"),
        "image": map_img(next(g for g in img.groups() if g), "home") if img else None,
        "points": cards(pts),
    }
seg = between(home, 'id="reasonswhywrapper"', ['id="contactuswrapper"'])
if seg:
    shared["reasonsWhy"] = sanitize(seg, "home")
seg = between(home, 'id="contactuswrapper"', ['id="servicehighlightswrapper"'])
if seg:
    shared["contactUs"] = text(seg)
seg = between(home, 'id="servicehighlightswrapper"', ['id="resultswrapper"'])
if seg:
    h2 = re.search(r"<h2[^>]*>(.*?)</h2>", seg, re.S)
    shared["services"] = {"title": text(h2.group(1)) if h2 else "", "cards": cards(seg)}
seg = between(home, 'id="resultswrapper"', ['id="quotewrapper"'])
if seg:
    h2 = re.search(r"<h2[^>]*>(.*?)</h2>", seg, re.S)
    shared["results"] = {"title": text(h2.group(1)) if h2 else "",
                         "images": [map_img(x, "home") for x in re.findall(r'<img[^>]+src="([^"]+)"', seg)]}
seg = between(home, 'id="quotewrapper"', ['id="googlemapswrapper"'])
if seg:
    shared["quote"] = text(seg)
for key, marker in (("homeServices", 'id="dienstenhighlightswrapper"'), ("homeProducts", "productenhighlightsslide")):
    seg = between(home, marker, ['id="contentholder"', 'id="standingforwrapper"'])
    if seg:
        shared[key] = cards(seg)

json.dump(pages, open(os.path.join(DATA_OUT, "pages.json"), "w"), ensure_ascii=False, indent=1)
json.dump({"reviews": reviews, "reviewTotal": review_total, **shared}, open(os.path.join(DATA_OUT, "shared.json"), "w"), ensure_ascii=False, indent=1)
json.dump(oldnew, open(os.path.join(DATA_OUT, "redirects.json"), "w"), ensure_ascii=False, indent=1)

print("pagina's:", len(pages), "| afbeeldingen:", len(copied), "| reviews:", len(reviews))
from collections import Counter
print(Counter(p["kind"] for p in pages))
print("onbekende links:", {k: sorted(v)[:3] for k, v in log["links_onbekend"].items()})
print("ontbrekende afbeeldingen:", {k: sorted(v)[:2] for k, v in log["img_ontbreekt"].items()})
