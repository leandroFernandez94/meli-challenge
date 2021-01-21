const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require("./router");

//server
const app = express();
const port = process.env.SERVER_PORT || 3000;

//parse request body as json object
app.use(bodyParser.json());

//sets app routes
app.use(apiRouter);

//handle errors
app.use(function errorHandler(err, req, res) {
  console.error(err);
  res.status(500).send({ error: err.message || "unknown error" });
});

//run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
