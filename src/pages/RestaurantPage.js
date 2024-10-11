import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

const restaurantsData = [
  { id: 1, name: "El menor", description: "Carne angus estilo New York" },
  { id: 2, name: "Camachos", description: "Las mejores hamburguesas de Bucaramanga" },
];

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = restaurantsData.find((r) => r.id === parseInt(id));
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {restaurant.name}
      </h2>
      <p className="text-gray-600 mb-8">{restaurant.description}</p>
      <ReviewForm onSubmit={addReview} />
      <h3 className="text-xl font-semibold text-gray-800 mt-8">Reviews:</h3>
      <div className="mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-t border-gray-200 pt-4">
            <p className="text-gray-800">Comment: {review.comment}</p>
            <p className="text-yellow-600">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
