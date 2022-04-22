const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    teacher_id:{type: Number},
    teacher_name:{type: String},
    teacher_email:{type: String},
    teacher_age:{type: Number},
    teacher_DOB:{type: Date},
    teacher_mobileNo:{type: Number},
    teacher_type:{type: String},
    student_address:{type: String},
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("teacher", teacherSchema)
