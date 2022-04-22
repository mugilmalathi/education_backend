const express = require("express");
const router = express.Router();

const Marks = require("../model/marks.model");

router.get("/marks", async(req, res)=>{
    const marks = await Marks.find().lean().exec();
    res.send(marks);
})

router.post("/marks", async(req, res)=>{
    const marks = await Marks.create(req.body);
    res.send(marks);
})

module.exports = router;