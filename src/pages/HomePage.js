import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Sitios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
