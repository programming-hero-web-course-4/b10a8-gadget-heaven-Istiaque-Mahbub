import React from 'react';

const Footer = () => {
    return (
       <footer className='my-10'>
        <div className='flex flex-col items-center'>
            <h3 className='text-3xl text-bold'>Gadget Heaven</h3>
            <p className='text-sm text-gray-500'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="divider"></div>
         <div className="footer flex justify-between p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
       </footer>
    );
};

export default Footer;