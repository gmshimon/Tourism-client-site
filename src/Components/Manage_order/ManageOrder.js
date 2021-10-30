import React, {useEffect, useState} from 'react';
import {Button, Card} from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                })
        }
    }

    //handle the status
    const handleStatusChange = (id, order) => {

        const statusChange = 'approved';
        const orderModify = {...order};
        orderModify.status = statusChange;
        // console.log(orderModify);
        const url = `http://localhost:5000/booking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderModify),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Updated');
                }
            })
    }

    console.log(orders);
    return (
        <div>
            {
                orders.map(order => <Card key={order._id} className="w-50 mx-auto my-3">
                    <Card.Header>User: <span className="fw-bold"> {order.name}</span> </Card.Header>
                    <Card.Body>
                        <Card.Title> Package:{order.order.tourName}</Card.Title>
                        <Card.Text>
                            Price:$ {order.order.price}
                        </Card.Text>
                        <Card.Text>
                            Status: <span className={order.status == 'pending' ? 'text-danger' : 'text-success'}>
                                {order.status}
                            </span>
                        </Card.Text>
                        {/* change status */}
                        <Button disabled={order.status == 'pending' ? false : true} onClick={() => handleStatusChange(order._id, order)} className="me-2" variant="primary">Change status</Button>
                        {/* delete button */}
                        <Button onClick={() => handleDelete(order._id)} variant="primary"><i className="far fa-trash-alt"></i></Button>
                    </Card.Body>
                </Card>)
            }
        </div>
    );
};

export default ManageOrder;