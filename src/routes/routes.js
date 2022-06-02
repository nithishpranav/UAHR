import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import PatientRegister from "views/patient/Register.js";
var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/patientRegister",
    name: "PatientRegister",
    icon: "ni ni-circle-08 text-pink",
    component: PatientRegister,
    layout: "/start",
  },
];
export default routes;
