const args = process.argv;
const relevantArgs = args.slice(2);
const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
URL += relevantArgs[0];

request(URL, (error, response, body) => {

  if (error) return console.log(`${error}`);
  const data = JSON.parse(body);
  if (data[0] === undefined) return console.log('Breed name not found!');
    
  console.log(data[0]['description']);
});