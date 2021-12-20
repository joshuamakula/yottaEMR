import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddDiseases = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Disease Name</Form.Label>
                <Form.Control type="text" name='disease_name' placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Symptoms</Form.Label>
                <Form.Control name="disease_symptoms" as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Submit
            </Button>
        </Form>
    )
}
export default AddDiseases;