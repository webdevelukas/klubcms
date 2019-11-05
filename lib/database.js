// Import dependencies
const { MongoClient } = require("mongodb");

// Define variables
let db = null;

// Initalize DB or connect if already exists
async function initDatabase() {
  const dbName = "masterpiece";
  const url = `mongodb://localhost:27017/${dbName}`;
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

// Get collection by name
async function getCollection(collectionName) {
  try {
    if (!db) {
      await initDatabase();
    }
    return db.collection(collectionName);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return console.error("Error");
  }
}

// Function exports
exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
