import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

// Este componente recibe otro componente (la página a proteger) y verifica si el usuario está autenticado.
const ProtectedRoute = ({ children }) => {
  const user = getUser(); // Obtener el usuario autenticado (si lo hay)
  
  // Si no hay usuario autenticado, redirige al login.
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderiza la página protegida.
  return children;
};

export default ProtectedRoute;
