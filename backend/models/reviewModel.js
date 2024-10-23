const db = require("./db");

const Review = {
  getByRestaurantId: (restaurantId, callback) => {
    db.query("SELECT * FROM reviews WHERE restaurant_id = ?", [restaurantId], callback);
  },

  create: (review, callback) => {
    db.query("INSERT INTO reviews (restaurant_id, comment, rating) VALUES (?, ?, ?)", [review.restaurantId, review.comment, review.rating], callback);
  }
};

module.exports = Review;
