import React from "react";
import Login from "views/patient/Login.js";

import { Link,useLocation, Route, Routes} from "react-router-dom";
import patient_routes from "routes/patientRoutes.js";
import {
    Button,
} from "reactstrap";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components


import routes from "routes/routes.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        
        {/* <div className="header bg-gradient-info py-7 py-lg-8">
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div> */}
        {/* Page content */}

        <Button>
            <Link to="/patientprofile">
                Patient
            </Link>
        </Button>
        <Button>
            <Link to="/doctor">
                Doctor
            </Link>
        </Button>
        <Button>
            <Link to="/pharmacy">
                Pharmacy
            </Link>
        </Button>

        <Container className="mt -8 pb-5">
          <Row className="justify-content-center">
           <li>
            <Button>
            <Link to="/patientlogin">Login</Link>
            </Button>
           </li>
           <li>
           <Button>
            <Link to="/patientregister">Register</Link>
            </Button>
           </li>
           <li>
           <Button>
            <Link to='/patientregister'>Register</Link>
            </Button>
           </li>
            {/* <Routes>
              {getRoutes(routes)}
              <Route path = "*" element ={<Register/>} />
             
            </Routes>  */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Auth;
