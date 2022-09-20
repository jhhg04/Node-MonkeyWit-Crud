const express = require('express');
const Model = require('../models/user');

const router = express.Router();

// Create User
router.post('/users', (req, res) => {
  const user = Model(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get All User
router.get('/users', (req, res) => {
  Model.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a User
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  Model.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update a User
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  Model.updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update a User
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  Model.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
