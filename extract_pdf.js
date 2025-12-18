const fs = require('fs');
const pdfLib = require('pdf-parse');

console.log('Type of pdfLib:', typeof pdfLib);
console.log('Keys:', Object.keys(pdfLib));

let dataBuffer = fs.readFileSync('static/Nirmit_PM_Resume.pdf');

// Try calling it if it's a function, otherwise look for a method
if (typeof pdfLib === 'function') {
    pdfLib(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(console.error);
} else if (pdfLib.default && typeof pdfLib.default === 'function') {
    pdfLib.default(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(console.error);
} else {
    console.log("Could not find the pdf parsing function.");
}
