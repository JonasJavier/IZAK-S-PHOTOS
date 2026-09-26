"""Generate web derivatives for the gallery.

- frontend/src/images/thumbs/<name>.webp : 720px-wide previews for grids and cards
- frontend/public/og-image.jpg           : 1200x630 social preview (Open Graph)

The full-size JPGs in frontend/src/images/optimized/ stay the source of truth and
are still used by the lightbox and the hero. Requires Pillow (dev only):

    python -m pip install pillow
    python scripts/optimize_images.py
"""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "frontend" / "src" / "images" / "optimized"
THUMBS = ROOT / "frontend" / "src" / "images" / "thumbs"
OG_IMAGE = ROOT / "frontend" / "public" / "og-image.jpg"

THUMB_WIDTH = 720
THUMB_QUALITY = 78
OG_SIZE = (1200, 630)
OG_SOURCE = "hero-portrait.jpg"


def make_thumb(source: Path) -> tuple[int, int]:
    target = THUMBS / f"{source.stem}.webp"
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        if image.width > THUMB_WIDTH:
            height = round(image.height * THUMB_WIDTH / image.width)
            image = image.resize((THUMB_WIDTH, height), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=THUMB_QUALITY, method=6)
    return source.stat().st_size, target.stat().st_size


def make_og_image() -> None:
    with Image.open(SOURCE / OG_SOURCE) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = ImageOps.fit(image, OG_SIZE, Image.Resampling.LANCZOS, centering=(0.5, 0.4))
        image.save(OG_IMAGE, "JPEG", quality=82, optimize=True, progressive=True)


def main() -> None:
    THUMBS.mkdir(parents=True, exist_ok=True)
    sources = sorted(SOURCE.glob("*.jpg"))
    expected = {f"{source.stem}.webp" for source in sources}
    for stale in THUMBS.glob("*.webp"):
        if stale.name not in expected:
            stale.unlink()

    total_in = total_out = 0
    for source in sources:
        size_in, size_out = make_thumb(source)
        total_in += size_in
        total_out += size_out

    make_og_image()
    print(f"{len(sources)} thumbnails: {total_in / 1024:.0f} KB of JPEG -> {total_out / 1024:.0f} KB of WebP")
    print(f"Open Graph image: {OG_IMAGE.relative_to(ROOT)} ({OG_IMAGE.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
