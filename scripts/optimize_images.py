"""Build web-optimized JPEGs for the portfolio gallery.

Reads the high-res sources in frontend/src/images and writes resized,
quality-tuned JPEGs into frontend/src/images/optimized/ with clean slugs.
Prints a JS-ready manifest (with real dimensions) for the data layer.
"""
import shutil
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "frontend" / "src" / "images"
OUT = SRC / "optimized"

MAX_EDGE = 1700
QUALITY = 82

# clean slug -> original filename
JOBS = {
    # The photographer (About page)
    "about-photographer": "pexels-doouglasma-16403730.jpg",
    # Portraits
    "portrait-stillness": "pexels-krivitskiy-11676996.jpg",
    "portrait-sparks": "pexels-vika-glitter-392079-29815833.jpg",
    "portrait-city": "pexels-juan-camilo-diaz-ramirez-316476970-13630714.jpg",
    "portrait-shade": "pexels-brandon-retratos-768594541-35051590.jpg",
    "portrait-lean": "pexels-brandon-retratos-768594541-35551828.jpg",
    # Editorial
    "editorial-motion": "pexels-rifqi-fadillah-2148721111-35371950.jpg",
    "editorial-crimson": "pexels-katia-miasoed-624959709-19138127.jpg",
    "editorial-record": "pexels-ekrulila-25194063.jpg",
    "editorial-exposure": "pexels-kelvin-diri-326816017-20276504.jpg",
    "editorial-frequency": "pexels-shuttercraftsman-240571253-31261862.jpg",
    # Weddings
    "wedding-firstdance": "pexels-rebornfilmes-25491319.jpg",
    "wedding-arch": "pexels-lilen-diaz-1025474869-32195697.jpg",
    "wedding-golden": "pexels-breno-cardoso-149064345-18322558.jpg",
    "wedding-veil": "pexels-juliet-montesinos-301813586-18468938.jpg",
    "wedding-joy": "pexels-amar-10288375.jpg",
    # Travel
    "travel-stars": "pexels-emreayata-33561944.jpg",
    "travel-flamingos": "pexels-emareynares-18211339.jpg",
    "travel-quarter": "pexels-whoiszero-17719516.jpg",
    "travel-festival": "pexels-rahulp9800-3052360.jpg",
    "travel-song": "pexels-justphotof-21704407.jpg",
    "travel-bloom": "pexels-70588695-35341664.jpg",
}


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    manifest = {}
    for slug, source in JOBS.items():
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
            print(f"{slug:22} {im.width}x{im.height:<5} {kb:6.0f} KB")

    print("\n--- dimensions (w, h) ---")
    for slug, (w, h) in manifest.items():
        print(f'  "{slug}": [{w}, {h}],')


if __name__ == "__main__":
    main()
