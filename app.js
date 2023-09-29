require('dotenv').config();
const express = require('express');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
