// Load environment variables from .env file
require("dotenv").config();

// Import dependencies
const express = require("express");
const path = require("path");
const { initDatabase } = require("./lib/database");
const {
  getArticles,
  getArticle,
  updateArticle,
  setArticle
} = require("./lib/articles");
const { getEvents } = require("./lib/events");
const { getUserById, getUserByName, setUser } = require("./lib/users");
const app = express();
const bcrypt = require("bcrypt");

// Parse application/json for all request
app.use(express.json());

// Get articles collection from DB
app.get(`/api/articles`, async (request, response) => {
  try {
    const articles = await getArticles();
    return response.json(articles);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(404).end("Error");
  }
});

// Get article by ID from DB
app.get(`/api/articles/:id`, async (request, response) => {
  try {
    const articleId = request.params.id;
    const article = await getArticle(articleId);
    return response.json(article);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(404).end("Error");
  }
});

// Update article by ID in articles collection on DB
app.patch(`/api/articles/:id`, async (request, response) => {
  try {
    const articleId = request.params.id;
    const updates = request.body;
    const updatedArticle = await updateArticle(articleId, updates);
    return response.json(updatedArticle);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(400).end("Error");
  }
});

// Add new article in articles collection on DB
app.post(`/api/articles`, async (request, response) => {
  try {
    const newArticle = await setArticle(request.body);
    return response.json(newArticle);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(400).end("Error");
  }
});

// Get events collection from DB
app.get(`/api/events`, async (request, response) => {
  try {
    const events = await getEvents();
    return response.json(events);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(404).end("Error");
  }
});

// Get user by ID from DB
app.get(`/api/users/:id`, async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await getUserById(userId);
    return response.json(user);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(404).end("Error");
  }
});

// Add new user in users collection on DB
app.post(`/api/users`, async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const password = { password: hashedPassword };
    const newUser = Object.assign(request.body, password);

    const user = await setUser(newUser);
    return response.json(user);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(400).end("Error");
  }
});

// Compare users login credentials with user in DB
app.post(`/api/users/login`, async (request, response) => {
  const user = await getUserByName(request.body.username);
  if (user === null) {
    return response.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(request.body.password, user.password)) {
      response.json("Success");
    } else {
      response.json("Not Allowed");
    }
  } catch {
    response.status(500).send();
  }
});

// Load environment from .env file
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Initalize DB based one environment variables
initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
