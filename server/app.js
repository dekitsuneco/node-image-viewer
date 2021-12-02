/*
? Server-side code. Before starting app run 'node app'
*/

const fs = require('fs');
const fetchImages = require('./scrapper.js');

// Download images from external API if we have no images:
fs.readdir('./../assets/images', async function(err, files) {
  if (err) {
    console.log(err);
  } else {
    if (!files.length) {
      await fetchImages('backgrounds').catch(err => console.log(`!During fetching from server - ${err}`));
      console.log('Downloaded images..');
    }
  }

  // After assuring that we have images, create a list of its names in JSON formaT:
  const images = fs.readdirSync('./../assets/images');
  fs.writeFile('./../assets/images.json',
    JSON.stringify(images), 
    'utf8',
    err => console.log(`!During writing images.json - ${err}`));
});

// For slider:
const slideImages = fs.readdirSync('./../assets/slideImages');
fs.writeFile('./../assets/slideImages.json',
  JSON.stringify(slideImages), 
  'utf8',
  err => console.log(`!During writing slideImages.json - ${err}`));
