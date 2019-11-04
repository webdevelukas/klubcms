const express = require("express");
const { initDatabase, getCollection } = require("./database");
const app = express();

const port = 8080;

const collectionName = "articles";

app.get(`/api/articles`, async (request, response) => {
  try {
    const articles = await getArticles();
    return response.json(`Articles: ${articles}`);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function getArticles() {
  const articlesCollection = await getCollection(collectionName);
  const articles = await articlesCollection.find({}).toArray();
  if (!articles) {
    throw new Error("Can not find articles");
  }

  return articles;
}

initDatabase().then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server listens on http://localhost:${port}`);
});
