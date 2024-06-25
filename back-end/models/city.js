const mongoose = require('mongoose')
const {Schema} = mongoose

const citySchema = new Schema({
    _id:Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    address:{
        state: {
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }
    },
    location:{
        type:Schema.Types.Array,
        required:true
    }
})

module.exports = mongoose.model('City',citySchema)