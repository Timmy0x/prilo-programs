import React from 'react';
import { ProgramCard } from './ProgramCard';
import { programs as allPrograms } from '../../data/programs';

interface ProgramGridProps {
  category?: 'competition' | 'program' | 'scholarship';
  searchQuery?: string;
  selectedInterests?: string[];
}

export function ProgramGrid({ category, searchQuery = '', selectedInterests = [] }: ProgramGridProps) {
  const filteredPrograms = allPrograms.filter(program => {
    const matchesCategory = !category || program.type === category;
    const matchesSearch = !searchQuery || 
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInterests = selectedInterests.length === 0 || 
      program.interests.some(interest => selectedInterests.includes(interest));
    
    return matchesCategory && matchesSearch && matchesInterests;
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
          {filteredPrograms.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No programs found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}