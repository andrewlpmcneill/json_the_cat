const args = process.argv;
const relevantArgs = args.slice(2);
const breedName = relevantArgs[0];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});