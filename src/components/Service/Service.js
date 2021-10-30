import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, desc, fee, img, service_id} = service;
    return (
        <div>
            <Card>
                <Card.Img  src={img} className="img-fluid"/>
                    <Card.Body>
                        <Card.Title>Name:{name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/tourspot/${service_id}`}><Button variant="primary">Book a Tour</Button></Link>
                </Card.Body> 
            </Card>        
        </div>
    );
};

export default Service;