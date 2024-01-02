const mongoose = require('mongoose');

const userShchema = mongoose.Schema({
    name : String,
    email : {
        type : String,
        require : true
    },
    password : String,
    phone : Number,
    city : String,
    state : String, 
    gender : String,
    heardAbout : String
})

userShchema.pre('save', async function(next){
    const slat = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, slat)
    next()
})

const Users = mongoose.model('User', userShchema)

module.exports = {
    Users
}