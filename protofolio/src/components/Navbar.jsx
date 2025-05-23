import  { useState } from 'react';
import { logo1, menu, close } from '../assets';
import { navLinks } from '../constants';
import styles from '../style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent z-50">
      <nav className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        
          <img src={logo1} alt="Logo" className="w-20 sm:w-24" />
        

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-10 items-center font-semibold text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={`${styles.orange} transition-colors hover:text-orange-500`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden z-50">
          <button className='border-none' onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? close : menu} alt="menu" className="w-8 h-8 " />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed z-40 top-0 left-0 w-full h-[100vh] bg-black/70 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:hidden flex flex-col items-center justify-center `}
        >
          <ul className="space-y-8 text-white text-xl pt-20  font-medium">
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setIsOpen(false)}>
                <a href={`#${link.id}`} className="hover:text-orange-400 font-lobster text-[30px]">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <hr className="border-t border-gray-300 sm:block hidden" />
    </header>
  );
};

export default Navbar;
