const express=require("express")
const {route} = require("./ticketrouter")
const router =express.Router()
const {hashPassword} =require("../helpers/bcrypthelper")
const {insertUser} = require("../model/user/Usermodel")

router.all("/",(req,res,next)=>{
   
    // res.json({message:"return from user router"})

    next();

});

router.post("/", async(req,res,next)=>
{

    const {name,company,address,phone,email,password} =req.body;

    try{

        //Hash assword

        const hashedPass= await hashPassword(password)
const newUserObj ={
    name,company,address,phone,email,password:hashedPass,
}

        const result =await insertUser(newUserObj)
    
        console.log(result);
    
        res.json({message: "New Message Created",result})

    } catch(error) {
        console.log(error)
        res.json({status:"error",message: error.message})
    }


   
});

module.exports =router;