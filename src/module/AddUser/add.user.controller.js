const { AddedUsers } = require("./addUser.model")

const addUser = async(req,res)=> {
    try {
        const newAddedUser = new AddedUsers(req.body)
        const result = await newAddedUser.save()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getAllAddedUser = async(req,res)=> {
    try {
        const result = await AddedUsers.find()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}




module.exports = {
    addUser,
    getAllAddedUser
}