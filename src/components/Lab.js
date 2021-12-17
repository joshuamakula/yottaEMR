import React from 'react';
import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Lab() {
    return (
        <div style={{ backgroundColor: '#F3F6F9' }}>
            <NavBar />
            <Container>
                <Row>
                    <ul className='heade-tab'>
                        <Link to="/superadmin" className='tab-list'>
                            <div className='tab-link'>
                                <span className='tab-title text-uppercase'>Super Admin</span>
                                <span className='tab-desc'>Unlimited Roles</span>
                            </div>
                        </Link>
                        <li className='tab-list'>
                            <Link to="/dashboard" className='tab-link'>
                                <span className='tab-title text-uppercase'>Admin</span>
                                <span className='tab-desc'>Dashboard & Reports</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to='/patient' className='tab-link'>
                                <span className='tab-title text-uppercase'>Patients</span>
                                <span className='tab-desc'>Patient Cards & Profiles</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to='/doctor' className='tab-link'>
                                <span className='tab-title text-uppercase'>Doctors</span>
                                <span className='tab-desc'>Doctors & Profiles</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <div className='tab-link' style={{backgroundColor:'#fff'}}>
                                <span className='tab-title text-uppercase'>Lab</span>
                                <span className='tab-desc'>Diagnosis Management</span>
                            </div>
                        </li>
                    </ul>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="performTest">
                        <div className='cont-header'>
                            <Row>
                                <Col>
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="performTest">Perform Test</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="addTest">Add Test</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        </div>
                        <div style={{backgroundColor:'#fff', paddingTop:'15px', paddingBottom:'500px', marginBottom:'50px'}}>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="performTest" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Select Patient</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Select</option>
                                                        <option value="1">Mark Doe</option>
                                                        <option value="2">Jacob</option>
                                                        <option value="2">Allan Lome</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Select Test</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Select</option>
                                                        <option value="1">PCR</option>
                                                        <option value="2">Typhoid</option>
                                                        <option value="2">Malaria</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Add notes</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Send Request
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addTest" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Card ID</Form.Label>
                                                    <Form.Control type="text" name="card_id" placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Test Cost</Form.Label>
                                                    <Form.Control type="text" name="test_cost" placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>tests</Form.Label>
                                                    <Form.Control type="text" name="test" placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Test Name</Form.Label>
                                                    <Form.Control type="text" name="test_name" placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Result</Form.Label>
                                                    <Form.Control type="text" name="result" placeholder="" />
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
export default Lab;