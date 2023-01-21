import React,{useContext} from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';


const SpinnerRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return<div className='d-flex min-vh-100  justify-content-center'> <Spinner  animation="grow" variant="info" />  </div> 
       }
    return children;
};

export default SpinnerRouter;