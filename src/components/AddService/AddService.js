import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://eerie-spirit-62269.herokuapp.com/services',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('insert data successfully');
                reset();
            }
        })

    };
    return (
        <div className="add-service">
            <h2 className="text-center">Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} placeholder="Service Name"/>
                <input {...register("imgUrl")} placeholder="Image URL"/>
                <input type="number" {...register("price", { required: true })}  placeholder="Cost"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;