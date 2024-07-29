const express = require("express")

const app = express()
const PORT = process.env.PORT
app.get("/", (req, res) => {
  res.send("hello world")
})
app.listen(PORT || 3000, () => {
  console.log("App is listening on port")
})
