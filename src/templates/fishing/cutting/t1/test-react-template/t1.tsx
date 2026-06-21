import React from 'react';

export default function PremiumPlumber() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Pro Plumber React Template</h1>
        <p className="text-lg text-slate-600 mb-8">
          This is a test React component generated specifically for you to upload via the new Admin Dashboard!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Book Service Now
        </button>
      </div>
    </div>
  );
}
