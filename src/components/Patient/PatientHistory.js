import React from 'react';
import { Table } from 'react-bootstrap';

const PatientHistory = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email address</th>
                <th>Phone Number</th>
                <th>NIN</th>
                <th>D.O.B</th>
                <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark Doe</td>
                <td>markdoe@example.com</td>
                <td>07123456789</td>
                <td>CM927364252512</td>
                <td>23/01/1999</td>
                <td>male</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default PatientHistory;