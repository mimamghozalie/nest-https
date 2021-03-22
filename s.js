const express = require('express');

const https = require('https'),
  fs = require('fs'),
  helmet = require('helmet');

const options = {
  key: fs.readFileSync('./config/ssl/privkey.pem'),
  cert: fs.readFileSync('./config/ssl/ssl.pem'),
};

const app = express();

app.use(helmet()); // Add Helmet as a middleware

app.use((req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
});

app.listen(8000);

https.createServer(options, app).listen(8080);
