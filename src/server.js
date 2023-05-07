const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');

const app = express();

app.use(cors());
app.use('/api', routes);

app.listen(3000, () => {
  console.log('SERVER IS RUNNING');
});
