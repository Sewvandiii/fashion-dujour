const express = require('express');
const router = express.Router();
const User = require('../models/Usersmodel')

router.get('/', async (req, res) => {
    try{
        const usersList = await User.find();
        res.json(usersList);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async(req, res) => {
    console.log(req.body);
    const user = new User({
        categoryId: req.body.catid,
        categoryName: req.body.catname
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/search', async(req, res) => {
    console.log(req.body);
    try{
        const searchUser = await User.find({categoryId: req.body.catid});
        res.json(searchUser)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/delete', async(req, res) => {
    console.log(req.body);
    try{
        const deleteUser = await User.deleteOne({categoryId: req.body.catid});
        res.json(deleteUser)
        console.log(searchUser)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/update', async(req, res) => {
    console.log(req.body);
    try{
        const updateUser = await User.updateOne({categoryId: req.body.catid},{
            $set: {
                categoryId: req.body.catid,
                categoryName: req.body.catname
            }
        });
        res.json(updateUser)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router;