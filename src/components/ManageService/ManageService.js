import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';

const ManageService = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
         fetch(url, {
             method:'DELETE'
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount){
                    alert ('Deleted!');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    } 
                })
     }
    return (
        <div>
            <h2 className="text-center">Service Action</h2>
            
                        {
                            services.map(service=><li key ={service._id}>
                                <h2>Service Name: {service.name}</h2>
                                <Button variant="danger" className="me-3" onClick={()=> handleDelete(service._id)}>Delete</Button>
                            </li>)
                        }
            
        </div>
    );
};

export default ManageService;