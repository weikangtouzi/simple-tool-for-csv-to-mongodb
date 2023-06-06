const csv = require('csvtojson');

async function csvToJson(csvFilePath) {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    const filteredArray = jsonArray.map(item => {
      const newItem = { ...item };
      Object.keys(newItem).forEach(key => {
        if (key.match(/(序号|编号)/)) {
          delete newItem[key];
        }
      });
      return newItem;
    });
    return filteredArray;
  } catch (error) {
    throw new Error(`Error converting CSV to JSON: ${error}`);
  }
}

module.exports = csvToJson;
