const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      return callback(response.statusCode, null);
    }

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback('Breed name not found', null);
    }
      
    return callback(null, data[0]['description']);
  
  });

};

module.exports = {
  fetchBreedDescription,
};