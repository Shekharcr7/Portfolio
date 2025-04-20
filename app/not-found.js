"use client";

import React from "react";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
            404
          </h1>
        </div>

        {/* Error icon and message */}
        <div className="mb-6">
          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-sm mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-32"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors min-w-32"
          >
            <Home size={20} />
            Home
          </button>
        </div>
        
        {/* Simple decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-violet-300" />
          <div className="w-2 h-2 rounded-full bg-pink-300" />
          <div className="w-2 h-2 rounded-full bg-orange-300" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;