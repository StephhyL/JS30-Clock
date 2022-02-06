const express = require("express");
const app = express();
const PORT = 1234;

app.use(express.static("public"));

app.listen(1234, () => {
  console.log(`server running...`);
});
