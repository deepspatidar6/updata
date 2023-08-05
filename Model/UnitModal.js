const mongoose = require('mongoose');
require('../database/Database');
const  Unit = mongoose.Schema({
    unit:  { type :  String ,  required : true},
  
})
module.exports = mongoose.model("unit",Unit);