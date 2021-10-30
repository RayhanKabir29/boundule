import React from 'react';
import { Container, Nav, Navbar,Button} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>Vromon Guru</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#about-us">About Us</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#services">Services</Nav.Link>
                   <Button onClick="" variant="danger">Log Out</Button>:
                    <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>   
                   <Navbar.Text>
                        <div className="sign-in-msg text-primary">
                        Signed in as:
                        </div>
                    </Navbar.Text>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    );
};

export default Header;