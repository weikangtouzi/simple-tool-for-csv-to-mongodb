const csvToJson = require('./csvToJson');
const uploadToMongoDB = require('./uploadToMongoDB');

const csvFilePath = './人力信息.csv';
const mongoDBUrl = 'mongodb://127.0.0.1:27017/prms?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

async function main() {
  try {
    const jsonArray = await csvToJson(csvFilePath);
    await uploadToMongoDB(jsonArray, mongoDBUrl);
    console.log('CSV data successfully uploaded to MongoDB.');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
