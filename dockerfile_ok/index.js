'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>MQ Share()<h1> <br> <h2>Dockerfile</h2> <br> <h2>Hello, World</h2>');
});

app.listen(process.env.HTTP_PORT, () => {
  console.log('Go!');
});
