# Healthcare Patient Management System Using MongoDB

A comprehensive **Patient Tracker** application designed to streamline the management of healthcare information. This system is built using modern web technologies including **React**, **Tailwind CSS**, **JavaScript**, **HTML**, **Node.js**, **Express**, and **MongoDB**. It features a responsive design, dynamic user interfaces, secure backend operations, user authentication, profile management, customizable dashboards, and data visualization capabilities.

## 🚀 Features

- **Responsive Patient Tracker**: A dynamic interface that adapts to various screen sizes, ensuring accessibility across devices.
- **Dynamic UIs in React**: Interactive and state-of-the-art user interfaces crafted with React.
- **Secure Backend**: A robust backend built with Node.js and MongoDB, ensuring data integrity and security.
- **User Authentication**: A secure authentication system that safeguards user information and ensures data privacy.
- **Profile Management**: Users can easily manage their profiles, keeping their personal information up to date.
- **Customizable Dashboards**: Personalized dashboards that users can tailor to their preferences, enhancing the user experience.
- **Data Visualization**: Intuitive presentation of data through graphical elements, making information easy to understand and analyze.

📽️ **Project Demo**: [HEMANGANI GitHub Base Repo](https://github.com/HEMANGANI/Healthcare-Management-System)

---

## 📄 Overview

**Patient Tracker** is a digital platform aimed at revolutionizing patient management in the contemporary healthcare environment. This system is designed to reduce manual paperwork and provide an integrated solution for accurate, efficient, and convenient medical record management.

---

## 🎯 Objectives

1. **User Authentication**: Secure login process for doctors and hospitals.
2. **Profile Management**: Easy updating of patient's personal and medical information.
3. **Data Visualization**: Graphical representation of patient data for informed decision-making.
4. **Appointment Management**: Add, update, or remove patient appointments.

---

## 🧩 Core Features

- 📌 **Insert New Patient Record**  
  Form-based interface to add patients. Fields include name, DOB, gender, emergency contact, allergies, chronic conditions, medications, and more. Data stored in the `patients` collection in MongoDB.

- 📌 **Search Patient Record**  
  Doctors can search by name, ID, or partial keywords using MongoDB’s `$regex` and text indexes. Implemented pagination and filters via React Query.

- 📌 **Update Patient Record**  
  Embedded forms for updating health metrics, appointments, and medication data. Uses MongoDB operators such as `$set`, `$push`, `$pull` to modify nested arrays.

- 📌 **Delete Patient Record (In Progress)**  
  Securely deletes record via unique patient ID. Confirmation prompt appears before deletion. Audit log feature will log deleted ID and user for compliance.

- 📌 **Optimized Search**  
  Indexes created on frequently queried fields (`name`, `email`, `doctorId`). Query performance analyzed via `.explain()` in MongoDB.

- 📌 **Aggregation & Analytics**  
  Health metrics visualization using Chart.js. Aggregated data like average blood pressure, weight trends, etc.

---

## 💼 Use Cases

1. Doctor's Dashboard Viewing  
2. Patient's Profile Update  
3. Doctor's Data Visualization  
4. Patient's Appointment Booking  
5. Doctor's Patient Search  
6. Doctor's Treatment Notes  
7. Doctor's Prescription Management  
8. Patient's Historical Data Viewing  
9. Patient's Medical History Management  
10. Billing Invoice and Insurance Claims Management

---

## 🔐 Non-Functional Requirements

1. **Performance**: Quick load time, instantaneous response.  
2. **Reliability**: At least 99.5% system uptime.  
3. **Security**: Data encryption, access control, audit trails.  
4. **User Experience (UX)**: Intuitive design.  
5. **Database Scalability**: Handles growing data efficiently.  
6. **Maintainability**: Modular design, comprehensive documentation.

---

## 🏗️ Architecture and Technology Stack

- **Frontend**: React, Tailwind CSS, JavaScript, HTML  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB

---

## 🎨 User Interface Mockups

1. Login and registration pages  
2. Home page with navigation bar  
3. Patient registration and medical record pages  
4. Appointment management interface

---

## 🧾 Data Model

Includes entities like **Doctor**, **Patient Profile**, **Medical Details**, and **Authentication Module**, detailing their relationships and functionalities.

---

## 🛠️ Implementation

### Version Control and Collaboration

- **Version Control**: Git with a centralized workflow  
- **Commit Practices**: Frequent, clear, and descriptive commit messages  
- **Conflict Resolution**: Timely and coordinated approach

---

## 🧪 Coding Standards and Practices

1. **Code Organization**: Logical division of frontend and backend code  
2. **Testing**: Utilizing Jest and React Testing Library  
3. **CI/CD**: GitHub Actions for automated testing and deployment

---

## 📦 How to Use

### How to Set Up and Run the Patient Tracker Project

#### ✅ Prerequisites

Ensure you have the following installed:

- Node.js (latest stable version)  
- npm (Node Package Manager)  
- Git  

---

### 🔧 Environment Setup

1. Download the zip file from GitHub  
2. Extract the zip files and open in VS Code  

---

### 📡 Starting the Backend Server

```bash
cd patient-tracker-back
npm start
