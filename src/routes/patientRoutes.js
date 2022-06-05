import Profile from "views/patient/Profile.js";
import Medical_Record from "views/patient/Medical_Record";
import Login from "views/patient/Login.js";
import Register from "views/patient/Register";
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
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/patient",
    },
    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/patient",
    }
];
export default routes;