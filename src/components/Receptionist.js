import React from 'react';
import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Receptionist() {
    return (
        <div style={{ backgroundColor: '#F3F6F9' }}>
            <NavBar />
            <Container>
                <Row>
                    <ul className='heade-tab'>
                        <li className='tab-list'>
                            <div className='tab-link'>
                                <span className='tab-title text-uppercase'>Super Admin</span>
                                <span className='tab-desc'>Unlimited Roles</span>
                            </div>
                        </li>
                        <Link to="/dashboard" className='tab-list'>
                            <div className='tab-link' >
                                <span className='tab-title text-uppercase'>Admin</span>
                                <span className='tab-desc'>Dashboard & Reports</span>
                            </div>
                        </Link>
                        <li className='tab-list'>
                            <Link to='/patient' className='tab-link'>
                                <span className='tab-title text-uppercase'>Patients</span>
                                <span className='tab-desc'>Patient Cards & Profiles</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to="/doctor" className='tab-link'>
                                <span className='tab-title text-uppercase'>Doctors</span>
                                <span className='tab-desc'>Doctors & Profiles</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to="/lab" className='tab-link'>
                                <span className='tab-title text-uppercase'>Lab</span>
                                <span className='tab-desc'>Diagnosis Management</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to="/receptionist" className='tab-link' style={{backgroundColor:'#fff'}}>
                                <span className='tab-title text-uppercase'>Receptionist</span>
                                <span className='tab-desc'>Front Desk</span>
                            </Link>
                        </li>
                    </ul>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="addpatient">
                        <div className='cont-header'>
                            <Row>
                                <Col>
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="addpatient">Add Patient</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        </div>
                        <div style={{backgroundColor:'#fff', paddingTop:'15px', paddingBottom:'15px', marginBottom:'50px'}}>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="addpatient" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Card ID</Form.Label>
                                                    <Form.Control type="text" name="card_id" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>D.O.B</Form.Label>
                                                    <Form.Control type="date" name="dob"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Select name="gender" aria-label="Default select example">
                                                        <option>Select</option>
                                                        <option value="1">Male</option>
                                                        <option value="2">female</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="email" name="name" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>NIN</Form.Label>
                                                    <Form.Control type="text" name="nin" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" name="phone_number" placeholder="+1 (344) 187-3128" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Religion</Form.Label>
                                                    <Form.Control type="text" name="religion"/>
                                                </Form.Group>
                                                
                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Submit
                                                </Button>
                                            </Form>
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
export default Receptionist;