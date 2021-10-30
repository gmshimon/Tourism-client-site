import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
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