import React from 'react';
import image from '../../assets/banner.jpg'
const BannerImage = () => {
    return (
        <div>
            <div className='md:w-8/12  mx-auto relative'>
    <div className='rounded-xl  mx-auto p-4 border-2 md:-mt-36 '> 
        <img className='border-2 mx-auto  rounded-xl' src={image} alt="gadget Heaven banner" />
    </div>
</div>
        </div>
    );
};

export default BannerImage;