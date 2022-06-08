
import Header from "components/Headers/Header.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import UserNavbar from "components/Navbars/UserNavbar";
import routes from "routes/doctorRoutes.js";
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";

const Home = (prop) => {

    return(
        <>
        <Sidebar
        {...prop}
        routes={routes}
        logo={{
          innerLink: "user-profile",
          imgSrc: require("../../assets/img/brand/uahr_logo_blue.png").default,
          imgAlt: "...",
        }}
         /> 
        <div className="main-content" ref="mainContent">
        <Header />
        <UserNavbar/>
        </div>

        </>
    
    )
};
export default Home;