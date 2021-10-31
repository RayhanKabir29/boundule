import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {firstName,imgUrl, _id, price,desc} = service;
    return (
        <div>
            <Card>
                <Card.Img  src={imgUrl} className="img-fluid"/>
                    <Card.Body>
                        <Card.Title>Name: {firstName} Tour</Card.Title>
                        <Card.Text>
                            <p>Details: {desc}</p>
                        </Card.Text>
                        <Card.Text>
                            <h5>Package Fee: {price}</h5>
                        </Card.Text>

                    <Link to={`/tourspot/${_id}`}><Button variant="primary">Book {firstName} Tour</Button></Link>
                </Card.Body> 
            </Card>        
        </div>
    );
};

export default Service;