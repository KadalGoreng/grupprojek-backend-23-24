const express = require("express");

const ReviewController = require("../controllers/review.controller");

// creates a new router instance.
const router = express.Router();

router.post("/addreview", ReviewController.createNewReview);
router.post("/wisata/:id_wisata/addreview", ReviewController.createNewReview);

module.exports = router;
