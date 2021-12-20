import { faHSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Hospitals = () => {
    return (
        <Row>
            <Col>
                <Card style={{ width: '18rem'}}>
                    <Card.Body style={{ display:'flex', justifyContent:'center' }}>
                        <div>
                            <Card.Text>
                            <FontAwesomeIcon icon={faHSquare}  size="6x"/>
                        </Card.Text>
                        <Card.Title>Kawempe</Card.Title>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem'}}>
                    <Card.Body style={{ display:'flex', justifyContent:'center' }}>
                        <div>
                            <Card.Text>
                            <FontAwesomeIcon icon={faHSquare}  size="6x"/>
                        </Card.Text>
                        <Card.Title>Naguru</Card.Title>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem'}}>
                    <Card.Body style={{ display:'flex', justifyContent:'center' }}>
                        <div>
                            <Card.Text>
                            <FontAwesomeIcon icon={faHSquare}  size="6x"/>
                        </Card.Text>
                        <Card.Title>Kiswa</Card.Title>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Hospitals;