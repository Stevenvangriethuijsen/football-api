const { Router } = require("express");
const Player = require("./model");
const Team = require("../team/model");

const router = new Router();

router.get("/player", async (req, res, next) => {
  try {
    const players = await Player.findAll();
    if (players) {
      res.json(players);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

router.post("/player", async (req, res, next) => {
  try {
    const createPlayer = await Player.create(req.body);
    res.status(201).json(createPlayer);
  } catch (error) {
    next(error);
  }
});

router.get("/player/:id", async (req, res, next) => {
  try {
    const playerId = req.params.id;
    const singlePlayer = await Player.findByPk(playerId, { include: [Team] });
    if (singlePlayer) {
      res.json(singlePlayer);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
