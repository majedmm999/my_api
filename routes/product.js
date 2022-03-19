const express= require('express');
const Product = require('../models/product');
const router= express.Router();

router.get('/Home',async (req,res)=>{
 try{
    const product = await Product.find();
    res.json(product);
 
 }catch(er){
  console.log(er);
 }
})
router.get('/:id',async (req,res)=>{
    try{
       const product = await Product.findById(req.params.id);
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
})
router.delete('/:id',async (req,res)=>{
    try{
       const product = await Product.deleteOne({"_id" : req.params.id});
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
})
router.patch('/:id',async (req,res)=>{
    try{
       const product = await Product.updateOne({"_id" : req.params.id } , {"title" : req.body.title});
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
})
router.post('/post', (req,res)=>{
    const product = new Product({
    title:req.body.title,
    desc:req.body.desc,
    color:req.body.color,
    });
    product.save().then((data)=>{
      res.json({
          "masage" : "created producted" ,
          "data" : data ,
      })
    })
})

module.exports= router;