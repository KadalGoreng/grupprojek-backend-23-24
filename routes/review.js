const express = require("express");

const ReviewController = require("../controllers/review.controller");

// creates a new router instance.
const router = express.Router();

router.post("/hotel/:review_loc/addreview", ReviewController.createNewReview);
router.post("/wisata/:review_loc/addreview", ReviewController.createNewReview);
router.get("/hotel/:id/reviews", ReviewController.getReviewByLoc);
router.get("/wisata/:id/reviews", ReviewController.getReviewByLoc);

module.exports = router;