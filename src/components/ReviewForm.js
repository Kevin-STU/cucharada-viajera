import React, { useState } from "react";

const ReviewForm = ({ onSubmit, initialData = {} }) => {
  const [review, setReview] = useState(initialData.comment || "");
  const [rating, setRating] = useState(initialData.rating || 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ comment: review, rating });
    setReview("");
    setRating(1);
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {initialData.comment ? "Edit Review" : "Add Review"}
      </h3>
      <label className="block mb-4">
        <span className="text-gray-700">Comment:</span>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 bg-gray-50"
          rows="4"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Rating:</span>
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
      >
        {initialData.comment ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default ReviewForm;
