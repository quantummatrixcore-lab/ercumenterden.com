/**
 * app.js
 * Ercüment Erden Sovereign Authority & Investor Deal Room Server
 * High-Performance Vanilla Node.js HTTP Server with REST APIs
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const BASE_DIR = __dirname;

// MIME Type Registry
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function loadContent() {
  try {
    const raw = fs.readFileSync(path.join(BASE_DIR, 'content.json'), 'utf8').replace(/^\uFEFF/, '');
    return JSON.parse(raw);
  } catch (err) {
    return { error: 'Failed to load content.json', details: err.message };
  }
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, 'http://' + (req.headers.host || 'localhost:' + PORT));
  const pathname = urlObj.pathname;

  if (pathname.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 Forbidden: Path traversal prohibited');
  }

  // REST API Routes
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({
      status: 'ok',
      service: 'ercumenterden.com',
      engine: 'v67_sovereign_mesh',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      memoryUsageMb: Math.round(process.memoryUsage().rss / 1024 / 1024)
    }, null, 2));
  }

  if (pathname === '/api/founder') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data.founder || {}, null, 2));
  }

  if (pathname === '/api/syndicate') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data.syndicate || {}, null, 2));
  }

  if (pathname === '/api/projects') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data.projects || [], null, 2));
  }

  if (pathname === '/content.json') {
    const data = loadContent();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(data, null, 2));
  }

  // Static File Serving
  let targetFile = 'index.html';
  if (pathname === '/' || pathname === '/index.html') {
    targetFile = 'index.html';
  } else if (pathname === '/design_tokens.css') {
    targetFile = 'design_tokens.css';
  } else if (pathname === '/render.js') {
    targetFile = 'render.js';
  } else {
    const resolvedPath = path.join(BASE_DIR, pathname);
    if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
      targetFile = pathname;
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 Not Found</h1><p>Ercüment Erden Sovereign Portal</p>');
    }
  }

  const filePath = path.join(BASE_DIR, targetFile);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('500 Internal Server Error: ' + err.message);
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' https: data:; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; frame-ancestors 'none';",
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    });
    res.end(fileData);
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log('🏛️ Ercüment Erden Portal running at http://localhost:' + PORT + '/');
    console.log('   Health endpoint: http://localhost:' + PORT + '/api/health');
    console.log('   Data endpoint:   http://localhost:' + PORT + '/content.json');
  });
}

module.exports = { server, PORT };
