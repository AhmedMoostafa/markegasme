const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
    },
    post:{
        type:String,
        required:true,
        trim: true,
       
    },
    createdAt: {
        type: Date,
        default: Date.now
      }

})
const post = mongoose.model('post', postSchema)
module.exports = post