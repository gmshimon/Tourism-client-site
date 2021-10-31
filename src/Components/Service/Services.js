import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })

    }, [])
    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden mx-auto">Loading...</span>
            </div>
        )
    }
    // console.log(services);

    return (
        <div id="service">
            <h1 className="text-center">This is services</h1>
            <div className="container">
                <div className="row g-5">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;