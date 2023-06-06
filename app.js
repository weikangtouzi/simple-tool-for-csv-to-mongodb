const fs = require('fs');
const path = require('path');
const csvToJson = require('./csvToJson');
const uploadToMongoDB = require('./uploadToMongoDB');

const directoryPath = '.';
const mongoDBUrl = 'mongodb://127.0.0.1:27017/prms?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

async function main() {
  try {
    fs.readdirSync(directoryPath).forEach(async (file) => {
      if (path.extname(file) === '.csv') {
        const jsonArray = await csvToJson(file);
        await uploadToMongoDB(jsonArray, mongoDBUrl);
        console.log(`CSV data from ${file} successfully uploaded to MongoDB.`);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
