import React from 'react';
import Logo from '../assets/logo.svg'
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className='py-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          <Link
            to="contact"
            className="cursor-pointer"
          >
            <button className="hidden lg:flex items-center btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
    );
};

export default Header;
