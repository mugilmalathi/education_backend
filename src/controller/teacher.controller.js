const express = require("express");
const router = express.Router();

const Teacher = require("../model/teacher.model");

router.get("/teacher", async(req, res)=>{
    const teacher = await Teacher.find().lean().exec();
    res.send(teacher);
})

router.post("/teacher", async(req, res)=>{
    const teacher = await Teacher.create(req.body);
    res.send(teacher);
})

module.exports = router;