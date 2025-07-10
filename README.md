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
| ![Login](/public/screenshots/login.png) | ![Dashboard](/public/screenshots/dashboard.png) | ![Patient](/public/screenshots/patient-record.png) |

## Get Started

### 1. Clone the Repository
git clone https://github.com/Sagnick-Mondal/hospital-management-system.git
cd hospital-management-system

### 2. Install Dependencies
npm install

### 3. Set up Environment Variables
Create a .env.local file and add:
1. PROJECT_ID=
2. API_KEY=
3. DATABASE_ID=
4. PATIENT_COLLECTION_ID=
5. APPOINTMENT_COLLECTION_ID=
6. DOCTOR_COLLECTION_ID=
7. NEXT_PUBLIC_BUCKET_ID=
8. NEXT_PUBLIC_ENDPOINT=
9. NEXT_PUBLIC_ADMIN_PASSKEY=
10. SENTRY_AUTH_TOKEN=
11. TWILIO_ACCOUNT_SID=
12. TWILIO_AUTH_TOKEN=
13. TWILIO_PHONE_NUMBER=

### 4. Run the App
npm run dev

## ✨ Highlights
1. Built with a responsive UI using Tailwind CSS, Shadcn.
2. Clean code architecture with modular components.
3. Optimized for speed and accessibility.
4. Uses OTP and SMS Notification.
5. Follows best practices in frontend and backend development.
