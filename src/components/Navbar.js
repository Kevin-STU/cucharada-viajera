import React from "react";
import { Link } from "react-router-dom";
import { logout, getUser } from "../utils/auth";

const Navbar = () => {
  const user = getUser();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Cuchara Viajera</h1>
      <ul className="flex space-x-4">
        {user ? (
          <>
            <li className="text-white">Bienvenido, {user.email}</li>
            <li>
              <button
                onClick={logout}
                className="text-white hover:text-yellow-500"
              >
                Salir
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="text-white hover:text-yellow-500">
                Entrar
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-white hover:text-yellow-500"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
