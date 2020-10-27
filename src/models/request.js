const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;
const requestSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone:{
        type:String,
        required:true,
        trim: true,
       
    },
    package:{
        type:String,
        required:true,
    }

})
const Request = mongoose.model('request', requestSchema)
module.exports = Request