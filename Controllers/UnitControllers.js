const routes = require('express').Router()
const Unit = require('../Model/UnitModal');

routes.post("/",(req,res)=>{
    if (req.body.unit) {
        Unit.create(req.body,(err)=>{
            res.send({success : true})
        })    
    }else{
        res.send({
            success : false,
            status :400 ,
            requireData : "unit"
        })
    }
    
});

routes.get("/",(req,res)=>{
    Unit.find({},(err,respound)=>{
        res.send(respound)
    })
});
routes.get("/:id",(req,res)=>{
    let ids = req.params.id;
    Unit.findById({_id : ids},(err,respound2)=>{
        res.send(respound2)
    })
});
routes.delete("/:id",(req,res)=>{
    let ids = req.params.id;
    Unit.deleteOne({_id : ids},(err)=>{
        res.send({success : true , status : 201,})
    })
});
routes.put("/:id",(req,res)=>{
    let ids = req.params.id;
    Unit.updateOne({_id : ids},req.body,(err)=>{
        res.send({success : true , status : 201,})
    })
});
module.exports = routes;