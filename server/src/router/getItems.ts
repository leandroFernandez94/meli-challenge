import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import { searchMapper } from "../queryFormatters";
import { SearchApiResponse } from "../types/api/search";
const { MELI_API_ENDPOINT } = process.env;

const searchItemsUrl = `${MELI_API_ENDPOINT}/sites/MLA/search`;

async function getItems(req: Request, res: Response, next: NextFunction) {
  const { q: query } = req.query;

  try {
    if (typeof query !== "string") throw "search parameter is not valid";
    const encodedQuery = encodeURIComponent(query);
    const apiResponse = await fetch(`${searchItemsUrl}?q=${encodedQuery}`);
    const apiResponseJson: SearchApiResponse = await apiResponse.json();

    const results =
      Array.isArray(apiResponseJson.results) &&
      apiResponseJson.results.slice(0, 4);

    const filters = apiResponseJson.filters;

    if (!results) {
      next(new Error("API internal error"));
      return;
    }

    const formattedResults = searchMapper.format({ results, filters });

    res.send(formattedResults);
  } catch (e) {
    console.error(e);
    next(new Error("failed to fetch items from mercadolibre api"));
  }
}

export default getItems;
