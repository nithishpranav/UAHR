import React from "react";
import {patientData} from "data/patient_data.js";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes/patientRoutes.js";
console.log(patientData);
const Patient = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/patient") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "user-profile",
          imgSrc: require("../assets/img/brand/uahr_logo_blue.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <UserNavbar
          {...props}
          brandText={patientData.firstName}
        />
        <Routes>
          {getRoutes(routes)}
          <Route path = "*" to="/patientprofile" />
          <Navigate from="*" to="/patientprofile" />
        </Routes>
        <Container fluid>
        </Container>
      </div>
    </>
  );
};

export default Patient;
