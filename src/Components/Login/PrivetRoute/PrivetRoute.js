import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivetRoute = () => {
    const [loggedinUser,setLoggedinUser] = useContext(UserContext)
    const token = sessionStorage.getItem("toke");
    const location = useLocation();
    console.log(loggedinUser.email)
    return (
        loggedinUser.email || token? <Outlet />: <Navigate to="/login" replace state={{from:location}}/>
    );
};

export default PrivetRoute;