const db = require("./db");

const Restaurant = {
  getAll: (callback) => {
    db.query("SELECT * FROM restaurants", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM restaurants WHERE id = ?", [id], callback);
  }
};

module.exports = Restaurant;
