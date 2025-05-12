import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);
    
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        document.title = `ShopHub - ${foundProduct.name}`;
      }
    }
    
    setLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-20 container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 flex flex-wrap">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-indigo-600">Home</Link>
              <svg className="mx-2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link to="/products" className="text-gray-500 hover:text-indigo-600">Products</Link>
              <svg className="mx-2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="text-gray-700 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Product Images */}
            <div className="md:w-1/2 p-6">
              <div className="mb-4 relative rounded-lg overflow-hidden bg-gray-100" style={{ height: '400px' }}>
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
                {product.discountPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white py-1 px-3 rounded-full text-sm font-bold">
                    SALE
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                      selectedImage === image ? 'border-indigo-600' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:border-l border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                {product.discountPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-indigo-600 mr-3">
                      ${product.discountPrice.toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-3 text-sm font-medium text-green-600">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <p className="text-gray-700 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <div className={`w-3 h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="mr-4 text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={decrementQuantity} 
                      className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button 
                      onClick={incrementQuantity} 
                      className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition duration-300 font-medium"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </button>
                  
                  <button className="flex items-center justify-center border border-gray-300 hover:border-gray-400 bg-white text-gray-700 py-3 px-6 rounded-md transition duration-300">
                    <Heart className="mr-2 h-5 w-5" />
                    <span className="hidden sm:inline">Wishlist</span>
                  </button>
                  
                  <button className="flex items-center justify-center border border-gray-300 hover:border-gray-400 bg-white text-gray-700 py-3 px-6 rounded-md transition duration-300">
                    <Share2 className="mr-2 h-5 w-5" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
              
              {/* Product Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Free Shipping</h4>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">2-Year Warranty</h4>
                    <p className="text-sm text-gray-600">Full coverage for peace of mind</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RotateCcw className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">30-Day Returns</h4>
                    <p className="text-sm text-gray-600">No questions asked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;