'use strict';
const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser').json();
const cors        = require('cors');

const dogRouter = require(__dirname + '/routes/dog-route');
const catRouter = require(__dirname + '/routes/cat-route');


mongoose.connect('mongodb://localhost/dev_db');

app.use(cors());

app.use('/dogs', dogRouter);
app.use('/cats', catRouter);


app.use((req, res) => {
  res.status(404).json({message: 'route not found'});
}).use((err, req, res, next) => {
  res.status(500).json({message: err.message});
  next(err);
});

app.listen(8080);
