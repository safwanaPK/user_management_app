const express=require('express')
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;

const Employee=require('./employee.js');

// get single employee
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
       Employee.findById(req.params.id,(err,doc)=>{
        if(err){
            console.log('Error in GET Employee by Id'+err);
         } else{
            res.send(doc);
         } 
       }) 
    }else{
     return res.status(400).send(` no record found with ID ${req.params.id}`)   ;
    }
})

// get api post

router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log('Error in GET'+err);
         } else{
            res.send(doc);
         } 
     } )
})
// post API
router.post('/',(req,res)=>{
    let emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        dept:req.body.dept
    })
    emp.save((err,doc)=>{
     if(err){
        console.log('Error in post data'+err);
     } else{
        res.send(doc);
     }  
    })
})

// put api

router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp={
           name:req.body.name,
           position:req.body.position,
           dept:req.body.dept 
        }

       Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(err){
            console.log('Error in DELETE Employee by ID'+err);
         } else{
            res.send(doc);
         } 
       }) 
    }else{
     return res.status(400).send(` no record found with ID ${req.params.id}`)   ;
    }
})


// delete employee
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
       Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(err){
            console.log('Error in DELETE Employee by Id'+err);
         } else{
            res.send(doc);
         } 
       }) 
    }else{
     return res.status(400).send(` no record found with ID ${req.params.id}`)   ;
    }
})
module.exports=router;