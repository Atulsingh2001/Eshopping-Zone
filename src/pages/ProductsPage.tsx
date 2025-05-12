import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  // Get category and search from URL params
  const categoryParam = searchParams.get('category')?.toLowerCase();
  const searchQuery = searchParams.get('search')?.toLowerCase();

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam || null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');

  useEffect(() => {
    // Update the selected category if the URL param changes
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);
    document.title = 'ShopHub - Products';

    // Filter products based on the selected filters
    let result = [...products];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'featured') {
        result = result.filter(product => product.featured);
      } else {
        result = result.filter(product => product.category.toLowerCase() === selectedCategory);
      }
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery) || 
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
      );
    }

    // Filter by price range
    result = result.filter(product => 
      (product.discountPrice || product.price) >= priceRange[0] && 
      (product.discountPrice || product.price) <= priceRange[1]
    );

    // Filter by rating
    if (selectedRating) {
      result = result.filter(product => product.rating >= selectedRating);
    }

    // Apply sorting
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    } else if (sortBy === 'name-a-z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-z-a') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'newest') {
      // In a real app, this would sort by date
      result = [...result]; // In this mock, we don't change order
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    // If sortBy is 'featured', we don't need to sort as it's the default order

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, priceRange, selectedRating, sortBy]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 500]);
    setSelectedRating(null);
    setSortBy('featured');
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Mobile filter toggle */}
          <button 
            className="md:hidden w-full flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm mb-4"
            onClick={toggleFilters}
          >
            <Filter size={20} />
            <span>Show Filters</span>
          </button>

          {/* Sidebar Filters (Desktop and Mobile) */}
          <div className={`${
            showFilters ? 'block fixed inset-0 z-50 bg-white md:bg-transparent md:static md:inset-auto' : 'hidden md:block'
          } md:w-1/4 p-4 bg-white rounded-lg shadow-sm`}>
            {/* Mobile filter header */}
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={toggleFilters} className="p-1">
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Categories</h3>
                {selectedCategory && (
                  <button 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                    onClick={() => handleCategoryChange(null)}
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                <div
                  className={`cursor-pointer p-2 rounded-md ${
                    selectedCategory === null ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleCategoryChange(null)}
                >
                  All Products
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-md ${
                    selectedCategory === 'featured' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleCategoryChange('featured')}
                >
                  Featured Products
                </div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`cursor-pointer p-2 rounded-md ${
                      selectedCategory === category.name.toLowerCase() ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategoryChange(category.name.toLowerCase())}
                  >
                    {category.name} ({category.productCount})
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Price Range</h3>
                {(priceRange[0] > 0 || priceRange[1] < 500) && (
                  <button 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                    onClick={() => setPriceRange([0, 500])}
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className="px-2">
                <div className="flex justify-between mb-2 text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Rating</h3>
                {selectedRating && (
                  <button 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                    onClick={() => handleRatingChange(null)}
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <div
                    key={rating}
                    className={`cursor-pointer p-2 rounded-md flex items-center ${
                      selectedRating === rating ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleRatingChange(rating)}
                  >
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>& Up</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 flex items-center justify-center space-x-2"
            >
              <SlidersHorizontal size={18} />
              <span>Clear All Filters</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4">
            {/* Filter Results Header */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-xl font-bold">
                    {selectedCategory 
                      ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) 
                      : searchQuery 
                      ? "Search Results" 
                      : "All Products"}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Showing {filteredProducts.length} products
                  </p>
                </div>
                <div className="w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                    <option value="name-z-a">Name: Z to A</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any products matching your current filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;