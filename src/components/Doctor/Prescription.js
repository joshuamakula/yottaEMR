import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Prescription = () => {
    return (
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
    )
}
export default Prescription;