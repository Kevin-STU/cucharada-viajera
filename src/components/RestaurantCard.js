import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
      <p className="text-gray-600 mt-2">{restaurant.description}</p>
      <Link
        to={`/restaurant/${restaurant.id}`}
        className="mt-4 inline-block text-yellow-600 hover:text-yellow-800"
      >
        View Details
      </Link>
    </div>
  );
};

export default RestaurantCard;
