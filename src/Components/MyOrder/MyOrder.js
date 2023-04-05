import React, {useEffect, useState} from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import './MyOrder.css'

const MyOrder = () => {
    let i = 1;
    const [orders, setOrder] = useState([])
    const {user} = useFirebase();
    // console.log(user);
    //loading all order 
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrder(remainingOrder);
                    }
                })
        }
    }



    //filtering the order of the current loggedin user
    const myOrder = orders.filter(order => order.email === user.email);
    console.log(myOrder);
    return (
        <div>
            <h1 className="text-center">Welcome back</h1>
            <h5 className="text-center">{user.displayName}</h5>
            <div className="user-details">
                <h3>User information</h3>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                {/* <p>{myOrder[0].phone}</p> */}
            </div>
            <div className="order-details">
                <h3>Order list</h3>
                <div >
                    {
                        myOrder.map(order => <div className="order" key={order._id}>
                            <h5>{i++}. {order.order.tourName}</h5>
                            <p>Price: $ {order.order.price}</p>
                            <p>Status:<span className={order.status == 'pending' ? 'text-danger' : 'text-success'}>{order.status}</span> </p>
                            <button onClick={() => handleDelete(order._id)} className="btn btn-primary">Delete</button>
                        </div>

                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;