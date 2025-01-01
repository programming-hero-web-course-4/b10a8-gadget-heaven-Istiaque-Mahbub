import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Component/Banner/Banner';
import BannerImage from '../Component/Banner/BannerImage';
import Products from '../Component/Products/Products';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <BannerImage></BannerImage>
            <Products categories={categories}></Products>
           
        </div>
    );
};

export default Home;