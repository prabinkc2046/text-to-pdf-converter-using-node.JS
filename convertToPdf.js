const fs = require('fs');
const Document = require('pdfkit');

const textContent = fs.readFileSync('input.txt', 'utf8');


const writeStream = fs.createWriteStream('output.pdf');

// Create a PDF document
const doc = new Document({
    size: 'letter',
    font: 'Times-Roman',
    fontSize: 12,
    lineGap: 2
});

//piping pdf document to file
doc.pipe(writeStream);

// writing text content to pdf file
doc.text(textContent);

//Finish
doc.end();

console.log("PDF created successfully")