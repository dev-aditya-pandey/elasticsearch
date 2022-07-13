// using express to handle request and HTTP methods
const express = require("express");
const app = express();

// body-parser is responsible for parsing the incoming request bodies in a middleware before you handle it
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Handling GET request
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

// Searching on query
app.get("/search/:index/:type", async (req, res) => {
  const { phraseSearch } = require("./SearchEngine");
  const index = req.params.index;
  const type = req.params.type;
  const q = req.query.q;
  // console.log(req.params);
  // console.log(req.query);
  const data = await phraseSearch(
    { query: { match: { q } } },
    { index: index },
    { query: { match_all: {} } }
    // req.params.index,
    // req.params.type,
    // req.query.q
  );
  // res.json(data);
  res.send(req.params);
});

// Port
app.listen(3000, () => console.log("Server is running at 3000"));
