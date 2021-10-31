import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
        <Container>
            <Row>
            <Col xs={12} md={4}>
               <div className="location text-white">
               <h2>Vromon Guru</h2>
               <h4>Location: Dhaka Banladesh</h4>
               <h4>Phone: +1234567</h4>
               <h4>Email: vromon@guru.info</h4>
               </div>
            </Col>
            <Col xs={12} md={4}>
               <div className="footer-service text-white">
               <h2>Our Services</h2>
                <ul>
                    <li><Link to ="/service">Hill Tracking</Link></li>
                    <li><Link to ="/service">Campaign</Link></li>
                    <li><Link to ="/service">Beach Hiking</Link></li>
                    <li><Link to ="/service">Journey By Boat</Link></li>
                    <li><Link to ="/service">Day Long Stay</Link></li>
                </ul>
               </div>
            </Col>
            <Col xs={12} md={4}>
               <h2 className="text-white">News Letter</h2>
               <p className="text-white">Best solution for your it startup business consecteturadipiscing elit.</p>
               <input type="email" name="" placeholder="Email" />
            </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;