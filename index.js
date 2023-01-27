const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./router/routes"));

require("./db/connection");

app.listen(7070, () => {
  console.log("Listening on port 7070");
});
