const request = require('request');

// get command-line arguments
const args = process.argv.slice(2);

// ensure there are two cmd args
if (args.length !== 1) {
  console.log("Need exactly 1 parameters");
  process.exit();
}

// store the url and localpath
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + args[0];

// http request
const makeRequest = () => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Request Failed: \n", error);
    } else {
      if (body === '[]') {
        console.log("Breed not found.");
      } else {
        const data = JSON.parse(body);
        console.log(data[0].description);
      }
    }
  });
};

makeRequest();