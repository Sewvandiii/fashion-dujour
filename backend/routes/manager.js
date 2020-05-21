const express = require('express');
const router = express.Router();
const Manager = require('../models/Managermodel')

router.get('/', async (req, res) => {
    try{
        const managerList = await Manager.find();
        res.json(managerList);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async(req, res) => {
    console.log(req.body);
    const managerDetails = new Manager({
        managerName: req.body.managerName,
        companyName: req.body.companyName,
        managerEmail: req.body.managerEmail,
        password: req.body.password,
        conPassword: req.body.conPassword
        
    });
    try{
        const savedManager = await managerDetails.save();
        res.json(savedManager)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/search', async(req, res) => {
    console.log(req.body);
    try{
        const searchManager = await Manager.find({managerEmail: req.body.managerEmail});
        res.json(searchManager)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/delete', async(req, res) => {
    console.log(req.body);
    try{
        const deleteManager = await Manager.deleteOne({managerEmail: req.body.managerEmail});
        res.json(deleteManager)
        console.log(searchManager)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/update', async(req, res) => {
    console.log(req.body);
    try{
        const updateManager = await Manager.updateOne({managerEmail: req.body.managerEmail},{
            $set: {
                managerName: req.body.managerName,
                companyName: req.body.companyName,
                managerEmail: req.body.managerEmail,
                password: req.body.password,
                conPassword: req.body.conPassword
            }
        });
        res.json(updateManager)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router;