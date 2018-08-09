'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const { CLIENT_ORIGIN } = require('./config');

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);
  
/* ========== GET/READ ALL ITEMS ========== */
//   app.get('/api/data', (req, res) => {
//     res.json(data);
//   });
    
app.listen(8080, () => console.log('App listening on port 8080'));