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
  const [editingIndex, setEditingIndex] = useState(null);

  const addReview = (newReview) => {
    if (editingIndex !== null) {
      const updatedReviews = reviews.map((review, index) =>
        index === editingIndex ? newReview : review
      );
      setReviews(updatedReviews);
      setEditingIndex(null);
    } else {
      setReviews([...reviews, newReview]);
    }
  };

  const editReview = (index) => {
    setEditingIndex(index); // Establece el índice de la reseña que se va a editar
  };

  const deleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{restaurant.name}</h2>
      <p className="text-gray-600 mb-8">{restaurant.description}</p>

      <ReviewForm 
        onSubmit={addReview} 
        initialData={editingIndex !== null ? reviews[editingIndex] : {}} 
      />
      
      <h3 className="text-xl font-semibold text-gray-800 mt-8">Reseñas:</h3>
      <div className="mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-t border-gray-200 pt-4">
            <p className="text-gray-800">Comentario: {review.comment}</p>
            <p className="text-yellow-600">Calificación: {review.rating}</p>

            {/* Botón para editar */}
            <button
              onClick={() => editReview(index)}
              className="text-blue-500 hover:underline mr-4"
            >
              Editar
            </button>

            {/* Botón para eliminar */}
            <button
              onClick={() => deleteReview(index)}
              className="text-red-500 hover:underline"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
