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

router.delete("/teacher/:id", async(req, res)=>{
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    res.send(teacher);
})
router.patch("/teacher/:id", async(req, res)=>{
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    res.send(teacher);
})

module.exports = router;