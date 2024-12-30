import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/NavBar/Footer/Footer';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;