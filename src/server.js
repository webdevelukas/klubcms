const { ObjectID } = require("mongodb");
const express = require("express");
const { initDatabase, getCollection } = require("./database");
const app = express();

const port = 8080;

const articlesCollectionName = "articles";
const eventsCollectionName = "events";

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

initDatabase().then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server listens on http://localhost:${port}`);
});
