const express = require("express");
require("./db/connection");
const Student = require("./models/students");
const studentRouter = require("./routers/studentRouter");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>welcome user</h1>");
});

app.use(studentRouter);

// CONNECTION TO PORT
app.listen(port, () => {
  console.log(`connection is setup at ${port}`)
});