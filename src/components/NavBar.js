import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/logo-letter-12.png';

function NavBar() {
    return (
        <Navbar style={{paddingTop:'25px', paddingBottom:'25px', backgroundColor:'#F3F6F9'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/"><img src={logo} alt='METRONIC' className='max-h-40px' /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <span className='btn btn-icon'  style={{backgroundColor:'#E4E6EF', padding:'2px 8px', borderRadius:'5px'}}>
                        <FontAwesomeIcon icon={faUser} style={{color:'#7E8299'}} />
                    </span>

                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;