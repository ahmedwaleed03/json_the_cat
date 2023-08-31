const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // store the url and localpath
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  
  // http request
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if (body === '[]') {
        callback("Breed not found.", null);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };