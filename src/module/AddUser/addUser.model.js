const mongoose = require('mongoose');

const addedUserSchema = mongoose.Schema({
    name : String,
    email : String,
    
    phone : Number,
    
    
})




const AddedUsers = mongoose.model('AddedUser', addedUserSchema)

module.exports = {
    AddedUsers
}