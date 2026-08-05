import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images');

const url = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/7d/d6/5e/caption.jpg?w=1100&h=-1&s=1';
const filePath = path.join(outDir, 'mercato-logo.jpg');

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    const req = https.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filePath);
        download(response.headers.location, filePath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); console.log('OK'); resolve(); });
    });
    req.on('timeout', () => { req.destroy(); file.close(); try { fs.unlinkSync(filePath); } catch {} reject(new Error('TIMEOUT')); });
    req.on('error', (err) => { file.close(); try { fs.unlinkSync(filePath); } catch {} reject(err); });
  });
}

download(url, filePath).then(() => console.log('Done.')).catch(e => console.error('FAIL:', e.message));
