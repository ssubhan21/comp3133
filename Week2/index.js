const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Step 1: Delete canada.txt and usa.txt if they exist
if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
    console.log(`${canadaFile} deleted.`);
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
    console.log(`${usaFile} deleted.`);
}

// Step 2: Read CSV file and filter data
const readStream = fs.createReadStream(inputFile);
const canadaStream = fs.createWriteStream(canadaFile);
const usaStream = fs.createWriteStream(usaFile);

// Write headers
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

readStream
    .pipe(csv())
    .on('data', (row) => {
        if (row.country.toLowerCase() === 'canada') {
            canadaStream.write(`${row.country},${row.year},${row.population}\n`);
        }
        if (row.country.toLowerCase() === 'united states') {
            usaStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');
        canadaStream.end();
        usaStream.end();
    });
