import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://via.placeholder.com/300x200?text=Headphones',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 59.99,
      image: 'https://via.placeholder.com/300x200?text=Speaker',
    },
    {
      id: 4,
      name: 'Phone Case',
      price: 24.99,
      image: 'https://via.placeholder.com/300x200?text=Phone+Case',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to SimpleShop</h1>
        
        {/* Hero Banner (Simple Version) */}
        <div className="bg-blue-600 text-white p-8 rounded-lg mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Summer Sale!</h2>
          <p className="mb-4">Up to 50% off on selected items</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-medium">
            Shop Now
          </button>
        </div>
        
        {/* Products Grid */}
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;