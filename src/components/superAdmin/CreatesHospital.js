import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CreatesHospital = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Health Facility Name</Form.Label>
                <Form.Control type="text" name="healthfacility_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Incharge Name</Form.Label>
                <Form.Control type="text" name="Incharge_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Incharge Number</Form.Label>
                <Form.Control type="text" name="Incharge_number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Longitude</Form.Label>
                <Form.Control type="text" name="long" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>latitude</Form.Label>
                <Form.Control type="text" name="latitude" />
            </Form.Group>
            
            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Submit
            </Button>
        </Form>
    )
}
export default CreatesHospital;