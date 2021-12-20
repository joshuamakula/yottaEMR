import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AssignsRoles = () => {
    return(
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
    )
}
export default AssignsRoles;