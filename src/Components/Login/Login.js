import React from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Login = () => {
    const {signUpWithGoogle, setUser, setIsLoading} = useFirebase();

    const location = useLocation();
    const history = useHistory();
    const login_url = location.state?.from || '/home';

    const handleGoogleSignUp = () => {
        signUpWithGoogle()
            .then(result => {
                setUser(result.user)
                // console.log('inside login page', result.user);
                history.push(login_url);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="text-center">
            <h1>Please Login</h1>
            <button className="btn btn-primary" onClick={handleGoogleSignUp}><i className="fab fa-google-plus-g"></i> Google sign up</button>
        </div>
    );
};

export default Login;