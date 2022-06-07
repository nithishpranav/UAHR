import Profile from "views/patient/Profile.js";
import Medical_Record from "views/patient/Medical_Record.js";
import Login from "views/patient/Login.js";
import Register from "views/patient/Register";
import Vaccination_Record from "views/patient/Vaccination_Record.js";
var routes = [
    {
        path: "/patientprofile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        //layout: "/patient",
    },
    {
        path: "/patientmr",
        name: "Medical Record",
        icon: "ni ni-bullet-list-67 text-red",
        component: Medical_Record,
        //layout: "/patient",
    },
    {
        path: "/patientvr",
        name: "Vaccination Record",
        icon: "ni ni-bullet-list-67 text-red",
        component: Vaccination_Record,
        //layout: "/patient",
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     icon: "ni ni-key-25 text-info",
    //     component: Login,
    //     layout: "/patient",
    // },
    // {
    //     path: "/register",
    //     name: "Register",
    //     icon: "ni ni-circle-08 text-pink",
    //     component: Register,
    //     layout: "/patient",
    // }
];
export default routes;