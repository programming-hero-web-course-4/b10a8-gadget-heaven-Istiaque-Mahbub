import React from 'react';

const Footer = () => {
    return (
       <footer className='my-10'>
        <div className='flex flex-col items-center'>
            <h3 className='text-3xl text-bold'>Gadget Heaven</h3>
            <p className='text-sm text-gray-500'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="divider"></div>
         <div className="footer  p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
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