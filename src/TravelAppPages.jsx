import React from 'react';

export default function FurnitureHomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-6">
        <div>
          <p className="text-sm text-gray-500">Location</p>
          <h2 className="font-semibold text-lg">New York, USA ▼</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 10-14 0v4l-1.405 1.405A2.032 2.032 0 003 18h18a2.032 2.032 0 00.405-.595L20 17h-5z" /></svg>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 px-4 mt-4">
        <input
          type="text"
          placeholder="Search Furniture"
          className="flex-grow bg-gray-100 p-3 rounded-xl focus:outline-none"
        />
        <button className="p-3 bg-gray-800 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
        </button>
      </div>

      {/* Banner */}
      <div className="px-4 mt-6">
        <div className="bg-gray-100 p-4 rounded-xl flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">New Collection</h3>
            <p className="text-sm text-gray-500">Discount 50% for the first transaction</p>
            <button className="mt-2 px-4 py-1 bg-gray-800 text-white text-sm rounded-full">Shop Now</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1582582494700-1f0d7bf4e0e0?w=100&q=80"
            alt="chair"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Category</h4>
          <button className="text-sm text-gray-500">See All</button>
        </div>
        <div className="flex gap-6 mt-4 overflow-x-auto">
          {['Sofa', 'Chair', 'Lamp', 'Cupboard'].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[70px]">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <img src={`https://source.unsplash.com/40x40/?${item.toLowerCase()}`} alt={item} className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      <div className="px-4 mt-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Flash Sale</h4>
          <p className="text-sm text-gray-500">Closing in : 02 : 12 : 56</p>
        </div>

        <div className="flex gap-3 mt-4">
          {['All', 'Newest', 'Popular', 'Bedroom'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-4 py-1 rounded-full text-sm border ${
                tag === 'Newest' ? 'bg-gray-800 text-white' : 'border-gray-300 text-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-xl border p-2 relative">
              <img
                src={`https://source.unsplash.com/featured/?furniture,chair,style${i}`}
                alt="product"
                className="w-full h-32 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
                ♡
              </button>
              <p className="mt-2 text-sm font-medium">Stylish Chair {i}</p>
              <p className="text-sm text-gray-500">$120.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2">
        {['home', 'cart', 'heart', 'chat', 'user'].map((icon, idx) => (
          <button key={idx} className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
