const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT;

const studentController = require("./controller/student.controller");
const teacherController = require("./controller/teacher.controller");


app.use("/", studentController);
app.use("/", teacherController);


app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Connected to db");
    }
    catch(err){
        console.log("err", err);
    }
})
