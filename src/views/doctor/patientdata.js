import React, { useState } from 'react';

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

const patientdata = (prop) => {
    // const [patientid , setPatientid] = useState('');
    // const handle = (e) => {
    //   e.preventDefault();
    //   //console.log('patientid');
    //   localStorage.setItem('Patientid', patientid);
    //   console.log(patientid);
      
    // }
    const patientid= localStorage.getItem('Patientid');
    const vhandle = (e) => {
        e.preventDefault();
        console.log(patientid);
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
            <Button onClick={vhandle}>
                Vaccination Record
            </Button>
        </CardBody>
        </Card>
        </div>

        </>
    
    )
};
export default patientdata;