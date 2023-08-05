const Routes = require('express').Router();
const Code = require('../Model/CodeModal');
Routes.post("/",(req,res)=>{
    if (req.body.atec_code) {
        Code.create(req.body,(err)=>{
            res.send({Success : true})
        });
    }else{
        res.send({
            success : false,
            requireData : "atec_code",
            replacestatus : 400
        })
    }
   
});

Routes.get("/",(req,res)=>{
    Code.find({},(err,result)=>{
        res.send(result)
    });
});
Routes.get("/:id",(req,res)=>{
    let id = req.params.id;
    Code.findById({_id :id},(err,result)=>{
        res.send(result)
    });
});

Routes.delete("/:id",(req,res)=>{
  let id = req.params.id
    Code.deleteOne({_id: id},(err)=>{
        res.send({success : true})
    });
});

Routes.put("/:id",(req,res)=>{
    let id = req.params.id;
    Code.updateOne({_id : id},req.body,(err)=>{
        res.send({success : true})
    });
});

module.exports = Routes