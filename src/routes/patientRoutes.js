import Profile from "views/patient/Profile.js";
import Medical_Record from "views/patient/Medical_Record";

var routes = [
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/patient",
    },
    {
        path: "/medical-record",
        name: "Medical Record",
        icon: "ni ni-bullet-list-67 text-red",
        component: Medical_Record,
        layout: "/patient",
    },
];
export default routes;