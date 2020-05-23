const express = require('express');
const router = express.Router();
const Admin = require('../models/Adminmodel')

router.get('/', async (req, res) => {
    try{
        const adminList = await Admin.find();
        res.json(adminList);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async(req, res) => {
    console.log(req.body);
    const adminDetails = new Admin({
        adminEmail: req.body.adminEmail,
        adminPassword: req.body.adminPassword
        
    });
    try{
        const savedAdmin = await adminDetails.save();
        res.json(savedAdmin)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/search', async(req, res) => {
    console.log(req.body);
    try{
        const searchAdmin = await Admin.find({adminEmail: req.body.adminEmail});
        res.json(searchAdmin)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/delete', async(req, res) => {
    console.log(req.body);
    try{
        const deleteAdmin = await Admin.deleteOne({adminEmail: req.body.adminEmail});
        res.json(deleteAdmin)
        console.log(searchAdmin)
    }
    catch(err){
        res.json({message: err})
    }
})

router.post('/update', async(req, res) => {
    console.log(req.body);
    try{
        const updateAdmin = await Admin.updateOne({adminEmail: req.body.adminEmail},{
            $set: {
                adminEmail: req.body.adminEmail,
                adminPassword: req.body.adminPassword
                
            }
        });
        res.json(updateAdmin)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router;