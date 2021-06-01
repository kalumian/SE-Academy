const mongoose = require('mongoose');
const {Schema} = mongoose ;

const VideosSchema = new Schema({
    course_title : {
        type: String,
        trim:true,
        unique: true
    },
    course_name : {
        type: String,
        trim:true
    },
    episode : {
        type: Number,
        trim:true
    },
    name_Channel : {
        type: String,
        trim:true
    },
    link_videos : {
        type: String,
        trim:true,
        unique: true
    },
    image_video : {
        type: String,
        trim:true
    },
    colorThem : {
        type: String,
        trim:true
    },
    video_title : {
        type: String,
        trim:true
    }
})
const Videos = mongoose.model('videos' ,VideosSchema );
module.exports = Videos;