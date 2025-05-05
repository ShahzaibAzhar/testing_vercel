// api/index.js
const express = require('express');
const app = express();

// Your routes
app.get('/', (req, res) => {
  res.send('Hello from Expresssssss!');
});

const PORT = 5000

app.listen(PORT, () => console.log(`I'm Listening on ${ PORT }`))

// Export the app as a function
module.exports = app;
