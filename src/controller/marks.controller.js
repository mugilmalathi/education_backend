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

router.delete("/marks/:id", async(req, res)=>{
    const marks = await Marks.findByIdAndDelete(req.params.id);
    res.send(marks);
})
router.patch("/marks:id", async(req, res)=>{
    const marks = await Marks.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    res.send(marks);
})

module.exports = router;