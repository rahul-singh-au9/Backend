const express = require("express");
require("./db/connection")
const MenRanking = require("./models/100m")
const app = express();
const port = process.env.PORT || 3001;
const router = require("./routers/mensRouter")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome user")
})

app.use(router)

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})