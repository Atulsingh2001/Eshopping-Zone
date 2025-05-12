export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          
          {/* Logo and Name */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h1 className="text-2xl font-bold text-blue-600 ml-2">SimpleShop</h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex-grow max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="mt-4 hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Electronics</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Clothing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home & Kitchen</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Deals</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}