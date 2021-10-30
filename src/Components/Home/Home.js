import React from 'react';
import AddService from '../AddService/AddService';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AddService></AddService>
        </div>
    );
};

export default Home;