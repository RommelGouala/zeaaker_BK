const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function getAllUsers(req, res){
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting all users'})
    }
}

async function getOneUser(req, res){
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting user by ID'})
    }
}

async function addUser(req, res){
    console.log(req.body)
    try {
        req.body.password = await bcrypt.hash(req.body.password, 12)
        const { name, password, role, email, phone, posts } = req.body
        const user = await new User({
            ...req.body
        }).save()

        const payload = {
            name
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

        // res.json(token)

        res.json({
            "id": user._id,
            "token": token
        })

        // res.status(201).json({ 'message': 'user successfully created'})
    } catch (error) {
        console.log(error)
        // res.status(500).json({'message': 'error adding user'})
    }
}

async function deleteUser(req, res){
    try {
        const { id } = req.params
        const post = await User.findByIdAndDelete(id)
        res.json({"message": `User id ${id} had been deleted.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error deleting post'})
    }
}

async function loginUser(req, res){
    try {
        console.log(req.body)
        const name = req.body.name
        console.log(name)
        const user = await User.findOne({ name: name })
        console.log(user)
        let result = await bcrypt.compare(req.body.password, user.password)
        // const tokenResult = await jwt.decode(process.env.JWT_SECRET, req.headers.authorization) 

        if (result){
            const payload = {
                name
            }
    
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

            // res.json(token)

            res.json({
                "id": user._id,
                "token": token
            })
    
            // res.status(201).json({ 'message': 'user successfully logged in'})
            
        } else {
            res.send("HAX")
        }
    } catch (error) {
        console.log(error)
        
        // res.status(500).json({'message': 'error checking password'})

    }
}

async function updateUser(req, res){
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        // res.redirect(`/user/${id}`)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.send('error updating user')
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    deleteUser,
    loginUser,
    updateUser
}