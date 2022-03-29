const express= require('express');
const Product = require('../models/product');
const Category = require("../models/category");
const router= express.Router();

router.get('/category',async (req,res)=>{
 try{
    const category = await Category.find();
    res.json({category});
 
 }catch(er){
  console.log(er);
 }
})
router.get('/product',async (req,res)=>{
    try{
       const product = await Product.find();
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
   })
router.get('/product/search//:id',async (req,res)=>{
    try{
       const product = await Product.findById(req.params.id);
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
})
router.get('/category/search//:id',async (req,res)=>{
    try{
       const category = await Category.findById(req.params.id);
       res.json(category);
    
    }catch(er){
     console.log(er);
    }
})
router.delete('/product/delet/:id',async (req,res)=>{
    try{
       const product = await Product.deleteOne({"_id" : req.params.id});
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
})
router.delete('/category/delet/:id',async (req,res)=>{
    try{
       const category = await Category.deleteOne({"_id" : req.params.id});
       res.json(category);
    
    }catch(er){
     console.log(er);
    }
})
router.patch('/product/patch/:id',async (req,res)=>{
    try{
       const product = await Product.updateOne({"_id" : req.params.id } , {"title" : req.body.title});
       res.json(product);
    
    }catch(er){
     console.log(er);
    }
})
router.patch('/category/patch/:id',async (req,res)=>{
    try{
       const category = await Category.updateOne({"_id" : req.params.id } , {"title" : req.body.title});
       res.json(category);
    
    }catch(er){
     console.log(er);
    }
})
router.post('/product/post', (req,res)=>{
    const product = new Product({
    title:req.body.title,
    desc:req.body.desc,
    imageUrl:req.body.imageUrl,
    });
    product.save().then((data)=>{
      res.json({
          "masage" : "created producted" ,
          "data" : data ,
      })
    })
})
router.post('/category/post', (req,res)=>{
    const category = new Category({
    text:req.body.text,
    desc:req.body.desc,
    imageUrl:req.body.imageUrl,
    });
    category.save().then((data)=>{
      res.json({
          "masage" : "created producted" ,
          "data" : data ,
      })
    })
})

module.exports= router;