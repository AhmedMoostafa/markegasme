const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;
const contactSchema = new Schema({
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
    msgs: [{
        msg: {
            type: String,
            required: true
        }
    }]

})
const contact = mongoose.model('Contact', contactSchema)
module.exports = contact