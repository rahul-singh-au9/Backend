const mongoose = require("mongoose");
const validator = require("validator");


// student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },

  email: {
    type: String,
    required: true,
    unique: [true,"Email is already registered"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Please enter a valid Email !")
      }
    }
  },

  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true,
    unique: true
  },

  address: {
    type: String,
    required: true,
  }
})

// MODEL
// we will create a new collection
const Student = new mongoose.model("Student", studentSchema)

// export Student to other files
module.exports = Student