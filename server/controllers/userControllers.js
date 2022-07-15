const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async(req,res)=>{
    const { name, email, password } = req.body;

    if(!name || !email || !password)
    {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        })
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

module.exports= registerUser