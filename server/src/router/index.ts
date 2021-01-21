import { Router } from "express";

import getItems from "./getItems";
import getItemDetails from "./getItemDetails";

const apiRouter = Router();

apiRouter.get("/api/items", getItems);
apiRouter.get("/api/items/:id", getItemDetails);

export default apiRouter;
