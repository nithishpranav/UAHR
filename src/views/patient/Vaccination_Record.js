import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "routes/patientRoutes.js";

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
                              Fracture
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>10/08/23</td>

                    </tr>
  
  
  
                  </tbody>
                </Table>
                {/* <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter> */}
              </Card>
            </div>
  
        </Container>
        </div>
      </>
    );
  };
  
  export default Vaccination_Record;
  