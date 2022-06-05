
import React from "react";
import { useState } from "react";
import classnames from "classnames";

import {
  Button,
  Card,

  CardBody,
  FormGroup,
  Form,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  
} from "reactstrap";
//import { patientData } from "data/patient_data";

const patientData = {
  firstname: '',
  lastname: '',
  gender: '',
  dob: '',
  email:'',
  password: '',
  }

class Register extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = { description: '' };
  }

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  onSubmit(e) {
      e.preventDefault();

      fetch(this.props.formAction, {
          body: JSON.stringify({description: this.state.description})
      });

      this.setState({description: ''});
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

    state = {
      iconTabs: 1,
      plainTabs: 1
    };
    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };
  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">

            <Container className="pt-lg-1" fluid ="md">
            
            {/* <Card className="bg-secondary shadow border-0"> */}
              <Row className="justify-content-center">
                <Col  fluid ="md">
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"
                      id="tabs-icons-text"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.iconTabs === 1}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.iconTabs === 1
                          })}
                          onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                          href="#pablo"
                          role="tab"
                        >
                          {/* <i className="ni ni-cloud-upload-96 mr-2" /> */}
                          Patient
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.iconTabs === 2}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.iconTabs === 2
                          })}
                          onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                          href="#pablo"
                          role="tab"
                        >
                          {/*tab icon <i className="ni ni-bell-55 mr-2" /> */}
                          Doctor
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.iconTabs === 3}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.iconTabs === 3
                          })}
                          onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                          href="#pablo"
                          role="tab"
                        >
                          
                          Pharmacy
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <Card>
                  <CardBody>
                        <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                          <TabPane tabId="iconTabs1">
                            <Form action={this.props.action}
                                  method={this.props.method}
                                  onSubmit={this.onSubmit}>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="First Name" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Last Name" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Date Of Birth" type="date" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="text-muted font-italic">
                                {/* <small>
                                  password strength:{" "}
                                  <span className="text-success font-weight-700">
                                    strong
                                  </span>
                                </small> */}
                              </div>
                              <Row className="my-4">
                                <Col xs="12">
                                  <div className="custom-control custom-control-alternative custom-checkbox">
                                  </div>
                                </Col>
                              </Row>
                              <div className="text-center">
                                <Button
                                  className="mt-4"
                                  color="primary"
                                  type="button"
                                >
                                  Create account
                                </Button>
                              </div>
                            </Form>
                          </TabPane>  
                          <TabPane tabId="iconTabs2">
                          <Form role="form">
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                       <i className="ni ni-circle-08" /> 
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="First Name" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Last Name" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Lisence ID" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <div className="text-muted font-italic">
                              </div>
                              <Row className="my-4">
                                <Col xs="12">
                                  <div className="custom-control custom-control-alternative custom-checkbox">
                                    {/* <input
                                      className="custom-control-input"
                                      id="customCheckRegister"
                                      type="checkbox"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="customCheckRegister"
                                    >
                                      <span>
                                        I agree with the{" "}
                                        <a
                                          href="#pablo"
                                          onClick={e => e.preventDefault()}
                                        >
                                          Privacy Policy
                                        </a>
                                      </span>
                                    </label> */}
                                  </div>
                                </Col>
                              </Row>
                              <div className="text-center">
                                <Button
                                  className="mt-4"
                                  color="primary"
                                  type="button"
                                >
                                  Subimt Application
                                </Button>
                              </div>
                            </Form>
                          </TabPane>
                          <TabPane tabId="iconTabs3">
                          <Form role="form">
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Name" type="text" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="text-muted font-italic">
                              </div>
                              <Row className="my-4">
                                <Col xs="12">
                                  <div className="custom-control custom-control-alternative custom-checkbox">

                                  </div>
                                </Col>
                              </Row>
                              <div className="text-center">
                                <Button
                                  className="mt-4"
                                  color="primary"
                                  type="button"
                                >
                                  Submit Application
                                </Button>
                              </div>
                            </Form>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                      </Card>
                </Col>
              </Row>
            {/* </Card> */}
            </Container>
          </section>
        </main>
        
      </>
    );
  }
}
Register.defaultProps = {
  action: 'http://localhost:5000/api/patient/register',
  method: 'post'
};

export default Register;
