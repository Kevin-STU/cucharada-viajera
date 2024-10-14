import React from "react";
import { Link } from "react-router-dom";

const restaurantsData = [
  { id: 1, name: "El menor", description: "Carne angus estilo New York" },
  { id: 2, name: "Camachos", description: "Las mejores hamburguesas de Bucaramanga" },
];

const SelectRestaurantPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Selecciona un restaurante para reseñar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurantsData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {restaurant.name}
            </h3>
            <p className="text-gray-600 mt-2">{restaurant.description}</p>
            <Link
              to={`/add-review/${restaurant.id}`}
              className="mt-4 inline-block text-yellow-600 hover:text-yellow-800"
            >
              Escribir reseña
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRestaurantPage;
