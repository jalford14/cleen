const express = require("express");
const bodyParser = require("body-parser");
var index = require("./routes/index");

const app = express();
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", index);

app.listen(port, () => console.log(`Listening on port ${port}`));
