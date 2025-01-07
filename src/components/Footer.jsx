import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 px-4 md:px-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-12 md:mb-20">
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#" className="text-lg text-emerald-900 font-lato hover:text-emerald-700">About Us</a>
            <a href="#" className="text-lg text-emerald-900 font-lato hover:text-emerald-700">Our Mission</a>
            <a href="#" className="text-lg text-emerald-900 font-lato hover:text-emerald-700">Join Us on LinkedIn</a>
            <a href="#" className="text-lg text-emerald-900 font-lato hover:text-emerald-700">Contact Us</a>
          </nav>
          
          <div className="flex gap-4">
            <a href="#" className="text-emerald-900 hover:text-emerald-700">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-emerald-900 hover:text-emerald-700">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-emerald-900 hover:text-emerald-700">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-emerald-900 hover:text-emerald-700">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-emerald-900 hover:text-emerald-700">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <p className="text-sm font-lato text-center">
              <span className="text-lime-600 font-bold">Project of Atharva 2024.</span>
              <span className="text-emerald-900 ml-1">All rights reserved.</span>
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-sm text-emerald-900 font-lato hover:text-emerald-700">Privacy Policy</a>
              <a href="#" className="text-sm text-emerald-900 font-lato hover:text-emerald-700">Terms of Service</a>
              <a href="#" className="text-sm text-emerald-900 font-lato hover:text-emerald-700">Cookie Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}