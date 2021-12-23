const express = require("express");

const ReviewController = require("../controllers/review.controller");

// creates a new router instance.
const router = express.Router();

router.post("/hotel/addreview", ReviewController.createNewReview);
router.post("/wisata/:id/addreview", ReviewController.createNewReview);

module.exports = router;