import React, {useEffect, useState} from 'react';
import {Button, Card, ListGroup, ListGroupItem, Spinner} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';

const ReviewService = () => {
    const {id} = useParams();

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
    const {_id, tourName, price, image, description} = service
    return (
        <div>

            <Card className="mx-auto" style={{width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                    <ListGroupItem>price:${price}</ListGroupItem>
                    <ListGroupItem>
                        <Link to={`/booking/${_id}`}>
                            <Button variant="primary">Booking</Button>
                        </Link>
                    </ListGroupItem>
                </ListGroup>

            </Card>
        </div>
    );
};

export default ReviewService;