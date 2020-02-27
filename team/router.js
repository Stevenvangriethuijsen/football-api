const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", async (req, res, next) => {
  try {
    const teams = await Team.findAll();
    if (teams) {
      res.json(teams);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
