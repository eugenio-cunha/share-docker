'use strict';

const express = require('express');

const app = express();

app.get('/off', (req, res) => {
  process.exit(1);
});

app.get('/', (req, res) => {
  res.send('<h1>MQ Share()<h1> <br> <h2>Efêmero</h2> <br> <a href="/off">Desligar APP</a>');
});

app.listen(process.env.HTTP_PORT, () => {
  console.log('Go!');
});
