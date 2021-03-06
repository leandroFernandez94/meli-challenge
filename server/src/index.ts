import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

import apiRouter from "./router";

//server
const app = express();
const port = process.env.SERVER_PORT || 8000;
const apiEndopint = process.env.MELI_API_ENDPOINT;

if (!apiEndopint)
  throw new Error(
    "mercadolibre api url needs to be specified in env variable MELI_API_ENDPOINT"
  );

//parse request body as json object
app.use(bodyParser.json());

//sets app routes
app.use(apiRouter);

//handle errors
app.use(function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  res.status(500).send({ error: err.message || "unknown error" });
});

//run server
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
