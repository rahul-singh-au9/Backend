const express = require("express");
const studentRouter = new express.Router();
const Student = require("../models/students");


// PROMISE
// app.post("/students", (req, res) => {
//   res.send("<h1>welcome students</h1>");
//   console.log(req.body)

//   const user = new Student(req.body)

//   user.save().then(() => {
//     res.status(201).send(user)
//   }).catch((err) => {
//     res.status(400).send(err)
//   })
// })

// ASYNC-AWAIT
// POST
studentRouter.post("/students", async(req, res) =>{
  try{
    const user = new Student(req.body)
    const createUser = await user.save()
    res.status(201).send(createUser)
  }catch(err){
    res.status(400).send(err)
  }
})


// READ(GET) THE DATA OF REGISTERED STUDENTS
studentRouter.get("/students", async(req, res) => {
  try{
    const studentData = await Student.find()
    res.send(studentData)
  }catch(res){
    res.send(err)
  }
})


// GET THE INDIVISUAL STUDENT DATA BY USING _ID
studentRouter.get("/students/:id", async(req, res) => {
  try{
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData)

    if(!studentData){
      return res.status(404).send()
    }else{
      return res.status(200).send(studentData)
    }

  }catch(err){
    res.status(500).send(err)
  }
})



// DELETE THE INDIVISUAL STUDENT DATA BY USING _ID
studentRouter.delete("/students/:id", async(req, res) => {
  try{
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id)
    // console.log(deleteStudent)
    if(!req.params.id){
      return res.status(400).send()
    }else{
      res.send(deleteStudent)
    }
  }catch(err){
    res.status(500).send(err)
  }
})


// UPDATE THE STUDENT DATA USING _ID
studentRouter.patch("/students/:id", async(req, res) => {
  try{
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {new:true})
    res.send(updateStudent);
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = studentRouter