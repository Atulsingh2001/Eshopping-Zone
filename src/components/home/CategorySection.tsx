import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products across different categories to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1">
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-white text-sm opacity-90">{category.productCount} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;