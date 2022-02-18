const express = require("express");
const bodyParser = require("body-parser");

const articlesInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

//applicacion express
const app = express();

app.use(bodyParser.json());

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName])
});
app.listen(8000, () => console.log("Listening on port 8000"));

//Pruebas
//get
// app.get("/hello", (req, res) => res.send("Hello World!"));

// //post
// app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}`));

// //parameters
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));
