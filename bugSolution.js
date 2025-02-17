const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      const error = new Error('Something went wrong!');
      error.status = 500;
      next(error); // Pass the error to the error handling middleware
    } else {
      res.send('Hello World!');
    }
  }, 1000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});