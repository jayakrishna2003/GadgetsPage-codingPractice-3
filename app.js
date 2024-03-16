const express = require('express')

const app = express()

// app.get('./gadgets', (request, response) => {
//   response.sendFile('./gadgets.html', {root: __dirname})
// })
app.get("/gadgets", (request, response) => {
  response.sendFile(path.join(__dirname, "gadgets.html"));
});

module.exports = app
