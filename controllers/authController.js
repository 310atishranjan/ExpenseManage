const usermodel=require("../models/usermodel");

const registerController=async(req,res)=>{
    try{
        const email=req.body.email;
        const user=await usermodel.findOne({email:email})
        if(user)
        {
            return res.status(400).json({
                success:false,
                message:"user already registerd"
            })
        }
        else
        {
            const newuser=new usermodel(req.body);
            await newuser.save();
            return res.status(201).json({
                message:"user save in database",
                success:true
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message:"error",
            error
        })
        
    }
}
const loginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await usermodel.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"user Not found",
                success:false
            })
        }
        else
        {
            return res.status(200).json(user);
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            error
        })
    }
}
module.exports={registerController,loginController};