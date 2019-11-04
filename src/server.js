const { ObjectID } = require("mongodb");
const express = require("express");
const { initDatabase, getCollection } = require("./database");
const app = express();

const port = 8080;

const articlesCollectionName = "articles";
const eventsCollectionName = "events";

app.use(express.json());

app.get(`/api/articles`, async (request, response) => {
  try {
    const articles = await getArticles();
    return response.json(articles);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function getArticles() {
  const articlesCollection = await getCollection(articlesCollectionName);
  const articles = await articlesCollection.find({}).toArray();

  if (!articles) {
    throw new Error("Can not find articles");
  }

  return articles;
}

app.get(`/api/events`, async (request, response) => {
  try {
    const events = await getEvents();
    return response.json(events);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function getEvents() {
  const eventsCollection = await getCollection(eventsCollectionName);
  const events = await eventsCollection.find({}).toArray();

  if (!events) {
    throw new Error("Can not find events");
  }

  return events;
}

app.get(`/api/articles/:id`, async (request, response) => {
  try {
    const articleId = request.params.id;
    const article = await getArticle(articleId);
    return response.json(article);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function getArticle(articleId) {
  const articlesCollection = await getCollection(articlesCollectionName);
  const objectId = new ObjectID.createFromHexString(articleId);
  const article = await articlesCollection.findOne({ _id: objectId });

  if (!article) {
    throw new Error("Can not find articles");
  }

  return article;
}

app.patch(`/api/articles/:id`, async (request, response) => {
  try {
    const articleId = request.params.id;
    const updates = request.body;
    const updatedArticle = await updateArticle(articleId, updates);
    return response.json(updatedArticle);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function updateArticle(articleId, updates) {
  const articlesCollection = await getCollection(articlesCollectionName);
  const article = await articlesCollection.updateOne(
    { _id: ObjectID(articleId) },
    { $set: updates }
  );

  if (!article) {
    throw new Error("Can not find articles");
  }

  return article;
}

app.post(`/api/articles`, async (request, response) => {
  try {
    console.log(request);
    console.log(request.body);
    const newArticle = await setArticle(request.body);
    return response.json(newArticle);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function setArticle(article) {
  const articlesCollection = await getCollection(articlesCollectionName);
  const result = await articlesCollection.insertOne({ ...article });

  return result;
}

initDatabase().then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server listens on http://localhost:${port}`);
});
