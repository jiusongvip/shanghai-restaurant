import os, requests, sys
from PIL import Image
from pathlib import Path
from io import BytesIO

photo_ids = [
    "photo-1414235077428-338989a2e8c0",
    "photo-1496116218417-1a781b1c416c",
    "photo-1504674900247-0877df9cc836",
    "photo-1517248135467-4c7edcad34c4",
    "photo-1534604973900-c43ab4c2e0ab",
    "photo-1541696490-8744a5dc0228",
    "photo-1547592166-23ac45744acd",
    "photo-1550966871-3ed3cdb51f3a",
    "photo-1551218808-94e220e084d2",
    "photo-1559339352-11d035aa65de",
    "photo-1563379926898-05f4575a45d8",
    "photo-1565557623262-b51c2513a641",
    "photo-1582450871972-ab5ca72a1f7a",
    "photo-1598515214211-89d3c73ae83b",
    "photo-1625220194771-7ebdea0b70b9",
]

out_dir = Path("public/images")
out_dir.mkdir(parents=True, exist_ok=True)
QUALITY = 80
MAX_WIDTH = 1200

for i, pid in enumerate(photo_ids, 1):
    webp_path = out_dir / f"{pid}.webp"
    if webp_path.exists():
        print(f"[{i}/15] SKIP {pid}.webp (exists)")
        continue
    url = f"https://images.unsplash.com/{pid}?w={MAX_WIDTH}&fm=jpg&q=85"
    print(f"[{i}/15] DL {pid} ...", end=" ", flush=True)
    try:
        resp = requests.get(url, timeout=30, headers={"User-Agent": "Mozilla/5.0"})
        resp.raise_for_status()
        img = Image.open(BytesIO(resp.content))
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        img.save(str(webp_path), "WEBP", quality=QUALITY)
        size_kb = os.path.getsize(webp_path) / 1024
        print(f"OK ({size_kb:.0f} KB)")
    except Exception as e:
        print(f"FAIL: {e}")

print("Done")