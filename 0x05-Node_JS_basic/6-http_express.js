const express = require('express');

const PORT = 1245;
const HOST = 'localhost';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;