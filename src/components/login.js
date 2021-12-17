import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo4 from '../assets/images/logos/logo-4.png'

function Login() {
    return (
        <div>
            <Row>
                <Col className='col-sm-6'>
                    <div className='flex-center'>
                        <div>
                            <img src={logo4} alt="METRONIC" className='login-logo' /> 
                            <Form>
                                <Form.Group className="form-group" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email or PhoneNumber</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" className='emailphone' />
                                </Form.Group>
                                <Link to="/dashboard">
                                    <Button className="btn btn-primary" type="submit">Access Now</Button>
                                </Link>

                            </Form>
                        </div>
                    </div>
                </Col>
                <Col className='col-sm-6'>
                    <div className='login-aside'>
                        <div className='login-right-side'>
                            <h3 className='display1-lg' style={{backgroundImage:`url('../images/svg/login-visual-4.svg')`}}>
                                We <br/>Close <br/> the Gap
                            </h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login;