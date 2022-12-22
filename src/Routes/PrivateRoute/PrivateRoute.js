import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { AuthContext } from '../../context/Authprovider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(loading){
        return <Spinner></Spinner>
    }

    if (user){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;