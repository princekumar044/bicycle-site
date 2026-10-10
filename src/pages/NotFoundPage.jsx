import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 overflow-hidden">
      {/* Eyes */}
      <div className="relative mb-6 animate-pulse">
        <div className="flex space-x-6">
          {/* Left Eye */}
          <div className="w-20 h-24 bg-white rounded-full relative shadow-lg overflow-hidden">
            <div className="w-4 h-4 bg-black rounded-full absolute animate-ping left-5 top-6"></div>
          </div>
          {/* Right Eye */}
          <div className="w-20 h-24 bg-white rounded-full relative shadow-lg overflow-hidden">
            <div className="w-4 h-4 bg-black rounded-full absolute animate-ping left-5 top-6"></div>
          </div>
        </div>
      </div>

      {/* 404 Text */}
      <h1 className="text-5xl font-extrabold text-gray-200 mb-2 animate-fadeIn">404</h1>
      <p className="text-lg text-gray-400 mb-8 tracking-wide animate-fadeIn delay-200">Page Not Found</p>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition duration-300 animate-slideUp delay-500"
      >
        GO BACK
      </button>
    </div>
  );
};

export default NotFoundPage;
