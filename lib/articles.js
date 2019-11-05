// Import dependencies
const { ObjectID } = require("mongodb");
const { getCollection } = require("./database");

// Define variables
const collectionName = "articles";

// Get articles collection
async function getArticles() {
  const articlesCollection = await getCollection(collectionName);
  const articles = await articlesCollection.find({}).toArray();

  if (!articles) {
    throw new Error("Can not find articles");
  }

  return articles;
}

// Get article by ID
async function getArticle(articleId) {
  const articlesCollection = await getCollection(collectionName);
  const objectId = new ObjectID.createFromHexString(articleId);
  const article = await articlesCollection.findOne({ _id: objectId });

  if (!article) {
    throw new Error("Can not find article");
  }

  return article;
}

// Get and update article by ID
async function updateArticle(articleId, updates) {
  const articlesCollection = await getCollection(collectionName);
  const article = await articlesCollection.updateOne(
    { _id: ObjectID(articleId) },
    { $set: updates }
  );

  if (!article) {
    throw new Error("Can not find article");
  }

  return article;
}

// Set new article
async function setArticle(article) {
  const articlesCollection = await getCollection(collectionName);
  const result = await articlesCollection.insertOne({ ...article });

  return result;
}

// Function exports
exports.getArticles = getArticles;
exports.getArticle = getArticle;
exports.updateArticle = updateArticle;
exports.setArticle = setArticle;
