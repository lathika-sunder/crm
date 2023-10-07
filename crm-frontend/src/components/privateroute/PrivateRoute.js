import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = 1; // Replace this with your authentication logic

 
   if(auth==0)
    return <Outlet/>
  
    else
    return <Navigate to="/" />
  
  
};

export default PrivateRoute;
