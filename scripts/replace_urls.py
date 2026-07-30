import os, re

base = r"D:/workspaces/website/shanghai-restaurant/src"
count = 0

for root, dirs, files in os.walk(base):
    for fname in files:
        if not fname.endswith((".astro", ".ts")):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        new_content = re.sub(
            r"https://images\.unsplash\.com/(photo-\d+-[a-f0-9]+)\?[^\"'\s]+",
            r"/images/\1.webp",
            content
        )
        if new_content != content:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            rel = os.path.relpath(fpath, base)
            print("Updated: " + rel)
            count += 1

print("Done. " + str(count) + " files updated.")