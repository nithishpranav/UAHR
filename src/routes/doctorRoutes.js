import Profile from "views/doctor/Profile";
import Home from "views/doctor/Home";


var routes = [
    {
        path: "/doctorprofile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
    },
    {
        path: "/doctorhome",
        name: "Home",
        icon: "ni ni-bullet-list-67 text-red",
        component: Home,
    }

]
export default routes;