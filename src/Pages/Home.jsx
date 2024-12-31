import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Component/Banner/Banner';
import BannerImage from '../Component/Banner/BannerImage';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <BannerImage></BannerImage>
        </div>
    );
};

export default Home;