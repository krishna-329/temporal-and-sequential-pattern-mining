/**
 * Universal Resilient Server for Temporal & Sequential Pattern Mining
 * Compatible with Vercel Serverless Function and local Node.js server
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cachedHtml = null;

function getHtml() {
  if (!cachedHtml) {
    cachedHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  }
  return cachedHtml;
}

export default function handler(req, res) {
  try {
    const html = getHtml();
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': Buffer.byteLength(html),
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=120'
    });
    res.end(html);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error loading application: ' + err.message);
  }
}

// Local server runner
if (!process.env.VERCEL) {
  import('http').then(http => {
    const server = http.createServer(handler);
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  });
}
