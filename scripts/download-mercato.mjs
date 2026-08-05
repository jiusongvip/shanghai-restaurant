import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images');

const images = [
  { url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/7d/d6/5e/caption.jpg?w=1100&h=-1&s=1', name: 'mercato-logo.jpg' },
  { url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d2/7a/c7/caption.jpg?w=1100&h=-1&s=1', name: 'mercato-interior-1.jpg' },
  { url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/be/40/ee/caption.jpg?w=1100&h=-1&s=1', name: 'mercato-interior-2.jpg' },
  { url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0c/09/12/m7-roasted-m7-beef-striploin.jpg?w=1400&h=-1&s=1', name: 'mercato-food-1.jpg' },
  { url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/31/54/be/caption.jpg?w=1100&h=-1&s=1', name: 'mercato-food-2.jpg' },
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, { timeout: 20000 }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filePath);
        download(response.headers.location, filePath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('OK:', path.basename(filePath));
        resolve();
      });
    }).on('timeout', function() {
      this.destroy();
      file.close();
      fs.unlinkSync(filePath);
      reject(new Error('TIMEOUT'));
    }).on('error', (err) => {
      file.close();
      try { fs.unlinkSync(filePath); } catch {}
      reject(err);
    });
  });
}

async function main() {
  for (const img of images) {
    const filePath = path.join(outDir, img.name);
    try {
      await download(img.url, filePath);
    } catch (e) {
      console.error('FAIL:', img.name, e.message);
    }
  }
  console.log('Done.');
}

main();
