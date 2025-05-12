import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, would send to backend API
      setIsSubmitted(true);
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 bg-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Newsletter
          </h2>
          
          <p className="text-indigo-200 mb-8 text-lg">
            Join our community to receive exclusive offers, new product alerts, and style tips delivered straight to your inbox.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>Your subscription has been confirmed. You've been added to our list and will hear from us soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none focus:outline-none text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-3 rounded-r-md sm:rounded-l-none transition duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-indigo-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;