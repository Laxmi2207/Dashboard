import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    useEffect(() => { 
        
        if (isAuthenticated) {
           
            window.location.href = '/home';
            
        } else {
            
            loginWithRedirect();
        }
    }, [loginWithRedirect, isAuthenticated]);

    return (
        <>
           
        </>
    );
};

export default Login;
