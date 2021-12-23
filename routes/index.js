const express = require("express");


const hotelRoutes = require("./hotel");
const reviewRoutes = require("./review");
const userRoutes = require("./user");
const wisataRoutes = require("./wisata");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});


router.use("/hotel", hotelRoutes);
router.use("/", reviewRoutes);
router.use("/users", userRoutes);
router.use("/wisata", wisataRoutes);


module.exports = router;
