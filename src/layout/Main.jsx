import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/NavBar/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;