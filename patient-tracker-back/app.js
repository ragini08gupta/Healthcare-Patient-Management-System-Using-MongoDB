require('dotenv').config(); // Keep only this one at the top

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientHealthMetricsRoutes = require('./routes/patientHealthMetricsRoutes');
const { verifyToken } = require('./jwt-middleware');

// Debug: Check if JWT_SECRET is loaded
console.log('JWT_SECRET loaded:', !!process.env.JWT_SECRET);
console.log('JWT_SECRET value:', process.env.JWT_SECRET ? 'Present' : 'Missing');

const app = express();
app.use(bodyParser.json());

// Updated CORS configuration
app.use(cors({ 
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true 
})); 

// MongoDB Connection (local) - Fixed connection string
mongoose.connect('mongodb://127.0.0.1:27017/patient_data');

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', (err) => console.log('Error connecting to MongoDB:', err));

// Routes that don't need authentication
app.use('/api/doctors', doctorRoutes);

// Apply verifyToken middleware to protected routes
app.use(verifyToken);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/patient-health-metrics', patientHealthMetricsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));