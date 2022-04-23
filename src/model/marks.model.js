const mongoose = require("mongoose");

const MarkSchema = new mongoose.Schema({
    mark_id:{type: Number},
    tamil:{type: Number},
    english:{type: Number},
    maths:{type: Number},
    science:{type: Number},
    social_science:{type: Number},
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("marks", MarkSchema)
