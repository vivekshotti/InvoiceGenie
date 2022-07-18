const express = require('express');
const registerUser = require("../controllers/userControllers");
const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const router = express.Router()


// function getAllCollections() {
//     User.find();
// }



const getAllCollections = asyncHandler(async(req,res)=>{
    const data = await User.find();
    res.send(data);
})

router.route('/').get(getAllCollections)
router.route('/').post(registerUser)
module.exports = router