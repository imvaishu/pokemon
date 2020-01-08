const pokemonData = require("./pokemon.json");
const parser = function () {
  let parsedData = "";

  pokemonData.forEach(pokemon => {
    parsedData += `<div class="card">\n<h2 id="name">${pokemon.name}</h2>\n<div class="content">\n<div class="front">\n<img\nsrc=${pokemon.art_url}\nclass="img"\n/>\n</div>\n<div class="description back">\n${pokemon.description}\n</div>\n</div>\n</div>`;
  });
  return parsedData;
};

console.log(parser());