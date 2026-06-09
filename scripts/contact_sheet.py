"""Build labeled contact sheets so we can review many source photos at once."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "frontend" / "src" / "images"
OUT = ROOT / "scripts" / "_contact"
OUT.mkdir(exist_ok=True)

files = sorted([p for p in SRC.glob("*.jpg")] + [p for p in SRC.glob("*.png")])
cell = 320
cols = 4
pad = 6
per_sheet = 16  # 4x4

try:
    font = ImageFont.truetype("arial.ttf", 26)
except Exception:
    font = ImageFont.load_default()

legend = []
sheet_idx = 0
for start in range(0, len(files), per_sheet):
    chunk = files[start:start + per_sheet]
    rows = (len(chunk) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (cell + pad) + pad, rows * (cell + pad) + pad), (18, 17, 15))
    draw = ImageDraw.Draw(sheet)
    for i, path in enumerate(chunk):
        idx = start + i
        legend.append((idx, path.name))
        with Image.open(path) as im:
            im = im.convert("RGB")
            im.thumbnail((cell, cell), Image.LANCZOS)
        r, c = divmod(i, cols)
        x = pad + c * (cell + pad)
        y = pad + r * (cell + pad)
        ox = x + (cell - im.width) // 2
        oy = y + (cell - im.height) // 2
        sheet.paste(im, (ox, oy))
        # index badge
        label = str(idx)
        draw.rectangle([x, y, x + 46, y + 36], fill=(216, 184, 118))
        draw.text((x + 8, y + 4), label, fill=(20, 16, 8), font=font)
    target = OUT / f"sheet_{sheet_idx}.jpg"
    sheet.save(target, "JPEG", quality=80)
    print(f"saved {target.name}  ({len(chunk)} images)")
    sheet_idx += 1

print("\n--- legend ---")
for idx, name in legend:
    print(f"{idx:2}  {name}")
