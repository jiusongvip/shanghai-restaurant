const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const TARGET_WIDTHS = [480, 800, 1200];
const MAX_DIMENSION = 1200;

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) return;
  
  const name = path.basename(filePath, ext);
  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Skip tiny images
  if (metadata.width < 400 || metadata.height < 400) return;

  // Convert non-WebP to WebP (resize first)
  const outDir = path.dirname(filePath);
  
  // Generate AVIF variant
  const avifPath = path.join(outDir, name + '.avif');
  if (!fs.existsSync(avifPath)) {
    await image
      .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
      .avif({ quality: 50 })
      .toFile(avifPath);
    console.log('  AVIF: ' + path.basename(avifPath));
  }

  // Generate responsive WebP variants
  for (const w of TARGET_WIDTHS) {
    if (metadata.width <= w) continue;
    const variantPath = path.join(outDir, name + '-' + w + 'w.webp');
    if (!fs.existsSync(variantPath)) {
      await image
        .resize(w, Math.round(w * metadata.height / metadata.width))
        .webp({ quality: 80 })
        .toFile(variantPath);
      console.log('  WebP ' + w + 'w: ' + path.basename(variantPath));
    }
  }

  // Compress original if oversized
  const stats = fs.statSync(filePath);
  if (stats.size > 100 * 1024 && metadata.width > MAX_DIMENSION) {
    // Resize oversized originals
    const tmpPath = filePath + '.tmp';
    await image
      .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(tmpPath);
    const tmpStats = fs.statSync(tmpPath);
    if (tmpStats.size < stats.size * 0.7) {
      fs.renameSync(tmpPath, filePath);
      console.log('  Compressed: ' + path.basename(filePath) + ' (' + (stats.size/1024).toFixed(0) + 'KB -> ' + (tmpStats.size/1024).toFixed(0) + 'KB)');
    } else {
      fs.unlinkSync(tmpPath);
    }
  }
}

async function main() {
  console.log('Processing images in ' + IMAGES_DIR + '...');
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f))
    .filter(f => !f.startsWith('temp_'))
    .map(f => path.join(IMAGES_DIR, f));

  let count = 0;
  for (const file of files) {
    try {
      await processImage(file);
      count++;
    } catch (err) {
      console.error('  Failed: ' + path.basename(file) + ' - ' + err.message);
    }
  }
  console.log('Done. Processed ' + count + ' images.');
}

main().catch(console.error);
