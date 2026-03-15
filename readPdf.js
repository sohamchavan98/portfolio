import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('c:/Users/soham/Downloads/sequence/Profile.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    import('pdf-parse').then(m => {
        m.default(dataBuffer).then(d => console.log(d.text)).catch(console.error);
    })
});
