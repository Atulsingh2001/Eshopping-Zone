export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
}