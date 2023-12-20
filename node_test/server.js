const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("나가주세요");
});
