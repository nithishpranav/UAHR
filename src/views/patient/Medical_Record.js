
import {
    Badge,
    Card,
    CardHeader,
    Media,
    Table,
    Container,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import React, {useState} from 'react';
  const Medical_Record = () => {
  
    return (
      <>
        <Header />
  
        <Container className="mt--7" fluid>
  
          
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Medical Record</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Reason</th>
                      <th scope="col">Date Visited</th>
                      <th scope="col">Status</th>
                      <th scope="col">Doctor</th>
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
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td>
                          Dr. Arjun Reddy
                      </td>
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
      </>
    );
  };
  
  export default Medical_Record;
  