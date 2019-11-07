// Import dependencies
const { ObjectID } = require("mongodb");
const { getCollection } = require("./database");

// Define variables
const collectionName = "users";

// Get user by ID
async function getUserById(userId) {
  const usersCollection = await getCollection(collectionName);
  const objectId = new ObjectID.createFromHexString(userId);
  const user = await usersCollection.findOne({ _id: objectId });

  if (!user) {
    throw new Error("Can not find user");
  }

  return user;
}

// Get user by name
async function getUserByName(username) {
  const usersCollection = await getCollection(collectionName);
  const user = await usersCollection.findOne({ username: username });

  if (!user) {
    throw new Error("Can not find user");
  }

  return user;
}

// Set new user
async function setUser(user) {
  const usersCollection = await getCollection(collectionName);
  const result = await usersCollection.insertOne({ ...user });

  return result;
}

// Function exports
exports.getUserById = getUserById;
exports.getUserByName = getUserByName;
exports.setUser = setUser;
