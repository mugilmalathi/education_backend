const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    student_id:{type: Number},
    student_name:{type: String},
    student_email:{type: String},
    student_age:{type: Number},
    student_DOB:{type: Date},
    student_mobileNo:{type: Number},
    student_class:{type: String},
    student_section:{type: String},
    student_address:{type: String},
    student_FathersName:{type: String},
    student_FathersOccupation:{type: String},
    student_FathersEmail:{type: String},
    student_FathersMobileNo:{type: Number},
    student_MothersName:{type: String},
    student_MothersOccupation:{type: String},
    student_MothersEmail:{type: String},
    student_MothersMobileNo:{type: Number},
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("student", studentSchema))