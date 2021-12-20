import React from 'react';
import { Button, Form } from 'react-bootstrap';

const PerformTest = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Select Patient</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">Mark Doe</option>
                    <option value="2">Jacob</option>
                    <option value="2">Allan Lome</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Select Test</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">PCR</option>
                    <option value="2">Typhoid</option>
                    <option value="2">Malaria</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Send Request
            </Button>
        </Form>
    )
}
export default PerformTest;