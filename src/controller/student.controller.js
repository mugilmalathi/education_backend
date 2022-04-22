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

router.delete("/student/:id", async(req, res)=>{
    const student = await Student.findByIdAndDelete(req.params.id);
    res.send(student);
})
router.patch("/student/:id", async(req, res)=>{
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    res.send(student);
})

module.exports = router;