const express = require("express");
const router = express.Router();

const Student = require("../model/student.model");

router.get("/student", async(req, res)=>{
    const student = await Student.find().lean().exec();
    res.send(student);
})

router.post("/student", async(req, res)=>{
    const student = await Student.create(req.body);
    res.send(student);
})

module.exports = router;