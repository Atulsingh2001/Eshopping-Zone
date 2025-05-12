import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-100 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-indigo-50 opacity-50 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Discover the Perfect Products for Your Lifestyle
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop our curated collection of premium products designed to enhance your everyday experiences. From electronics to fashion, we have everything you need.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition duration-300 font-medium"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/products?category=featured"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 py-3 px-6 rounded-md transition duration-300 font-medium"
              >
                View Featured
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Person shopping online"
                className="w-full h-auto"
              />
              
              {/* Promotional Banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 to-transparent p-6">
                <div className="text-white">
                  <p className="font-semibold text-sm uppercase tracking-wider mb-1">Limited Time Offer</p>
                  <p className="text-2xl font-bold mb-2">Up to 40% Off</p>
                  <p className="text-sm opacity-80">On selected electronics & accessories</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;