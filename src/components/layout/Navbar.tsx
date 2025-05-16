import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, User } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isHomePage 
          ? isScrolled 
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <div className="bg-primary rounded-lg p-1.5 mr-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${
                isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
              }`}>
                CloudAI
              </span>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isHomePage && !isScrolled 
                  ? 'text-white hover:bg-primary-dark' 
                  : 'text-gray-500 hover:text-gray-600 hover:bg-gray-100'
              }`}
              onClick={toggleMenu}
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'text-blue-100 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/models" 
              className={`text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'text-blue-100 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Models
            </Link>
            <Link 
              to="/docs" 
              className={`text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'text-blue-100 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Documentation
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'text-blue-100 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Pricing
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link 
              to="/login" 
              className={`whitespace-nowrap text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'text-blue-100 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              } mr-4`}
            >
              Sign in
            </Link>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<User className="h-4 w-4" />}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'fixed inset-0 z-50 overflow-y-auto' : 'hidden'
        } md:hidden`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
        <div className="relative bg-white h-full w-64 max-w-sm">
          <div className="p-5 border-b border-gray-200 flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-primary rounded-lg p-1.5 mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">CloudAI</span>
            </Link>
            <button
              type="button"
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="p-5 space-y-4">
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/models"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Models
            </Link>
            <Link
              to="/docs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;