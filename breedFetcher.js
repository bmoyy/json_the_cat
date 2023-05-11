const request = require('request');
const args = process.argv;

const requestBreed = function(args) {
  let breed = args.slice(2);

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    if (body === "[]") {
      return console.log("Breed name is not found");
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

requestBreed(args);