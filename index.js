const express = require("express");
const db = require("./db");

const app = express();

const port = process.env.PORT || 4000;

db;

app.listen(port, () => console.log(`Up and running on port ${port}`));
