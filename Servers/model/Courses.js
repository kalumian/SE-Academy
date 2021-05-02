const mongoose = require('mongoose'),
{Schema} = mongoose;

const CoursesSchema = new Schema({
    course : {
        type: String,
        trim:true,
        unique: true,
    },
    title : {
        type: String,
        trim:true
    },
    colorThem : {
        type: String,
        trim:true,
    },
    Date : {
        type: String,
        trim:true
    },
    number_oF_Video : {
        type: String,
        trim:true
    },
    title_section : {
        type: String,
        trim:true
    },
    Channle : {
        type: String,
        trim:true
    },
    logo_Channle : {
        type: String,
        trim:true
    },
    image_video : {
        type: String,
        trim:true
    }
})

const Courses = mongoose.model('courses' ,CoursesSchema );
module.exports = Courses;