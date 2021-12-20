import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';

const ViewPatients = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email address</th>
                <th>Phone Number</th>
                <th>NIN</th>
                <th>D.O.B</th>
                <th>Gender</th>
                <th>Add notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                    <td>Mark Doe</td>
                    <td>markdoe@example.com</td>
                    <td>07123456789</td>
                    <td>CM927364252512</td>
                    <td>23/01/1999</td>
                    <td>male</td>
                    <td><FontAwesomeIcon icon={ faEdit }/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton@example.com</td>
                    <td>@07123456789</td>
                    <td>CM927364252512</td>
                    <td>23/01/1999</td>
                    <td>male</td>
                    <td><FontAwesomeIcon icon={ faEdit }/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Allan Lome</td>
                    <td>allanlome@example.com</td>
                    <td>@07123456789</td>
                    <td>CM927364252512</td>
                    <td>23/01/1999</td>
                    <td>male</td>
                    <td><FontAwesomeIcon icon={ faEdit }/></td>
                </tr>
            </tbody>
        </Table>
    )
}
export default ViewPatients;