import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Silk Shine Shampoo',
    price: 24.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Repair & Restore Mask',
    price: 34.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Growth Serum',
    price: 44.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#FF1493] px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick View
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FF1493] text-[#FF1493]" />
                  ))}
                </div>
                <p className="text-[#FF1493] font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}