const fetch = require("node-fetch");
const { itemDetailsFormatter } = require("../queryFormatters");
const { MELI_API_ENDPOINT } = process.env;

const itemUrl = `${MELI_API_ENDPOINT}/items`;

async function getItemDetails(req, res, next) {
  const { id: itemId } = req.params;

  try {
    const [itemResponse, itemDescriptionResponse] = await Promise.all([
      (await fetch(`${itemUrl}/${itemId}`)).json(),
      (await fetch(`${itemUrl}/${itemId}/description`)).json(),
    ]);

    const formattedResult = itemDetailsFormatter(
      itemResponse,
      itemDescriptionResponse
    );

    res.status(200).send(formattedResult);
  } catch (e) {
    console.error(e);
    next(new Error("failed to fetch item details from meli api"));
  }
}

module.exports = getItemDetails;
