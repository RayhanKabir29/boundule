import React from 'react';
import { Col, Container, Row,Button} from 'react-bootstrap';

const About = () => {
    return (
        <div id="about-us" className="about-container mb-5">
            <h1 className="text-center m-5 text-primary">Why take a tour with us?</h1>
            <h4 className="px-5 text-center mb-5">Find the vacation dates that work for you, click “Buy Now” for a vacation quote. You’ll be able to select the number of people traveling, add Travel Protection, and also get an air-inclusive vacation price.</h4>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <div className="about-img">
                        <img src="https://i.ibb.co/L8DbZzW/service4.jpg" alt="" className="img-fluid"/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                <div className="about-text">
                        <ul>
                            <li>Industry leading safety record.</li>
                            <li>Our helicopter rental services save time when you bypass the crowds and lines by flying.</li>
                            <li>We offer convenient Niagara airport shuttle services and on demand charter flights.</li>
                            <li>There is nothing cooler than taking a helicopter trip over Niagara Falls.</li>
                            <li>There is nothing cooler than taking a helicopter trip over Niagara Falls.</li>
                        </ul>
                        <Button className="" variant="secondary">Book A Tour Now!</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default About;