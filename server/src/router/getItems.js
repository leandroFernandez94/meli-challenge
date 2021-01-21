const fetch = require("node-fetch");
const { searchFormatter } = require("../queryFormatters");
const { MELI_API_ENDPOINT } = process.env;

const searchItemsUrl = `${MELI_API_ENDPOINT}/sites/MLA/search`;

async function getItems(req, res, next) {
  const { query } = req.body;

  try {
    const encodedQuery = encodeURIComponent(query);
    const apiResponse = await fetch(`${searchItemsUrl}?q=${encodedQuery}`);
    const apiResponseJson = await apiResponse.json();

    const results =
      Array.isArray(apiResponseJson.results) &&
      apiResponseJson.results.slice(0, 4);

    const formattedResults = searchFormatter(results);

    res.status(200).send(formattedResults);
  } catch (e) {
    console.error(e);
    next(new Error("failed to fetch items from mercadolibre api"));
  }
}

module.exports = getItems;
