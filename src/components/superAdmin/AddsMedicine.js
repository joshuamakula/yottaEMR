import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddsMedicine = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control type="text" name='expiry_date' placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control type="text" name='manufacturer' placeholder="07123456789" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control type="text" name='medicine_name' placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Medicine Price</Form.Label>
                <Form.Control type="text" name='medicine_price' placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" name='quantity' placeholder="" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Submit
            </Button>
        </Form>
    )
}
export default AddsMedicine;