const mongoose = require('mongoose'),
{Schema} = mongoose;

const FieldsSchema = new Schema({
    title : {
        type: String,
        trim:true,
        unique: true
    },
    description : {
        type: String,
        trim:true
    },
    image : {
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
    }
})

const Fields = mongoose.model('fields' ,FieldsSchema );
module.exports = Fields;