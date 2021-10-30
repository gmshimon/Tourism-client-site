import React, {useEffect, useRef, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {useForm} from "react-hook-form";
import useFirebase from '../../Hooks/UseFirebase';
import './Booking.css';

const Booking = () => {
    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
    const {id} = useParams();
    console.log(id);
    const {user} = useFirebase();

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false);
            })

    }, [])

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    const service = services.find(service => service._id === id);

    const onSubmit = data => {
        data.order = service;
        console.log(data);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking successful');
                    reset();
                }
            })

    };
    return (
        <div>
            <h1>Booking</h1>
            <p>Package id: {id}</p>
            <div className="mx-auto">
                <form className="admission-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", {required: true})} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input placeholder="address" {...register("address")} />
                    <input placeholder="phone" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Booking;