import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
    const [patientid , setPatientid] = useState('');
    const handle = (e) => {
      e.preventDefault();
      //console.log('patientid');
      localStorage.setItem('Patientid', patientid);
      console.log(patientid);
      navigate('/patientdata')
    }
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
        <div>
        <Header />
        <UserNavbar/>
        </div>
        <div className="col">
        <Card className="shadow">
        <CardBody>
        <Form>
        <Row>
        <Col>
        <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
        <InputGroupText>
        <i className="ni ni-hat-3" />
        </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Patient ID" type="text" value={patientid}
        onChange={(e) => setPatientid(e.target.value)}
        />
        </InputGroup>
        </FormGroup>
        </Col>
        </Row>
        <div className='form-group'>
            <button onClick={handle} className='btn btn-block'>
              Submit
            </button>
          </div>
        </Form>
        </CardBody>
        </Card>
        </div>

        </>
    
    )
};
export default Home;