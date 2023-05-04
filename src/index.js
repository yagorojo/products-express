const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRouter = require('./products/products.router');
const usersRouter = require('./users/users.router');
const brandsRouter = require('./brands/brands.router');
require("dotenv").config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/brands', brandsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})