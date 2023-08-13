const express=require("express")
const {route} = require("./ticketrouter")
const router =express.Router()
const {hashPassword, comparePasssword} =require("../helpers/bcrypthelper")
const {insertUser, getUserByEmail} = require("../model/user/Usermodel")

router.all("/",(req,res,next)=>{
   
    // res.json({message:"return from user router"})

    next();

});

//Create new user route

router.post("/", async(req,res,next)=>
{

    const {name,company,address,phone,email,password} =req.body;

    try{

        //Hash password

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

//User Signin Router
router.post("/login",async (req,res)=>{

    console.log(req.body);
    const {email,password}=req.body;

    //get user with email from db
    const user=await getUserByEmail(email)


    const passFromDb=user && user._id ? user.password:null


    if( !passFromDb)
    return res.json({status:"error", message: "Invalid email or password"})

    const result=await comparePasssword(password, passFromDb)
    console.log(result)
    //hash our password and compare with the db one
if(!email || !password){
    return res.json({status:"error", message: "Login Failed"})
}

//get USer Detail from database

    res.send({status:"Success", message:"Login Successful"})
});



module.exports =router;