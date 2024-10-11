import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const restaurantsData = [
  { id: 1, name: "El menor", description: "Carne angus estilo New York" },
  { id: 2, name: "Camachos", description: "Las mejores hamburguesas de Bucaramanga" },
];

const HomePage = () => {
  const [restaurants] = useState(restaurantsData);

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
