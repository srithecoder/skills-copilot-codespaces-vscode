// Create web server
// Create a new Express application
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('POST request to /comments');
});

// Read comments
app.get('/comments', (req, res) => {
  res.send('GET request to /comments');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send(`PUT request to /comments/${req.params.id}`);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send(`DELETE request to /comments/${req.params.id}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Test the routes
// $ curl -X GET http://localhost:3000/comments
// $ curl -X POST http://localhost:3000/comments
// $ curl -X PUT http://localhost:3000/comments/1
// $ curl -X DELETE http://localhost:3000/comments/1
// $ curl -X DELETE http://localhost:3000/comments/2

// Path: users.js
// Create a new Express application
const express = require('express');
const app = express();

// Create a new user
app.post('/users', (req, res) => {
  res.send('POST request to /users');
});

// Read users
app.get('/users', (req, res) => {
  res.send('GET request to /users');
});

// Update a user
app.put('/users/:id', (req, res) => {
  res.send(`PUT request to /users/${req.params.id}`);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  res.send(`DELETE request to /users/${req.params.id}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Test the routes
// $ curl -X GET http://localhost:3000/users
// $ curl -X POST http://localhost:3000/users
// $ curl -X PUT http://localhost:3000/users/1
// $ curl -X DELETE http://localhost:3000/users/1
//