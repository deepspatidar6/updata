const Routes = require('express').Router();
const Vat = require('../Model/VatModal');

Routes.post("/",(req,res)=>{
    if (req.body.vat) {
        Vat.create(req.body,(err)=>{
            res.send({ success : true, status : 200})
        });
    }else{
        res.send({
            success : false,
            requireData : "vat",
            status : 400
        })
    }
  
});
Routes.get("/",(req,res)=>{
    Vat.find({},(err,result)=>{
        res.send(result)
    })
});
Routes.get("/:id",(req,res)=>{
    let id = req.params.id
    
    Vat.findById({_id: id},(err,result)=>{
        res.send(result)
    })
});
Routes.delete("/:id",(req,res)=>{
    let id = req.params.id;
    Vat.deleteOne({_id : id},(err)=>{
        res.send({success : true})
    })
});
Routes.put("/:id",(req,res)=>{
    let id = req.params.id;
    Vat.updateOne({_id:id},req.body,(err)=>{
        res.send({success : true})
    })
});



module.exports = Routes