const express = require('express');
const path = require('path');
const morgan = require('morgan');
const connection = require('./db/db.js');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./client/dist'));

app.get('/api/groceries', (req, res, next) => {
  // db query
  var queryString = 'SELECT * FROM groceries';
  connection.query(queryString, (err, results, fields) => {
    if (err) {
      res.status(400).send(console.log('ERROR: ', err));
    } else {
      // console.log(results);
      res.status(200).json(results);
    }
  })
});


app.post('/api/groceries', (req, res, next) => {
  console.log(req);
  var name = req.body.name;
  var quantity = req.body.quantity;
  var queryString = `INSERT INTO groceries (name, quantity) VALUES ('${name}', ${quantity})`;
  connection.query(queryString, (err, results, fields) => {
    if (err) {
      res.status(400).send(console.log('Could not insert into table: ', err));
    } else {
      res.status(200).json(results);
    }
  })



});




app.listen(PORT, () => { console.log(`Express App is listening on port ${PORT}`)});
