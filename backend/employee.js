const mongoose=require('mongoose')
const Employees=mongoose.model('Employee',{
    name:{type:String},
    position:{type:String},
    dept:{type:String}
})
module.exports=Employees;