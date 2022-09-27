const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      callback(undefined);
      return;
    }
    callback(data);
  });
};

module.exports = breedDetailsFromFile;