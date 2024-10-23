const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'restaurant_reviews'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// Ruta para obtener todos los restaurantes
app.get('/api/restaurants', (req, res) => {
  const sql = 'SELECT * FROM restaurants';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para agregar una reseña
app.post('/api/reviews', (req, res) => {
  const { comment, rating, user_id, restaurant_id } = req.body;
  const sql = 'INSERT INTO reviews (comment, rating, user_id, restaurant_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [comment, rating, user_id, restaurant_id], (err, result) => {
    if (err) throw err;
    res.send('Reseña agregada');
  });
});

app.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
});
