import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTest = () => {
    return (
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
    )
}

export default AddTest;