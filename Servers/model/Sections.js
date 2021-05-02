const mongoose = require('mongoose');
const {Schema} = mongoose ;

const SectionsSchema = new Schema({
    field : {
        type: String,
        trim:true
    },
    title : {
        type: String,
        trim:true
    },
    description : {
        type: String,
        trim:true
    },
    icon : {
        type: String,
        trim:true
    },
    colorThem : {
        type: String,
        trim:true
    },
    SectionTitle: {
        type: String,
        trim:true,
        unique: true
    }
})

const Sections = mongoose.model('sections' ,SectionsSchema );
module.exports = Sections;