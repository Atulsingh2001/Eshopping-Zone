import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ShopHub - Your Cart';
  }, []);
  
  if (items.length === 0) {
    return (
      <div className="pt-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
              <ShoppingCart className="h-8 w-8 text-gray-500" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition duration-300 font-medium"
            >
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="lg:flex lg:gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 lg:mb-0">
              <div className="hidden md:grid md:grid-cols-5 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
                <div className="md:col-span-2">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Total</div>
              </div>
              
              {items.map((item) => (
                <div key={item.product.id} className="p-4 border-b border-gray-200 last:border-0">
                  <div className="md:grid md:grid-cols-5 md:gap-4 md:items-center">
                    {/* Product */}
                    <div className="md:col-span-2 flex items-center mb-4 md:mb-0">
                      <Link to={`/products/${item.product.id}`} className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="ml-4">
                        <Link to={`/products/${item.product.id}`} className="text-gray-900 font-medium hover:text-indigo-600">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          Category: {item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-gray-900 md:text-center flex justify-between md:block mb-3 md:mb-0">
                      <span className="md:hidden">Price:</span>
                      <span>${(item.product.discountPrice || item.product.price).toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:text-center flex justify-between md:block mb-3 md:mb-0">
                      <span className="md:hidden">Quantity:</span>
                      <div className="flex items-center md:justify-center">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)} 
                          className="p-1 rounded-md hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)} 
                          className="p-1 rounded-md hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="text-indigo-600 font-medium md:text-center flex justify-between md:block">
                      <span className="md:hidden">Total:</span>
                      <div className="flex items-center">
                        <span className="mr-3 md:mr-0">
                          ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.product.id)} 
                          className="text-red-500 hover:text-red-700 p-1 rounded-md hover:bg-gray-100 transition duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">
                    {totalPrice >= 50 ? 'Free' : '$4.99'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-indigo-600">
                    ${(totalPrice + (totalPrice >= 50 ? 0 : 4.99) + (totalPrice * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition duration-300 font-medium mb-4"
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/products" 
                className="w-full flex items-center justify-center border border-gray-300 hover:border-gray-400 bg-white text-gray-700 py-3 rounded-md transition duration-300"
              >
                Continue Shopping
              </Link>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold mb-2">Accepted Payment Methods</h3>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
              <h3 className="text-sm font-semibold mb-2">Need Help?</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline">Shipping Information</a>
                </p>
                <p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline">Returns & Exchanges</a>
                </p>
                <p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline">Contact Customer Support</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;