const express = require("express");
const db = require("./db");
const Team = require("./team/model");

const app = express();

const port = process.env.PORT || 4000;

db;

app.listen(port, () => console.log(`Up and running on port ${port}`));
