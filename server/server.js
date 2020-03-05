const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('./client/dist'));

// app.get('/', console.log('get got'));



app.listen(PORT, () => { console.log(`Express App is listening on port ${PORT}`)});