import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { ProgramGrid } from '../components/programs/ProgramGrid';
import { SearchBar } from '../components/search/SearchBar';
import { InterestSelector } from '../components/home/InterestSelector';

export function CompetitionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="relative space-y-4">
        <SearchBar onSearch={setSearchQuery} />
        <div className="px-8 pt-4">
          <div className="flex items-center space-x-4">
            <Trophy className="h-8 w-8 text-prilo-blue" />
            <h1 className="text-3xl font-bold text-gray-900">Academic Competitions</h1>
          </div>
        </div>
        <InterestSelector
          selectedInterests={selectedInterests}
          onInterestChange={setSelectedInterests}
          animate={false}
        />
        <ProgramGrid 
          category="competition"
          searchQuery={searchQuery}
          selectedInterests={selectedInterests}
        />
      </div>
    </div>
  );
}