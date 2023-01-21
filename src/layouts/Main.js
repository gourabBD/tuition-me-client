import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../components/Footer/Footers';
import NavBar from '../components/NavBar/NavBar';

const Main = () => {
    return (
        <div className='min-vh-100 overflow-hidden'>
        <NavBar></NavBar>
            <Outlet></Outlet>
            <Footers></Footers>
         
        </div>
    );
};

export default Main;