const express = require('express')
const cors = require('cors')

const app = express();

app.get("/api", cors(), (req, res) => {
  res.json({ "testData": ["userOne", "userTwo", "userThree"] })
})

app.listen(5000, () => {console.log("Server started on port 5000")})