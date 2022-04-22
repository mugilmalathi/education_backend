const mongoose = require("mongoose");

const MarkSchema = new mongoose.Schema({
    mark_id:{type: Number},
    tamil:{type: String},
    english:{type: String},
    maths:{type: String},
    science:{type: String},
    social_science:{type: String},
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("marks", MarkSchema)
