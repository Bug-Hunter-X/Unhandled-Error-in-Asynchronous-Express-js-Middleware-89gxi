# Unhandled Error in Asynchronous Express.js Middleware

This repository demonstrates a common issue in Express.js applications: unhandled errors within asynchronous middleware.  The provided `bug.js` file showcases code that throws an error inside a `setTimeout` callback. Because the error isn't properly handled, the server crashes silently without providing informative error messages.

The `bugSolution.js` file presents a solution demonstrating best practices for handling asynchronous errors and providing more robust error handling in Express.js applications.