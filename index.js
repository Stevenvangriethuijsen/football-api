const express = require("express");
const teamRouter = require("./team/router");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(teamRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Up and running on port ${port}`));
