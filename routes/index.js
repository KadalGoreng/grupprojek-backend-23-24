const express = require("express");

const HotelRoutes = require("./Hotel");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
    const ready = {
        status: "server is ready",
    }

    res.status(200).send(ready);
})

router.use("/Hotel", HotelRoutes);

module.exports = router