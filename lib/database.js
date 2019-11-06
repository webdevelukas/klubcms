// Import dependencies
const { MongoClient } = require("mongodb");

// Define variables
let db = null;

// Initalize DB or connect if already exists
async function initDatabase(url, dbName) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

// Get collection by name
async function getCollection(collectionName) {
  if (!db) {
    throw new Error("You have to initialize the database first");
  }
  return db.collection(collectionName);
}

// Function exports
exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
