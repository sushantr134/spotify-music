const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (res, req) => {
  res.sendFile("./index.html");
});

app.listen(8000, err => {
  if (err) throw err;
  else {
    console.log("App Started at 8000");
  }
});
