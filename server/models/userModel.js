const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
}); //Temporary

// const userSchema = mongoose.Schema({
//     personalDetails: {
//         pname: {type:String, required:true},
//         email: {type:String, required:true},
//     },
//     buisnessDetails: {
//         orgName: {type:String, required:true},
//         countryOfOrigin: {type:String, required:true},
//         natureOfBuisness: {type:String, required:true},
//         gstinNumber: {type:String, required:true},
//     },
//     igPortalDetails: {
//         email: {type:String, required:true, unique:true},
//         password: {type:String, required:true},
//     },
// });

const User = mongoose.model('User', userSchema);
module.exports = User;