const { MongoClient } = require('mongodb');

async function uploadToMongoDB(jsonArray, mongoDBUrl) {
  try {
    const client = new MongoClient(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('prms');
    const collection = db.collection('pri');
    await collection.insertMany(jsonArray);
    await client.close();
  } catch (error) {
    throw new Error(`Error uploading JSON data to MongoDB: ${error}`);
  }
}

module.exports = uploadToMongoDB;
