import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path, hash = '') => {
    if (location.pathname !== '/' && path === '/') {
      navigate(path + hash);
    } else if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 p-2">
      <div className="mx-auto px-2">
        <div className="flex-1 h-auto md:h-[51px] px-4 py-2 md:py-4 bg-emerald-50 rounded-[32px] md:rounded-[64px]">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center">
            <nav className="flex items-center gap-4">
              <button onClick={() => handleNavigation('/')} className="px-2 text-emerald-900 text-sm font-lato hover:text-emerald-700">Home</button>
              <button onClick={() => handleNavigation('/plant-form')} className="px-2 text-emerald-900 text-sm font-lato hover:text-emerald-700">Plant Form</button>
            </nav>
            
            <div className="flex items-center gap-2">
              <img src={logo} alt="Plant Cultivation Hub Logo" className="w-8 h-8" />
              <span className="text-emerald-900 text-base font-lato">Plant Cultivation Hub</span>
            </div>
            
            <nav className="flex items-center gap-4">
              <button onClick={() => handleNavigation('/', '#about')} className="px-2 text-emerald-900 text-sm font-lato hover:text-emerald-700">About</button>
              <button onClick={() => handleNavigation('/', '#contact')} className="px-2 text-emerald-900 text-sm font-lato hover:text-emerald-700">Contact</button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Plant Cultivation Hub Logo" className="w-6 h-6" />
              <span className="text-emerald-900 text-sm font-lato">Plant Cultivation Hub</span>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-900 p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 px-2 md:hidden z-50">
            <div className="bg-emerald-50 rounded-lg py-4 shadow-lg">
              <nav className="flex flex-col">
                <button onClick={() => handleNavigation('/')} className="px-4 py-2 text-left text-emerald-900 text-sm font-lato hover:bg-emerald-100">Home</button>
                <button onClick={() => handleNavigation('/plant-form')} className="px-4 py-2 text-left text-emerald-900 text-sm font-lato hover:bg-emerald-100">Plant Form</button>
                <button onClick={() => handleNavigation('/', '#about')} className="px-4 py-2 text-left text-emerald-900 text-sm font-lato hover:bg-emerald-100">About</button>
                <button onClick={() => handleNavigation('/', '#contact')} className="px-4 py-2 text-left text-emerald-900 text-sm font-lato hover:bg-emerald-100">Contact</button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}