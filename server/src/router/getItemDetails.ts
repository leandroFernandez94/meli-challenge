import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import { itemDetailsFormatter } from "../queryFormatters";
import { DescriptionApiResponse, ItemApiResponse } from "../types/api/Item";
const { MELI_API_ENDPOINT } = process.env;

const itemUrl = `${MELI_API_ENDPOINT}/items`;

async function getItemDetails(req: Request, res: Response, next: NextFunction) {
  const { id: itemId } = req.params;

  try {
    const [itemResponse, itemDescriptionResponse]: [
      ItemApiResponse,
      DescriptionApiResponse
    ] = await Promise.all([
      (await fetch(`${itemUrl}/${itemId}`)).json(),
      (await fetch(`${itemUrl}/${itemId}/description`)).json(),
    ]);

    const formattedResult = itemDetailsFormatter.format({
      item: itemResponse,
      description: itemDescriptionResponse,
    });

    res.status(200).send(formattedResult);
  } catch (e) {
    console.error(e);
    next(new Error("failed to fetch item details from meli api"));
  }
}

export default getItemDetails;
