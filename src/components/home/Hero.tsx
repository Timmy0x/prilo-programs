import React, { useState } from 'react';
import { Search, Sparkles, Award, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-32 -left-12 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-prilo-blue mb-8">
          <Sparkles className="h-4 w-4 mr-2" />
          #1 Platform for Academic Opportunities
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-prilo-blue to-purple-600">
          Discover Your Perfect
          <br />
          Academic Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find competitions, summer programs, and scholarships tailored to your interests
        </p>
        
        <div className="max-w-2xl mx-auto relative mb-12">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="text-gray-400 h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search programs, competitions, or scholarships..."
            className="w-full px-4 py-4 pl-12 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-prilo-blue focus:border-transparent shadow-lg"
          />
          <button 
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-prilo-blue text-white rounded-full hover:bg-prilo-blue-hover transition-all hover:shadow-lg"
          >
            Search
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-prilo-blue" />
            <span className="text-gray-600">1000+ Programs</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-prilo-blue" />
            <span className="text-gray-600">500+ Universities</span>
          </div>
        </div>
      </div>
    </div>
  );
}