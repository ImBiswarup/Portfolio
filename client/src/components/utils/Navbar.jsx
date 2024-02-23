import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming you are using react-router-dom

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-white' : 'text-gray-400';
    };

    return (
        <nav className='sticky top-0'>
            <header className="bg-gray-900 text-white body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end">
                        <Link to="/" className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/')}`}>Home</Link>
                        <Link to="/about" className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/about')}`}>About</Link>
                        <Link to="/projects" className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/projects')}`}>Projects</Link>
                        <Link to="/contact" className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/contact')}`}>Get in touch</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:scale-125 transition-all">Log In
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;
