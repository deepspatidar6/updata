require('../database/Database');
const mongoose = require('mongoose')
const Vat = mongoose.Schema({
    vat : { type :  String ,  required : true},
})


module.exports = mongoose.model("vat" , Vat)