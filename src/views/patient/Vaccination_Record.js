import { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "routes/patientRoutes.js";
import VForm from 'components/vform.js';
import {
    Badge,
    Card,
    CardHeader,
    Media,
    Table,
    Container,
  } from "reactstrap";
  // core components
  import UserNavbar from "components/Navbars/UserNavbar.js";

  import Header from "components/Headers/Header.js";
  import Sidebar from "components/Sidebar/Sidebar.js";

  import React, {useState} from 'react';
  
  const Vaccination_Record = (prop) => {
    const [vaccine, getVax] = useState([]);
    useEffect(() => {
      //getAllVax();
    }, []);
      // const id = localStorage.get();
      // console.log(id);
      const id = localStorage.getItem('Patientid');
      // const config = {headers:{
      //   Authorization: `Bearer ${user.token}`
      // }};
      const auth = {
        headers: {
          'patientid': id}
      };
      var request = require('request');
      var options = {
        'method': 'GET',
        'url': 'http://localhost:5000/api/patient/get/vaccine',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
          'patientid': '43874798'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
      

    // const getAllVax =  () => {
    //     console.log("VAC")
    //     console.log(localStorage.getItem('Patientid'));
    //     axios.get('http://localhost:5000/api/patient/get/vaccine', {
    //       params: {
    //         patientid: id
    //       },
    //       // headers:{
    //       //   'Content-Type': 'application/x-www-form-urlencoded'
    //       // },    

    //     })
    //     .then(res => {
    //         // console.log(res.data)
    //         // const allVax  = res.data.vaccine;
    //         // getVax(allVax);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    //}


    // React.useEffect(() => {
    //   document.documentElement.scrollTop = 0;
    //   document.scrollingElement.scrollTop = 0;
    //   mainContent.current.scrollTop = 0;
    // }, [location]);
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

    //GET VAXCINATION RECORD





    return (
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
      <div classname='px-10'>  
        <Container >
        <Header />
       
        <UserNavbar/>
        <VForm />
            <div className="col">
            
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Medical Record</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Vaccination</th>
                      <th scope="col">Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
  
                          <Media>
                            <span className="mb-0 text-sm">
                              Small Pox
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>10/08/03</td>

                    </tr>
  
  
  
                  </tbody>
                </Table>
              </Card>
              
            </div>
            
  
        </Container>
        </div>
      </>
    );
  };
  
  export default Vaccination_Record;
  