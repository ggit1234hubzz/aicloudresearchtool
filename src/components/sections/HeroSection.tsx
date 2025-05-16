import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=')]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cloud-Based AI <br className="hidden md:block" /> Research Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-lg">
              Upload files, select AI models, and visualize powerful insights with our state-of-the-art platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/dashboard" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/learn-more" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border-2 border-white font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">AI Analysis Visualization</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-sm">Processing complete</span>
                </div>
                <span className="text-sm">12 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;