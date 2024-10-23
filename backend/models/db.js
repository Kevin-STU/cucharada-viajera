const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "restaurant_reviews"
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: " + err.stack);
    return;
  }
  console.log("Conectada a la base de datos MySQL");
});

module.exports = db;
