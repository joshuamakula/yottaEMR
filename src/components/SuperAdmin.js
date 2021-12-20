import React from 'react';
import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import AddDiseases from './superAdmin/AddDiseases';
import AddsCards from './superAdmin/AddsCards';
import AddsMedicine from './superAdmin/AddsMedicine';
import AssignsRoles from './superAdmin/AssignsRoles';
import CreateRoles from './superAdmin/CreateRoles';
import CreatesHospital from './superAdmin/CreatesHospital';
import CreatesUsers from './superAdmin/CreatesUsers';

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
                        <li className='tab-list'>
                            <Link to="/receptionist" className='tab-link'>
                                <span className='tab-title text-uppercase'>Receptionist</span>
                                <span className='tab-desc'>Front Desk</span>
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
                                            <Nav.Link eventKey="createshospital">Create hospital</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="createRoles">Create roles</Nav.Link>
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
                                            <CreatesUsers />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="createshospital" className='tab-cont'>
                                            <CreatesHospital />>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="assignsRoles" className='tab-cont'>
                                            <AssignsRoles />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="createRoles" className='tab-cont'>
                                            <CreateRoles />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addDiseases" className='tab-cont'>
                                            <AddDiseases />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addsMedicine" className='tab-cont'>
                                            <AddsMedicine />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addsCards" className='tab-cont'>
                                            <AddsCards />
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