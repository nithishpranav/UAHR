
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import PatientLayout from "./layouts/Patient.js";
import AuthLayout from "./layouts/Auth.js";
import Register from "./views/examples/Register.js";
import Start from "./layouts/Start.js";
function App() {
    return (
      <>
        <Router>
          <div className='container'>

    <Routes>
      <Route path="/patient" element={<PatientLayout/>} />
      <Route path="/auth" element={<AuthLayout/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={ <Start /> } />
    </Routes>
    </div>
      </Router>
      
    </>
  )
}
export default App