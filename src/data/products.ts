import { Product, Category } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
    price: 299.99,
    discountPrice: 249.99,
    images: [
      "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    description: "Track your fitness goals, receive notifications, and more with our waterproof smart watch. Features include heart rate monitoring, GPS, and a 5-day battery life.",
    price: 199.99,
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 97
  },
  {
    id: 3,
    name: "Handcrafted Leather Wallet",
    description: "This handcrafted leather wallet combines style and functionality with multiple card slots, a billfold compartment, and RFID blocking technology.",
    price: 59.99,
    images: [
      "https://images.pexels.com/photos/869242/pexels-photo-869242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2079172/pexels-photo-2079172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "accessories",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 56
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these UV-protected designer sunglasses featuring a lightweight frame and polarized lenses.",
    price: 129.99,
    discountPrice: 99.99,
    images: [
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "accessories",
    featured: true,
    inStock: true,
    rating: 4.3,
    reviewCount: 42
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    description: "Feel good inside and out with our 100% organic cotton t-shirt. Soft, breathable, and ethically produced for everyday comfort.",
    price: 29.99,
    images: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "clothing",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 78
  },
  {
    id: 6,
    name: "Ultra-slim Laptop Backpack",
    description: "Carry your tech essentials in style with this water-resistant backpack featuring padded compartments for laptops up to 15 inches and multiple organization pockets.",
    price: 79.99,
    images: [
      "https://images.pexels.com/photos/936098/pexels-photo-936098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "accessories",
    featured: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 34
  },
  {
    id: 7,
    name: "Wireless Bluetooth Speaker",
    description: "Take your music anywhere with this compact yet powerful Bluetooth speaker featuring 12 hours of playback time and waterproof design.",
    price: 89.99,
    discountPrice: 69.99,
    images: [
      "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.4,
    reviewCount: 89
  },
  {
    id: 8,
    name: "Premium Yoga Mat",
    description: "Enhance your yoga practice with our eco-friendly, non-slip yoga mat that provides optimal cushioning and support for all poses.",
    price: 49.99,
    images: [
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "fitness",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 41
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productCount: 24
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productCount: 36
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productCount: 19
  },
  {
    id: 4, 
    name: "Fitness",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productCount: 12
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
}