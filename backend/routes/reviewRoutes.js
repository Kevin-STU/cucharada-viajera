const express = require("express");
const { getReviews, addReview } = require("../controllers/reviewController");
const router = express.Router();

router.get("/:restaurantId", getReviews);
router.post("/:restaurantId", addReview);

module.exports = router;
