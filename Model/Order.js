require("../database/Database");
const mongoose = require('mongoose');
const Order = mongoose.Schema({
   
    orderid:Number,
    customername : String,
    subtotal : Number,
    grandtotal:Number,
    paymenttype:String,
    taxamount:Number,
    catogoryname:String,
    date :Date,
    item :{
        servicename : String,
        costprice : Number,
        serviceid:Number,
        quantity:Number,
        total:Number
          }
});





module.exports = mongoose.model("order",Order)