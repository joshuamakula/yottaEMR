import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Form, Nav, Row, Tab, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHSquare } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';

function Patient() {
    return (
        <div style={{ backgroundColor: '#F3F6F9' }}>
            <NavBar />
            <Container>
                <Row>
                    <ul className='heade-tab'>
                        <li className='tab-list'>
                            <Link to="/dashboard" className='tab-link'>
                                <span className='tab-title text-uppercase'>Admin</span>
                                <span className='tab-desc'>Dashboard & Reports</span>
                            </Link>
                        </li>
                        <li className='tab-list'>
                            <Link to='/patient' className='tab-link' style={{backgroundColor:'#fff'}}>
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="patients">
                        <div className='cont-header'>
                            <Row>
                                <Col>
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="patients">Patients</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="hospitals">Hospitals</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="speaktoadoctor">Speak to a doctor</Nav.Link>
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
                                                    </tr>
                                                    <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton@example.com</td>
                                                    <td>@07123456789</td>
                                                    <td>CM927364252512</td>
                                                    <td>23/01/1999</td>
                                                    <td>male</td>
                                                    </tr>
                                                    <tr>
                                                    <td>3</td>
                                                    <td>Allan Lome</td>
                                                    <td>allanlome@example.com</td>
                                                    <td>@07123456789</td>
                                                    <td>CM927364252512</td>
                                                    <td>23/01/1999</td>
                                                    <td>male</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="hospitals" className='tab-cont'>
                                            <Row>
                                                <Col>
                                                    <Card style={{ width: '18rem'}}>
                                                        <Card.Body style={{ display:'flex', justifyContent:'center' }}>
                                                            <div>
                                                                <Card.Text>
                                                                <FontAwesomeIcon icon={faHSquare}  size="6x"/>
                                                            </Card.Text>
                                                            <Card.Title>Kawempe</Card.Title>
                                                            </div>
                                                            
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card style={{ width: '18rem'}}>
                                                        <Card.Body style={{ display:'flex', justifyContent:'center' }}>
                                                            <div>
                                                                <Card.Text>
                                                                <FontAwesomeIcon icon={faHSquare}  size="6x"/>
                                                            </Card.Text>
                                                            <Card.Title>Naguru</Card.Title>
                                                            </div>
                                                            
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card style={{ width: '18rem'}}>
                                                        <Card.Body style={{ display:'flex', justifyContent:'center' }}>
                                                            <div>
                                                                <Card.Text>
                                                                <FontAwesomeIcon icon={faHSquare}  size="6x"/>
                                                            </Card.Text>
                                                            <Card.Title>Kiswa</Card.Title>
                                                            </div>
                                                            
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="speaktoadoctor" className='tab-cont'>
                                            <Form>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Your Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="name@example.com" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Your Phone Number</Form.Label>
                                                    <Form.Control type="text" placeholder="0712345678" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Describe your situation</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
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
export default Patient;