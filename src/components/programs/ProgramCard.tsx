import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Program } from '../../types/program';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Link
      to={`/programs/${program.id}`}
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden transform hover:-translate-y-1 block"
    >
      <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-prilo-blue-light text-prilo-blue text-sm font-medium rounded-full mb-3">
          {program.subject}
        </span>
        <h3 className="text-lg font-semibold text-prilo-dark mb-3">{program.title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Deadline: {program.deadline}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{program.location}</span>
        </div>
      </div>
    </Link>
  );
}