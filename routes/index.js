const express = require("express");


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


router.use("/", reviewRoutes);
router.use("/users", userRoutes);
router.use("/wisata", wisataRoutes);


module.exports = router;