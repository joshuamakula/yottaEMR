import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddsCards = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card number</Form.Label>
                <Form.Control type="text" name='cardno'/>
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Submit
            </Button>
        </Form>
    )
}
export default AddsCards;