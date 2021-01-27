import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import { itemDetailsFormatter } from "../queryFormatters";
import { CategoryApiResponse } from "@shared-types/Category";
import { DescriptionApiResponse, ItemApiResponse } from "@shared-types/Item";
const { MELI_API_ENDPOINT } = process.env;

const itemUrl = `${MELI_API_ENDPOINT}/items`;
const categoryUrl = `${MELI_API_ENDPOINT}/categories`;

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

    const categoryId = itemResponse.category_id;

    //item category data to build its category path
    const category: CategoryApiResponse = await (
      await fetch(`${categoryUrl}/${categoryId}`)
    ).json();

    //transform api data to format expected by frontend
    const formattedResult = itemDetailsFormatter.format({
      item: itemResponse,
      description: itemDescriptionResponse,
      category,
    });

    res.send(formattedResult);
  } catch (e) {
    console.error(e);
    next(new Error("failed to fetch item details from meli api"));
  }
}

export default getItemDetails;
