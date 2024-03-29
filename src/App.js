
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import DProfile from "./views/doctor/Profile";
import DHome from "./views/doctor/Home";

import PatientLayout from "./views/patient/layout.js";
import AuthLayout from "./layouts/Auth.js";
import Register from "./views/examples/Register.js";
import Start from "./layouts/Start.js";
import PatientRegister from "./views/patient/Register.js";
import PatientLogin from "./views/patient/Login.js";
import PatientProfile from "./views/patient/Profile.js";
import PatientMR from "./views/patient/Medical_Record";
import PatientVR from "./views/patient/Vaccination_Record";


import DoctorRegister from "./views/doctor/Register.js";
import DoctorLogin from "./views/doctor/Login.js";
import DoctorProfile from "./views/doctor/Profile.js";
import DoctorHome from "./views/doctor/Home.js";
import PatientData from "views/doctor/patientdata.js";
function App() {
    return (
      <>
        <Router>
          <div className='container'>

    <Routes>
      <Route path="/patient" element={<PatientLayout/>} />
      <Route path="/auth" element={<AuthLayout/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/patientregister" element={<PatientRegister/>} />
      <Route path="/patientlogin" element={<PatientLogin/>} />
      <Route path="/patientprofile" element={<PatientProfile/>} />
      <Route path="/patientmr" element={<PatientMR/>} />
      <Route path="/patientvr" element={<PatientVR/>} />

      <Route path="/doctorregister" element={<DoctorRegister/>} />
      <Route path="/doctorlogin" element={<DoctorLogin/>} />
      <Route path="/doctorprofile" element={<DoctorProfile/>} />
      <Route path="/doctorhome" element={<DoctorHome/>} />
      <Route path="/patientdata" element={<PatientData/>} />
      <Route path="*" element={ <Start /> } />
    </Routes>
    </div>
      </Router>
      
    </>
  )
}
export default App