// Import dependencies
const { ObjectID } = require("mongodb");
const { getCollection } = require("./database");

// Define variables
const collectionName = "users";

// Get user by ID
async function getUser(userId) {
  const usersCollection = await getCollection(collectionName);
  const objectId = new ObjectID.createFromHexString(userId);
  const user = await usersCollection.findOne({ _id: objectId });

  if (!user) {
    throw new Error("Can not find user");
  }

  return user;
}

// Function exports
exports.getUser = getUser;
