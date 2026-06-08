"""One-off helper: build web-optimized JPEGs for the portfolio gallery.

Reads the original high-res sources in frontend/src/images and writes
resized, quality-tuned JPEGs into frontend/src/images/optimized/ with clean,
descriptive names. Prints a JS-ready manifest (with real dimensions) so the
data layer can avoid layout shift in the masonry gallery.
"""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "frontend" / "src" / "images"
OUT = SRC / "optimized"
OUT.mkdir(exist_ok=True)

MAX_EDGE = 1700
QUALITY = 82

# original filename -> clean output slug
JOBS = {
    # The photographer (About page)
    "portfolio/about-photographer.png": "izak-studio",
    # Portraits
    "img1.jpg": "portrait-natural-light",
    "img2.jpg": "portrait-freckles",
    "img3.jpg": "portrait-warm",
    "pexels-dulce-panebra-695494914-34980985.jpg": "portrait-golden",
    # Editorial
    "portfolio/hero-portrait.png": "editorial-dark",
    "pexels-tugay-aydin-3209475-5652352.jpg": "editorial-fur",
    "portfolio/brand-editorial.png": "editorial-suit",
    # Weddings / events
    "pexels-aydin-photography-298758980-37880572.jpg": "wedding-rings",
    "pexels-michael-koneckiy-461417719-20620196.jpg": "wedding-dunes",
    "portfolio/event-coverage.png": "event-champagne",
    "pexels-anna-s-826931019-33387429.jpg": "lifestyle-sunflowers",
    # Travel / landscape
    "pexels-mariam-sukiasyan-2160140022-36532202.jpg": "travel-street",
    "pexels-gsn-travel-28359737.jpg": "travel-cave",
    "pexels-david-hitchcock-2160795853-37001452.jpg": "travel-iceland",
    "pexels-gabriel-lopez-2161988841-37895963.jpg": "travel-moon",
    "pexels-felipe-perfeito-2161694583-37705185.jpg": "travel-coast",
    "pexels-janinki-design-428112528-26828942.jpg": "travel-blooms",
}


def main() -> None:
    manifest = {}
    for source, slug in JOBS.items():
        path = SRC / source
        if not path.exists():
            print(f"!! missing {source}")
            continue

        with Image.open(path) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
            target = OUT / f"{slug}.jpg"
            im.save(target, "JPEG", quality=QUALITY, optimize=True, progressive=True)
            kb = target.stat().st_size / 1024
            manifest[slug] = (im.width, im.height)
            print(f"{slug:24} {im.width}x{im.height}  {kb:6.0f} KB")

    print("\n--- dimensions ---")
    for slug, (w, h) in manifest.items():
        print(f'  "{slug}": [{w}, {h}],')


if __name__ == "__main__":
    main()
