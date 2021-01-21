const { Router } = require("express");

const getItems = require("./getItems");
const getItemDetails = require("./getItemDetails");

const apiRouter = Router();

apiRouter.get("/api/items", getItems);
apiRouter.get("/api/items/:id", getItemDetails);

module.exports = apiRouter;
