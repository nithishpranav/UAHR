import { useEffect } from 'react'
import React from "react";

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "reactstrap";
//import { getGoals, reset } from '../../features/goals/goalSlice'
import routes from "routes/patientRoutes.js";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";
  // core components
  import UserNavbar from "components/Navbars/UserNavbar.js";
  import Header from "components/Headers/Header.js";
  import Sidebar from "components/Sidebar/Sidebar.js";
  
  const Profile = (prop) => {

    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);
    const mainContent = React.useRef(null);
    const location = useLocation();
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
    const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  // const { isLoading, isError, message } = useSelector(
  //   //(state) => state.goals
  // )

  useEffect(() => {
    // if (isError) {
    //   console.log(message)
    // }

    if (!user) {
      navigate('/patientlogin')
    }

    //dispatch(getGoals())

    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, dispatch])

  // if (isLoading) {
  //   //return <Spinner />
  // }
    return (
      <>
      <div>
        
        </div>
        <Sidebar
        {...prop}
        routes={routes}
        logo={{
          innerLink: "user-profile",
          imgSrc: require("../../assets/img/brand/uahr_logo_blue.png").default,
          imgAlt: "...",
        }}
      />
      <div  className="main-content" ref={mainContent}>
      <Header />
        <UserNavbar/>
        {/* Page content */}
        <Container className="mt--1" fluid>
          <Row>
            <Col className="order-xl-3" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-black border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        // onClick={handleGameClick}
                        size="sm"
                      >
                        Edit Profile
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      My information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Patient ID"
                              id="input-username"
                              placeholder="Paitent ID"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              
                              placeholder="user email"
                              type="email"
                              
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="First name"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Last name"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-country"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    {/* <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div> */}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      </>
      
    );
  };
  
  export default Profile;
  