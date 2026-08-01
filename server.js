const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const rootDir = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const normalized = path.normalize(decoded).replace(/^\.+/, '');
  return path.join(rootDir, normalized === '/' ? 'index.html' : normalized);
}

function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  const candidates = [];

  Object.values(interfaces).forEach(items => {
    items?.forEach(item => {
      if (item.family === 'IPv4' && !item.internal && !item.address.startsWith('169.254.')) {
        candidates.push(item.address);
      }
    });
  });

  return candidates[0] || '127.0.0.1';
}

function injectBaseUrl(html) {
  const baseUrl = `http://${getLocalIpAddress()}:${port}`;
  return html.replace('</head>', `<script>window.__APP_BASE_URL__ = '${baseUrl}';</script></head>`);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  if (ext === '.html') {
    fs.readFile(filePath, 'utf8', (err, html) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(injectBaseUrl(html));
    });
    return;
  }

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || `${host}:${port}`}`);
  let filePath = safePath(requestUrl.pathname);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (requestUrl.pathname === '/' || requestUrl.pathname === '/index.html') {
        filePath = path.join(rootDir, 'index.html');
      } else if (requestUrl.pathname.startsWith('/')) {
        const fallback = path.join(rootDir, 'index.html');
        fs.stat(fallback, (fallbackErr) => {
          if (!fallbackErr) {
            sendFile(res, fallback);
            return;
          }
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('Not Found');
        });
        return;
      }
    }

    sendFile(res, filePath);
  });
});

server.listen(port, host, () => {
  console.log(`Server berjalan di http://${getLocalIpAddress()}:${port}`);
});
