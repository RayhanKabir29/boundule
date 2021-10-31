import React from 'react';
import { Button } from 'react-bootstrap';
import {useLocation,useHistory} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin =() =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <h2>Please Log in Here</h2>
            <Button variant="success" onClick={handleGoogleLogin}> Log in</Button>
        </div>
    );
};

export default Login;