const express = require("express");

const hotelRoutes = require("./hotel");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
    const ready = {
        status: "server is ready",
    }

    res.status(200).send(ready);
})

router.use("/hotel", hotelRoutes);

module.exports = router;
