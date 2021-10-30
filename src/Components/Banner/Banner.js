import React from 'react';
import {Carousel} from 'react-bootstrap';

import Banner1 from '../../Images/Banner/banner-1.jpg';
import Banner2 from '../../Images/Banner/banner-2.jpg';
import Banner3 from '../../Images/Banner/banner-3.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h6 className="text-dark">A journey of a thousand miles begins with a single step</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h6 >Do not follow where the path may lead. Go instead where there is no path and leave a trail</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h6>Man cannot discover new oceans unless he has the courage to lose sight of the shore</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;