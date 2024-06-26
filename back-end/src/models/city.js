const mongoose = require('mongoose')
const {Schema} = mongoose

const addressSchema = new Schema({
    state:{type:String},
    country:{type:String}
})

const citySchema = new Schema({
    _id:Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    address:addressSchema,
    location:{
        type:[Number],
        required:true
    }
}, {
    collection:'city'
})

module.exports = mongoose.model('City',citySchema)