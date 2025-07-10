# 🏥 MedTek – Hospital Management System

**MedTek** is a full-featured Hospital Management/Appointment System designed to streamline and simplify the administrative and operational tasks of hospitals and clinics. It helps manage patients bookings, doctors, appointments, records and more from a centralized system.

## 🚀 Features

- 👨‍⚕️ Doctor Management (Add/Edit/Delete doctors)
- 👩‍🦽 Patient Management (Register, view, and track patients)
- 📅 Appointment Scheduling with time slot validation
- 💊 Prescription and Medical Record tracking
- 📋 Dashboard with schedule statistics
- 🔐 Secure Login for Admin and patients
- 📦 access control

## 🛠️ Tech Stack

| Layer        | Technology                |
|--------------|----------------------------|
| Frontend     | React.js / Next.js / HTML / CSS / Tailwind CSS |
| Backend      | Node.js  / Appwrite |
| Database     | Appwrite |
| Auth & APIs  | OTP Auth / REST APIs       |
| Deployment   | Vercel |

## 📸 Screenshots

| Login Page | Dashboard | Patient Record |
|------------|-----------|----------------|
| ![Login](screenshots/login.png) | ![Dashboard](screenshots/dashboard.png) | ![Patient](screenshots/patient-record.png) |

### 1. Clone the Repository
git clone https://github.com/Sagnick-Mondal/hospital-management-system.git
cd hospital-management-system

### 2. Install Dependencies
npm install

### 3. Set up Environment Variables
Create a .env.local file and add:
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_url
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_COLLECTION=your_collection_id

### 4. Run the App
npm run dev

## ✨ Highlights
1. Built with a responsive UI using Tailwind CSS, Shadcn.
2. Clean code architecture with modular components.
3. Optimized for speed and accessibility.
4. Uses OTP and SMS Notification.
5. Follows best practices in frontend and backend development.
