import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import useFirebase from '../../Hooks/UseFirebase';
import './NavBar.css';

const NavBar = () => {
    const {user, logOut} = useFirebase();
    const handleLogout = () => {
        logOut();
    }
    return (
        <div>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className="mb-2" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Travel with us</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/addService">AddService</Nav.Link>
                            <Nav.Link as={Link} to="/myOrder">my-order</Nav.Link>
                            {
                                user.email ? <Navbar.Text>
                                    Signed in as: {user.displayName}
                                    <button className="ms-2" onClick={handleLogout}>Log out</button>
                                </Navbar.Text>
                                    :
                                    <Nav.Link as={Link} to="/login">login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;