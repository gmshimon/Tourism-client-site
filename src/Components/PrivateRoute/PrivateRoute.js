import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useFirebase();
    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    return (
        <div>
            <Route
                {...rest}
                render={({location}) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: location}
                    }}
                ></Redirect>}
            >
            </Route>
        </div>
    );
};

export default PrivateRoute;