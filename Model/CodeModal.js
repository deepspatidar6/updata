require("../database/Database");


const mongoose = require('mongoose');



const Code = mongoose.Schema({
    atec_code : String
});

module.exports = mongoose.model("code", Code)