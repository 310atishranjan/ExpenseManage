const transaction = require("../models/TransactionModel")

const getAlltransaction=async(req,res)=>{
    try{
        const {type}=req.body;
        const transactionData=await transaction.find({userid:req.body.userid});
        res.status(200).json(
            // message:'getting transaction data',
            transactionData
        )
    }catch(error){
        return res.status(500).json({
            message:'Error occured in geeting',
            success:false
        })
    }
}
const addTransaction=async(req,res)=>{
    try{
        const newtransaction=new transaction(req.body);
        await newtransaction.save();
        return res.status(201).json({
            message:"added successful",
            success:true
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Error occured in adding',
            success:false,
        })
    }
}
module.exports={getAlltransaction,addTransaction}