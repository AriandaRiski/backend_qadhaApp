const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.APP_PORT;
const Routers = require('./Routers/routers');
const cors = require('cors');

app.use(cors('*'));
app.use(bodyParser.json());
app.use(Routers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})