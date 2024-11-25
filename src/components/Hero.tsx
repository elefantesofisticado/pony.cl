import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80"
          alt="Beautiful woman with long, healthy hair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/40" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock Your Hair's
            <span className="text-[#FF1493]"> True Potential</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Premium haircare products designed to transform your locks into the mane of your dreams.
          </p>
          <button className="bg-[#FF1493] text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-[#FF1493]/90 transition-colors">
            <span>Shop Now</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}