import {useState, useEffect} from 'react'
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
  
  const PatientRegister = () => {
    const [patientData, setPatientData] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        dob: '',
        email: '',
        password: '',
    }
    )
    const {firstname,lastname,gender,dob,email,password} = patientData
    
    const onChange = (e) => {
        setPatientData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <div className="text-center text-muted mb-4">
                <large>Register</large>
              </div>
              <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id='firstname'
                      name='firstname'
                      placeholder="First Name"
                      type="text"
                      value={firstname}
                      onChange={onchange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    id='lastname'
                    name='lastname'
                      placeholder="Last Name"
                      type="text"
                      value={lastname}
                      onChange={onchange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    id='gender'
                    name='gender'
                      placeholder="Gender"
                      type="text"
                      value={gender}
                      onChange={onchange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    id='dob'
                    name='dob'
                      placeholder="Date of Birth"
                      type="date"
                      value={dob}
                      onChange={onchange}
                    />
                  </InputGroup>
                </FormGroup>
              
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    id='email'
                    name='email'
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={onchange}
                      //autoComplete="new-email"
                    />
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
                    id='password'
                    name='password'
                      placeholder="Password"
                      type="password"
                      //autoComplete="new-password"
                      value={password}
                      onChange={onchange}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" href="/patient">
                    Create Account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>

        </Col>
      </>
    );
  };
  
  export default PatientRegister;
  