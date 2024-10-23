import React, { useState } from "react";

const ReviewForm = ({ onSubmit, initialData = {}, restaurantId }) => {
  const [review, setReview] = useState(initialData.comment || "");
  const [rating, setRating] = useState(initialData.rating || 1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Indicar que la solicitud está en progreso

    // Lógica para enviar la reseña al backend
    fetch(`http://localhost:5000/api/reviews/${restaurantId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: review, rating }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);  // Manejar cualquier error del servidor
        } else {
          onSubmit({ comment: review, rating }); // Llama a onSubmit para actualizar el estado del padre
          setReview("");  // Limpia el campo de comentario
          setRating(1);   // Reinicia la calificación
        }
        setLoading(false);  // Finalizar la carga
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        setError("Ocurrió un error al enviar la reseña");
        setLoading(false);  // Finalizar la carga
      });
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {initialData.comment ? "Editar Reseña" : "Añadir Reseña"}
      </h3>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      <label className="block mb-4">
        <span className="text-gray-700">Comentario:</span>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-gray-50"
          rows="4"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Calificación:</span>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-gray-50"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        disabled={loading}
      >
        {loading ? "Enviando..." : initialData.comment ? "Actualizar" : "Enviar"}
      </button>
    </form>
  );
};

export default ReviewForm;
