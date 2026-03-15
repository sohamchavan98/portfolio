const fs = require('fs');
const pdf = require('pdf-parse');

console.log(typeof pdf);
console.log(Object.keys(pdf));

let dataBuffer = fs.readFileSync('c:/Users/soham/Downloads/sequence/Profile.pdf');

if (typeof pdf === 'function') {
  pdf(dataBuffer).then(function(data) {
      console.log(data.text);
  }).catch(err => console.error(err));
} else if (pdf.default && typeof pdf.default === 'function') {
  pdf.default(dataBuffer).then(function(data) {
      console.log(data.text);
  }).catch(err => console.error(err));
} else {
  console.log("Not a function");
}
