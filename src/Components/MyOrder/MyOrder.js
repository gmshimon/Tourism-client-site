import React, {useEffect} from 'react';
import useFirebase from '../../Hooks/UseFirebase';

const MyOrder = () => {
    const {user, isLoading} = useFirebase();
    console.log(user);
    useEffect(() => {
        fetch('http://localhost:5000/myOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user?.email),
        })
            .then(res => res.json())
    }, [])
    return (
        <div>
            <h1>My order</h1>
        </div>
    );
};

export default MyOrder;