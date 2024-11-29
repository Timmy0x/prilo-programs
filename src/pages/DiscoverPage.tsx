import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { InterestSelector } from '../components/home/InterestSelector';
import { ProgramGrid } from '../components/programs/ProgramGrid';
import { SearchBar } from '../components/search/SearchBar';
import { useEffect } from 'react';

export function DiscoverPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [showSearch, setShowSearch] = useState(!!searchQuery);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'Discover Academic Opportunities | Prilo';
  }, []);

  useEffect(() => {
    const query = searchParams.get('q');
    const interests = searchParams.get('interests');
    
    if (query) {
      setSearchQuery(query);
      setShowSearch(true);
    }
    
    if (interests) {
      setSelectedInterests(interests.split(','));
      setShowSearch(true);
    }
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearch(true);
    
    const interests = selectedInterests.length > 0 ? selectedInterests.join(',') : null;
    
    if (query || interests) {
      setSearchParams({
        ...(query && { q: query }),
        ...(interests && { interests })
      });
    } else {
      setSearchParams({});
      setShowSearch(false);
    }
  };

  const handleInterestChange = (interests: string[]) => {
    setSelectedInterests(interests);
    const params: { q?: string; interests?: string } = {};
    if (searchQuery) params.q = searchQuery;
    if (interests.length > 0) params.interests = interests.join(',');
    setSearchParams(params);
    setShowSearch(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {showSearch ? (
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
      ) : (
        <Hero />
      )}
      <InterestSelector
        selectedInterests={selectedInterests}
        onInterestChange={handleInterestChange}
        animate={!showSearch}
        constrained={!showSearch}
      />
      {showSearch && (
        <ProgramGrid
          searchQuery={searchQuery}
          selectedInterests={selectedInterests}
        />
      )}
    </div>
  );
}