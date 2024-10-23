const Restaurant = require("../models/restaurantModel");

exports.getRestaurants = (req, res) => {
  Restaurant.getAll((err, restaurants) => {
    if (err) return res.status(500).json({ message: "Error fetching restaurants" });
    res.json(restaurants);
  });
};
