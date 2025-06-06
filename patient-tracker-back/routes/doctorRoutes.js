require('dotenv').config(); // Add this line at the very top
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { verifyToken } = require('../jwt-middleware');
const bcrypt = require('bcryptjs'); 
const Doctor = require('../models/doctor'); 



router.post('/register', doctorController.registerDoctor);
router.post('/login', doctorController.loginDoctor);
router.get('/patients/:doctorId', verifyToken, doctorController.getPatientDetailsForDoctor);
router.post('/patients/:doctorId', verifyToken, doctorController.addPatientForDoctor);
// Add to doctorRoutes.js - TEMPORARY
router.post('/reset-password-temp', async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        console.log('Resetting password for:', email);
        
        const saltRounds = 8;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        
        const result = await Doctor.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true }
        );
        
        if (!result) {
            return res.status(404).send({ message: 'Doctor not found' });
        }
        
        console.log('Password reset successful for:', email);
        res.send({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Reset error:', error);
        res.status(500).send({ error: error.message });
    }
});



module.exports = router;