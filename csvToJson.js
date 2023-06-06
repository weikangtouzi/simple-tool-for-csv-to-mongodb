const csv = require('csvtojson');

async function csvToJson(csvFilePath) {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
  } catch (error) {
    throw new Error(`Error converting CSV to JSON: ${error}`);
  }
}

module.exports = csvToJson;
