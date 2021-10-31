import React from 'react';
import { Container, Nav, Navbar,Button, NavDropdown} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut }= useAuth();
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="nav-container">
                <Container>
                    <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>Vromon Guru</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#about-us">About Us</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#services">Services</Nav.Link>

                    <NavDropdown title="Log in" id="basic-nav-dropdown">
                    {user?.email?  <><Button onClick={logOut}>Log out</Button>
                    <Nav.Link as ={HashLink} to="/manageService">Manage Service</Nav.Link>
                    <Nav.Link as ={HashLink} to="/addService">Add Service</Nav.Link>
                    </>:
                        <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>
                        }   
                    </NavDropdown>
                    <Navbar.Text>
                        <div className="sign-in-msg text-primary">
                        Signed in as: {user?.displayName }
                        </div>
                    </Navbar.Text>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    );
};

export default Header;