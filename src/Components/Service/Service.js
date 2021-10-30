import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Service = (props) => {
    const {_id, tourName, image} = (props.service);
    console.log(_id);
    return (
        <div className="col-lg-4 col-md-6 col-12" id="service">
            <Card className="rounded-3 service-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{tourName}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/review/${_id}`}>
                        <Button variant="primary"> <i className="fas fa-info-circle"></i> Booking</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;