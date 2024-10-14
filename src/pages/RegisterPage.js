import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (credentials) => {
    const success = register(credentials);
    if (success) {
      navigate("/login");
    } else {
      alert("El correo que utilizaste ya está en uso");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AuthForm title="Registro" onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
