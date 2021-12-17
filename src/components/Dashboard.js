import React from 'react';
import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Dashboard() {
    return (
        <div style={{ backgroundColor: '#F3F6F9' }}>
            <NavBar />
            <Container>
                <Row>
                    <ul className='heade-tab'>
                        <li className='tab-list'>
                            <div className='tab-link' style={{backgroundColor:'#fff'}} >
                                <span className='tab-title text-uppercase'>Admin</span>
                                <span className='tab-desc'>Dashboard & Reports</span>
                            </div>
                        </li>
                        <li className='tab-list'>
                            <Link to='/patient' className='tab-link'>
                                <span className='tab-title text-uppercase'>Patients</span>
                                <span className='tab-desc'>Patient Cards & Profiles</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <div className='tab-link'>
                                <span className='tab-title text-uppercase'>Doctors</span>
                                <span className='tab-desc'>Doctors & Profiles</span>
                            </div>
                        </li>
                        <li className='tab-list'>
                            <a href='#!' className='tab-link' data-toggle="tab" data-target="#kt_header_tab_2" role="tab">
                                <span className='tab-title text-uppercase'>Lab</span>
                                <span className='tab-desc'>Diagnosis Management</span>
                            </a>
                        </li>
                    </ul>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="createsUsers">
                        <div className='cont-header'>
                            <Row>
                                <Col>
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="createsUsers">Creates users</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="assignsRoles">Assigns roles</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="addDiseases">Add diseases</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="addsMedicine">Add Medicine</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="addsPermission">Add Permission</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        </div>
                        <div style={{backgroundColor:'#fff', paddingTop:'15px', paddingBottom:'15px', marginBottom:'50px'}}>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="createsUsers" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your full name" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" placeholder="07123456789" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>NIN</Form.Label>
                                                    <Form.Control type="text" placeholder="CM927364252512" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>D.O.B</Form.Label>
                                                    <Form.Control type="date" placeholder="CM927364252512" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Select</option>
                                                        <option value="1">Male</option>
                                                        <option value="2">female</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                
                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="assignsRoles" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Select User</option>
                                                        <option value="1">Alex Mugisha</option>
                                                        <option value="2">Jim Butler</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Assign Role</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Select</option>
                                                        <option value="1">Doctor</option>
                                                        <option value="2">Pharmasist</option>
                                                        <option value="2">Patient</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                
                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addDiseases" className='tab-cont'>
                                            Add diseases
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addsMedicine" className='tab-cont'>
                                            Add Medicine
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addsPermission" className='tab-cont'>
                                            Adds Permission
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </div>
                    </Tab.Container>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard;