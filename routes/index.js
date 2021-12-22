const express = require("express");

const mapsRoutes = require("./maps");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/maps", mapsRoutes);

module.exports = router;
