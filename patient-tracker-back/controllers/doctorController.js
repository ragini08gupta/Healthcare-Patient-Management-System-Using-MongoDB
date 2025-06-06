const Doctor = require('../models/doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/patients')

exports.registerDoctor = async (req, res) => {
    try {
        // Remove manual hashing - let the pre-save hook handle it
        const doctor = new Doctor(req.body);
        
        await doctor.save();
        res.status(201).send({ message: "Doctor registered successfully" });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(400).send({ error: error.message });
    }
};

exports.loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('=== LOGIN DEBUG ===');
        console.log('Input email:', email);
        console.log('Input password:', `"${password}"`);
        console.log('Password length:', password.length);
        
        // Debug environment variables
        console.log('=== ENV DEBUG ===');
        console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
        console.log('JWT_SECRET length:', process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0);
        console.log('All env keys:', Object.keys(process.env).filter(key => key.includes('JWT')));
        
        const doctor = await Doctor.findOne({ email });
        console.log('Doctor found:', !!doctor);
        
        if (!doctor) {
            return res.status(404).send({ message: "Doctor not found" });
        }

        console.log('Stored hash:', doctor.password);
        
        const isPasswordMatch = await bcrypt.compare(password, doctor.password);
        console.log('bcrypt.compare result:', isPasswordMatch);
        
        if (!isPasswordMatch) {
            console.log('❌ PASSWORD MISMATCH');
            return res.status(400).send({ message: "Invalid credentials" });
        }

        console.log('✅ Password match successful!');
        
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET not found');
            console.error('Available env vars:', Object.keys(process.env).slice(0, 10));
            return res.status(500).send({ message: "Server configuration error" });
        }

        const token = jwt.sign({ _id: doctor._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        const doctorData = doctor.toObject();
        delete doctorData.password;
        
        console.log('Login successful for:', email);
        res.send({ doctor: doctorData, token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ 
            message: "Login failed", 
            error: error.message 
        });
    }
};

exports.getPatientDetailsForDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;
        // Fetch the doctor and populate the 'patients' array with full patient documents
        const patientsForDoctor = await Doctor.findById(doctorId).populate('patients');
        
        if (!patientsForDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        if (!patientsForDoctor.patients) {
            return res.status(404).json({ message: 'Patients not found' });
        }
        
        res.status(200).json(patientsForDoctor.patients);
    } catch (error) {
        console.error('Error fetching doctor with patient details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addPatientForDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const patientData = req.body;

        // Create a new patient
        const newPatient = new Patient(patientData);
        await newPatient.save();

        // Add the patient's ID to the doctor's patients array
        await Doctor.findByIdAndUpdate(doctorId, {
            $push: { patients: newPatient._id }
        });

        res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
    } catch (error) {
        console.error('Error adding patient to doctor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};