const express = require("express");
const router = express.Router();
const { WrapAsync } = require("../../WrapAsync");
const fitnessController = require("../../Controllers/Fitness/Fitness")


router.post(
  "/add",
  WrapAsync(fitnessController.Fitness)
);

module.exports = router;
