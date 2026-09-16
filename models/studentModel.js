
const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true,
        enum:["IT","CSE","DS","AIML","IOT"],
    },

})

const Student = mongoose.model("student", studentSchema);
module.exports =  Student ;