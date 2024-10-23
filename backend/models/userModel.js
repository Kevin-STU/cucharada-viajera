const db = require("./db");

const User = {
  findByEmail: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  },

  create: (user, callback) => {
    db.query("INSERT INTO users (email, password) VALUES (?, ?)", [user.email, user.password], callback);
  }
};

module.exports = User;
