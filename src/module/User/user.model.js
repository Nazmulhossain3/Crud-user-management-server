const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : Number,
    city : String,
    state : String, 
    gender : String,
    heardAbout: [String],
    
})

userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


const Users = mongoose.model('User', userSchema)

module.exports = {
    Users
}