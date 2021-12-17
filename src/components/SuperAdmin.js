import React from 'react';
import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function SuperAdmin() {
    return (
        <div style={{ backgroundColor: '#F3F6F9' }}>
            <NavBar />
            <Container>
                <Row>
                    <ul className='heade-tab'>
                        <li className='tab-list'>
                            <div className='tab-link' style={{backgroundColor:'#fff'}}>
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
                                            <Nav.Link eventKey="addsCards">Add Cards</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="assignCards">Assign Cards to a hospital</Nav.Link>
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
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Full Name</Form.Label>
                                                    <Form.Control type="text" name='fullname' placeholder="Enter your full name" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" name='phone' placeholder="07123456789" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Hospital</Form.Label>
                                                    <Form.Control type="text" name='hospitals' placeholder="" />
                                                </Form.Group>
                                                
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Role</Form.Label>
                                                    <Form.Select name="roles" aria-label="Default select example">
                                                        <option>Select</option>
                                                        <option value="1">Doctor</option>
                                                        <option value="2">Lab Technician</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addDiseases" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Disease Name</Form.Label>
                                                    <Form.Control type="text" name='disease_name' placeholder="Enter your full name" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Symptoms</Form.Label>
                                                    <Form.Control name="disease_symptoms" as="textarea" rows={3} />
                                                </Form.Group>

                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addsMedicine" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Expiry Date</Form.Label>
                                                    <Form.Control type="text" name='expiry_date' placeholder="Enter your full name" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Manufacturer</Form.Label>
                                                    <Form.Control type="text" name='manufacturer' placeholder="07123456789" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Medicine Name</Form.Label>
                                                    <Form.Control type="text" name='medicine_name' placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Medicine Price</Form.Label>
                                                    <Form.Control type="text" name='medicine_price' placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Quantity</Form.Label>
                                                    <Form.Control type="text" name='quantity' placeholder="" />
                                                </Form.Group>

                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addsCards" className='tab-cont'>
                                            Adds Cards
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="assignCards" className='tab-cont'>
                                            Assign Cards to a hospital
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
export default SuperAdmin;