import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Component/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;