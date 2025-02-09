const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Error: File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/script.js') {
    fs.readFile('script.js', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Error: File not found');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Error: Page not found');
  }
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});

