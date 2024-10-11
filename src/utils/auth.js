// Simulación de BD
const usersDB = JSON.parse(localStorage.getItem("users")) || [];

export const login = ({ email, password }) => {
  const user = usersDB.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  }
  return false;
};

export const register = ({ email, password }) => {
  const userExists = usersDB.find((user) => user.email === email);
  if (userExists) {
    return false;
  }
  const newUser = { email, password };
  usersDB.push(newUser);
  localStorage.setItem("users", JSON.stringify(usersDB));
  return true;
};

export const logout = () => {
  localStorage.removeItem("loggedUser");
  window.location.reload(); // Refresh the page after logout
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("loggedUser"));
};
