import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Form, Nav, Row, Tab, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHSquare } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

function Doctor() {
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
                            <div className='tab-link' style={{backgroundColor:'#fff'}}>
                                <span className='tab-title text-uppercase'>Doctors</span>
                                <span className='tab-desc'>Doctors & Profiles</span>
                            </div>
                        </li>
                        <li className='tab-list'>
                            <Link to="/lab" href='#!' className='tab-link'>
                                <span className='tab-title text-uppercase'>Lab</span>
                                <span className='tab-desc'>Diagnosis Management</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to="/receptionist" className='tab-link'>
                                <span className='tab-title text-uppercase'>Receptionist</span>
                                <span className='tab-desc'>Front Desk</span>
                            </Link>
                        </li>
                    </ul>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="patients">
                        <div className='cont-header'>
                            <Row>
                                <Col>
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="patients">Patients</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="requestTests">Request Tests</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="prescription">Prescription</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        </div>
                        <div style={{backgroundColor:'#fff', paddingTop:'15px', paddingBottom:'500px', marginBottom:'50px'}}>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="patients" className='tab-cont'>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Email address</th>
                                                    <th>Phone Number</th>
                                                    <th>NIN</th>
                                                    <th>D.O.B</th>
                                                    <th>Gender</th>
                                                    <th>Add notes</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>1</td>
                                                    <td>Mark Doe</td>
                                                    <td>markdoe@example.com</td>
                                                    <td>07123456789</td>
                                                    <td>CM927364252512</td>
                                                    <td>23/01/1999</td>
                                                    <td>male</td>
                                                    <td><FontAwesomeIcon icon={ faEdit }/></td>
                                                    </tr>
                                                    <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton@example.com</td>
                                                    <td>@07123456789</td>
                                                    <td>CM927364252512</td>
                                                    <td>23/01/1999</td>
                                                    <td>male</td>
                                                    <td><FontAwesomeIcon icon={ faEdit }/></td>
                                                    </tr>
                                                    <tr>
                                                    <td>3</td>
                                                    <td>Allan Lome</td>
                                                    <td>allanlome@example.com</td>
                                                    <td>@07123456789</td>
                                                    <td>CM927364252512</td>
                                                    <td>23/01/1999</td>
                                                    <td>male</td>
                                                    <td><FontAwesomeIcon icon={ faEdit }/></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="requestTests" className='tab-cont'>
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
                                                
                                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                                    Send Request
                                                </Button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="prescription" className='tab-cont'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Card ID</Form.Label>
                                                    <Form.Control type="text" name='card_id' placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Items</Form.Label>
                                                    <Form.Control type="text" name='items' placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Medicine ID</Form.Label>
                                                    <Form.Control type="text" name='medicine_id' placeholder="" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Dose</Form.Label>
                                                    <Form.Control type="text" name='dose' placeholder="" />
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
export default Doctor;