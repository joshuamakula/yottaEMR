import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateRoles = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Role Name</Form.Label>
                <Form.Control type="text" name='rolename'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Role Description</Form.Label>
                <Form.Control type="text" name='roledescription' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>permissions</Form.Label>
                <Form.Control type="text" name='permissions'/>
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Submit
            </Button>
        </Form>
    )
}
export default CreateRoles;