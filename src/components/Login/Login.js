import React from 'react';
import { Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    return (
        <div>
            <h2>Please Log in Here</h2>
            <Button variant="success" onClick={signInWithGoogle}> Log in</Button>
        </div>
    );
};

export default Login;