// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
// In development, the css was being bundled with the js in the same file
import fs from 'fs';
import cheerio from 'cheerio'; //Interact with in memory dom using jquery like selectors
import colors from 'colors';

/*eslint-disable no-console */

// Read index.html
fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }
// load index.html using cheerio so that we can use selectors on markup
  const $ = cheerio.load(markup);

  // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  // Reference separate styles.css file used in production
  $('head').prepend('<link rel="stylesheet" href="styles.css">');
// Write resulting index.html with added stylesheet reference to dist folder
  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
