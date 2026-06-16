const { findOne } = require("../models/url");
const User = require("../models/user")

async function handleSignUpUser(req,res){
    const { name , email , password } = req.body;
   
   const user =  await User.create({
        name,
        email,
        password
    })
    return res.status(201).json(user);
    
}

async function handleLoginUser(req,res){
    const {email , password} = req.body;
    const user = await User.findOne({email});

    if(!user || user.password !== password || user.email !== email)
         return res.status(401).json({ error: "invalid credentials" });

    else return res.json('login successful')
    
}




module.exports = {
    handleSignUpUser,
    handleLoginUser
}