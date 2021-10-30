import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div
      style={{
         backgroundImage: `url("https://i.ibb.co/wdH7VQv/main-banner.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'
      }}>
        <div className="banner-info">
        <Container>
            <Row>
            <Col xs={12} md={6}>
                <div className="banner-text text-white">
                    <h1>The Thrill of a Lifetime</h1>
                    <h4>Enjoy The Natuaral Beauty and Explore your Wildness</h4>
                </div>
            </Col>
            <Col xs={12} md={6}>
            </Col>
            </Row>
        </Container>
        </div>
      </div>
    );
};

export default Banner;