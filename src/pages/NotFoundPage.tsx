import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'ShopHub - Page Not Found';
  }, []);
  
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="text-center max-w-md">
          <h1 className="text-indigo-600 font-bold text-9xl">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you requested could not be found. Please check the URL or go back to the homepage.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition duration-300 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;