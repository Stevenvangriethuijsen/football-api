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

router.post("/team", async (req, res, next) => {
  try {
    const createTeam = await Team.create(req.body);
    res.status(201).json(createTeam);
  } catch (error) {
    next(error);
  }
});

router.get("/team/:id", async (req, res, next) => {
  try {
    const teamId = req.params.id;
    const singleTeam = await Team.findByPk(teamId);
    if (singleTeam) {
      res.json(singleTeam);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
