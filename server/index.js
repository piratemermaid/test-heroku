const path = require("path");
const cors = require("cors");
var express = require("express");
var app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

app.get("/api", function (req, res) {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Node app listening on port", port);
});
