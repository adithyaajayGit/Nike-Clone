import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className='padding-x py-8 z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
            <img
              src={headerLogo}
              alt="logo"
              width={130}
              height={29}
            />
          </a>
          <ul className={`flex-1 flex justify-center items-center gap-16 ${isMenuOpen ? 'flex' : 'hidden'} max-lg:flex-col max-lg:items-center max-lg:gap-8 lg:flex`}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden max-lg:block'>
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={handleHamburgerClick}
              className='cursor-pointer'
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
