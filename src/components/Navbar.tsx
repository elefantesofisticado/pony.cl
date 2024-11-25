import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      {/* Promo Banner */}
      <div className="bg-[#FF1493] text-white text-center py-2 text-sm">
        20% EN TU PRIMERA COMPRA • ENVÍO GRATIS POR COMPRAS SOBRE $50+ 
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 font-serif">
            <h1 className="text-2xl font-bold text-[#FF1493]">PELO DE PONY</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#FF1493]">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#FF1493]">Shop</a>
            <a href="#" className="text-gray-700 hover:text-[#FF1493]">Nuevos Productos</a>
            <a href="#" className="text-gray-700 hover:text-[#FF1493]">MAS VENDIDO</a>
            <a href="#" className="text-gray-700 hover:text-[#FF1493]">About</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:text-[#FF1493]">
              <Search size={20} />
            </button>
            <button className="p-1 hover:text-[#FF1493]">
              <Heart size={20} />
            </button>
            <button className="p-1 hover:text-[#FF1493] relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-[#FF1493] text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF1493]">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF1493]">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF1493]">NUEVOS PRODUCTOS</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF1493]">MAS VENDIDOS</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF1493]">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}