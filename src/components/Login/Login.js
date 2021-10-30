import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div>
            <h2>Please Log in Here</h2>
            <Button variant="success" onClick={signInWithGoogle}> Log in</Button>
        </div>
    );
};

export default Login;