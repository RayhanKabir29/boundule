import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="services">
            <Container>
                <Row>
                    <Col className="single-service">
                    {
                        services.map(service=><Service
                        key ={service._id}
                        service={service}
                        ></Service>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;

