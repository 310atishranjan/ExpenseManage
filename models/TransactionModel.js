const mongoose=require("mongoose");

const transactionSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:[true,'user id is required']
    },
    amount:{
        type:Number,
        required:[true,'amount is required']
    },
    category:{
        type:String,
        required:[true,'category is required']
    },
    date:{
        type:String,
        required:true,
    },
    reference:{
        type:String
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    type:{
        type:String,
        required:[true,'type is required']
    }
    
},{timestamps:true})
const transaction=mongoose.model('transaction',transactionSchema);
module.exports=transaction;