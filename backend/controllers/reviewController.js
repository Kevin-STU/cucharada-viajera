const Review = require("../models/reviewModel");

exports.getReviews = (req, res) => {
  const { restaurantId } = req.params;
  Review.getByRestaurantId(restaurantId, (err, reviews) => {
    if (err) return res.status(500).json({ message: "Error fetching reviews" });
    res.json(reviews);
  });
};

exports.addReview = (req, res) => {
  const { restaurantId } = req.params;
  const { comment, rating } = req.body;

  Review.create({ restaurantId, comment, rating }, (err) => {
    if (err) return res.status(500).json({ message: "Error adding review" });
    res.status(201).json({ message: "Review added" });
  });
};
