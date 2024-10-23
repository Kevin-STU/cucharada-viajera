const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, user) => {
    if (user.length > 0) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    User.create({ email, password: hashedPassword }, (err) => {
      if (err) return res.status(500).json({ message: "Error creating user" });
      res.status(201).json({ message: "User registered" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, users) => {
    if (users.length === 0) return res.status(400).json({ message: "User not found" });

    const user = users[0];
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "1h" });
    res.json({ token, user });
  });
};
