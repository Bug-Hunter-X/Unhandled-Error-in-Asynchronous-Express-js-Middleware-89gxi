const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate an error, like a database error
      const error = new Error('Something went wrong!');
      error.status = 500;
      throw error; // Throwing the error here
    } else {
      res.send('Hello World!');
    }
  }, 1000); 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});