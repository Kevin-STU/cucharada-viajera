import React, { useState } from "react";

const AuthForm = ({ title, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
      >
        {title}
      </button>
    </form>
  );
};

export default AuthForm;
