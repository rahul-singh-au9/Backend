const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/100m")


// POST REQUESTS
router.post("/men", async(req, res) => {

  try{
    console.log(req.body)
    const addingMenRecord = new MenRanking(req.body)
    const insertMenRecord = await addingMenRecord.save();
    res.status(201).send(insertMenRecord)
  }
  catch(err){
    res.status(500).send(err)
  }

})

// GET REQUESTS
router.get("/men", async(req, res) => {

  try{
    const mens = await MenRanking.find({})
    res.send(mens)
  }
  catch(err){
    res.status(400).send(err)
  }
})


// GET INDIVISUAL REQUEST
router.get("/men/:id", async(req, res) => {

  try{
    const _id = req.params.id
    const men = await MenRanking.findById({_id})
    res.send(men)
  }
  catch(err){
    res.status(400).send(err)
  }
})

// UPDATE INDIVISUAL RECORD
router.patch("/men/:id", async(req, res) => {

  try{
    const _id = req.params.id
    const men = await MenRanking.findByIdAndUpdate(_id, req.body, {new: true});
    res.send(men)
  }
  catch(err){
    res.status(500).send(err)
  }
})

// DELETE INDIVISUAL RECORD
router.delete("/men/:id", async(req, res) => {

  try{
    const _id = req.params.id
    const men = await MenRanking.findByIdAndDelete(_id);
    res.send(men)
  }
  catch(err){
    res.status(500).send(err)
  }
})

module.exports = router