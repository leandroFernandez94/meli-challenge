const itemDetailsFormatter = require("./itemDetails");
const searchFormatter = require("./search");

const author = {
  name: "Leandro",
  lastname: "Fernandez",
};

function formatterWithAuthor(formatter) {
  return (...args) => ({
    author,
    ...formatter(...args),
  });
}

module.exports = {
  searchFormatter: formatterWithAuthor(searchFormatter),
  itemDetailsFormatter: formatterWithAuthor(itemDetailsFormatter),
};
