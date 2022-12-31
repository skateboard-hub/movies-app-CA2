import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MoviesContext } from "../contexts/moviesContext";

const ProtectedRoutes = () => {

  const context = useContext(MoviesContext);
  const location = useLocation();
  console.log(context.isAuthenticated);
  
  return context.isAuthenticated === true ? (
    <Outlet /> 
  ) : (
    
    <Navigate to='/login' replace state={{ from: location }}/>
  );
};

export default ProtectedRoutes;