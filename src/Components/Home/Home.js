import React from 'react';
import AddService from '../AddService/AddService';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AddService></AddService>
        </div>
    );
};

export default Home;