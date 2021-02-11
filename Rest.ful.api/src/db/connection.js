const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => console.log("connection successfull...."))
.catch((err) => console.log(err));