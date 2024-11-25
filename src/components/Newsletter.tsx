import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <section className="bg-[#FF1493]/5 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Pony Club</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Suscribete y recibe un 15% de descuento en nuevos productos
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#FF1493]"
            required
          />
          <button
            type="submit"
            className="bg-[#FF1493] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#FF1493]/90 transition-colors"
          >
            <span>ingresa! 🦄</span>
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}