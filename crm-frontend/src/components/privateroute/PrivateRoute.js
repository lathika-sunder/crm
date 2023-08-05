import React from 'react';
import { Outlet, Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

const auth = false;

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        render={()=>
          auth ? (
            children
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
