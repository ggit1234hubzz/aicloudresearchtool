import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="bg-primary rounded-lg p-1.5 mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CloudAI</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Empowering research with advanced AI tools for data analysis and visualization.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/features" className="text-sm text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-sm text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/models" className="text-sm text-gray-400 hover:text-white">
                    AI Models
                  </Link>
                </li>
                <li>
                  <Link to="/roadmap" className="text-sm text-gray-400 hover:text-white">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/docs" className="text-sm text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/tutorials" className="text-sm text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/api" className="text-sm text-gray-400 hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/legal/privacy" className="text-sm text-gray-400 hover:text-white">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CloudAI Research Tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;