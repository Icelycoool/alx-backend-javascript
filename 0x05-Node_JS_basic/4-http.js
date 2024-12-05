const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  const responseText = 'Hello ALX!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server running on ${HOST}, port ${PORT}`);
});

module.exports = app;
