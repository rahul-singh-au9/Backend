const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics",{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  console.log("connection successfull.......")
})
.catch((err) => {
  console.log(err)
})