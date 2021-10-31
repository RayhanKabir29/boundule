import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourSpots.css';

const ToutSpots = () => {
    const {id} = useParams();
    const [touristSpot, setTouristSpot] = useState({});
    //const [findSpot, setFindSpot] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res=> res.json())
        .then(data=> setTouristSpot(data))
    },[]);
  
    return (
        <div>
            <img src={touristSpot.imgUrl} alt="" />
            <h2>Name:{touristSpot.name}</h2>
        </div>
    );
};

export default ToutSpots;