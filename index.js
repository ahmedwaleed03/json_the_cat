const { fetchBreedDescription } = require('./breedFetcher');

// get command-line arguments
const args = process.argv.slice(2);

// ensure there is one cmd args
if (args.length !== 1) {
  console.log("Need exactly 1 parameters");
  process.exit();
}

const breedName = args[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});