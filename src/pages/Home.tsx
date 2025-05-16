import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Brain, Cloud, FileUp } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import FeatureCard from '../components/ui/FeatureCard';

const features = [
  {
    title: 'Upload Any File',
    description: 'Support for documents, images, audio, and more. Our system automatically processes your files.',
    icon: <FileUp className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Advanced AI Models',
    description: 'Access to cutting-edge AI models for analysis, classification, and insight generation.',
    icon: <Brain className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Visual Results',
    description: 'Interactive dashboards and visualizations to help you understand complex AI outputs.',
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly connect with major cloud AI providers for enhanced processing capabilities.',
    icon: <Cloud className="h-8 w-8 text-primary" />,
  },
];

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Powerful AI Research Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform provides everything you need to analyze, understand, and visualize your data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your AI research?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Begin analyzing your data with our powerful AI tools and gain valuable insights today.
          </p>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-opacity-90 transition-all duration-200"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;