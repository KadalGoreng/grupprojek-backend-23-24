const express = require("express");

const wisataRoutes = require("./wisata");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/wisata", wisataRoutes);

module.exports = router;
