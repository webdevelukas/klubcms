// Import dependencies
const { getCollection } = require("./database");

// Define variables
const collectionName = "events";

async function getEvents() {
  const eventsCollection = await getCollection(collectionName);
  const events = await eventsCollection.find({}).toArray();

  if (!events) {
    throw new Error("Can not find events");
  }

  return events;
}

// Function exports
exports.getEvents = getEvents;
