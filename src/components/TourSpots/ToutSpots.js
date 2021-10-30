import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourSpots.css';

const ToutSpots = () => {
    const {id} = useParams();
    const [touristSpot, setTouristSpot] = useState([]);
    const [findSpot, setFindSpot] = useState({});

    useEffect(()=>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=> setTouristSpot(data))
    },[]);
    useEffect(()=>{
        const foundSpot = touristSpot?.find(spot=> spot?.service_id===id);
        setFindSpot(foundSpot);
    },[touristSpot])
    return (
        <div>
            <img src={findSpot?.img} alt="" />
            <h2>Name:{findSpot?.name}</h2>
        </div>
    );
};

export default ToutSpots;