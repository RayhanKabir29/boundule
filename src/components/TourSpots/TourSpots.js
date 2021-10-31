import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './TourSpots.css';

const ToutSpots = () => {
    const {id} = useParams();
    const [touristSpot, setTouristSpot] = useState({});
    //const [findSpot, setFindSpot] = useState({});

    useEffect(()=>{
        fetch(`https://eerie-spirit-62269.herokuapp.com/services/${id}`)
        .then(res=> res.json())
        .then(data=> setTouristSpot(data))
    },[]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        console.log(data)
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img src={touristSpot.imgUrl} alt="" />
                        <h2>Name:{touristSpot.firstName}</h2>
                        <p>Detais About the Tour: {touristSpot.desc}</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <h2 className="text-center mb-3">Book Your Tour!</h2>
                        <div className="book-service">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("firstName", { required: true})} placeholder="First Name"/>
                                <input {...register("lasttName", { required: true })} placeholder="Last Name"/>
                                <input defaultValue={touristSpot?.email}{...register("email", { required: true })} placeholder="Email"/>
                                <input {...register("days", { required: true })} placeholder="How Many Days"/>
                                <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age"/>
                                <input type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default ToutSpots;