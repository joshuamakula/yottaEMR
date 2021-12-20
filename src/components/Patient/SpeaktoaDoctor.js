import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SpeaktoaDoctor = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Your Email address</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Describe your situation</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default SpeaktoaDoctor;