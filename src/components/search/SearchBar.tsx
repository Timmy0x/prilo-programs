import React, { useState, useEffect } from 'react';
import { Search, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export function SearchBar({ onSearch, initialQuery = '' }: SearchBarProps) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(initialQuery);
  
  useEffect(() => {
    setSearchValue(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchValue(query);
    onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  return (
    <div className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-3xl mx-auto relative">
        <button
          onClick={() => navigate('/')}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-prilo-blue transition-colors"
        >
          <Home className="h-5 w-5" />
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          placeholder="Search programs, competitions, or scholarships..."
          className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-prilo-blue focus:border-transparent"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Search className="text-gray-400 h-5 w-5" />
        </div>
      </div>
    </div>
  );
}