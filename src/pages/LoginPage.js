import React from "react";
import AuthForm from "../components/AuthForm";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    const success = login(credentials);
    if (success) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AuthForm title="Login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
