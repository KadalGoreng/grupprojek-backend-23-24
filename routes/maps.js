const express = require("express");

const MapsController = require("../controllers/maps.controller");

// creates a new router instance.
const router = express.Router();

router.get("/", MapsController.getAllMaps);

module.exports = router;
