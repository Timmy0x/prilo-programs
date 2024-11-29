import React from 'react';
import { Calendar, MapPin, Globe, ExternalLink, Trophy, Clock, DollarSign, ArrowLeft } from 'lucide-react';
import { Program } from '../../types/program';
import { programs } from '../../data/programs';
import { ShareButton } from '../shared/ShareButton';
import { useNavigate } from 'react-router-dom';

interface ProgramDetailsProps {
  program: Program;
}

export function ProgramDetails({ program }: ProgramDetailsProps) {
  const navigate = useNavigate();
  const shareUrl = `${window.location.origin}/programs/${program.id}`;
  const similarPrograms = programs
    .filter(p => 
      p.id !== program.id && 
      (p.subject === program.subject || 
       p.interests.some(i => program.interests.includes(i)))
    )
    .slice(0, 3);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="flex-1 max-w-4xl px-4 sm:px-8 py-8 sm:py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-600 hover:text-prilo-blue bg-white border border-gray-200 rounded-lg hover:bg-gray-50 mb-8 transition-all"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
          Back
        </button>

        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-8" 
        />
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 text-prilo-blue text-sm font-medium rounded-full mb-3">
              {program.subject}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                <span>Deadline: {program.deadline}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{program.location}</span>
              </div>
            </div>
          </div>
          
          <ShareButton url={shareUrl} title={program.title} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-2 text-gray-600 mb-1">
              <Trophy className="h-4 w-4" />
              <span className="text-sm font-medium">Competitiveness</span>
            </div>
            <div className={`text-lg font-semibold ${
              program.competitiveness === 'High' ? 'text-red-600' :
              program.competitiveness === 'Medium' ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {program.competitiveness}
            </div>
          </div>
          
          {program.acceptanceRate && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <div className="h-4 w-4 rounded-full border-2 border-current" />
                <span className="text-sm font-medium">Acceptance Rate</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{program.acceptanceRate}</div>
            </div>
          )}
          
          {program.duration && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Duration</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{program.duration}</div>
            </div>
          )}
          
          {program.stipend && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm font-medium">Stipend</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{program.stipend}</div>
            </div>
          )}
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 mb-8">{program.description}</p>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {program.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {program.websiteUrl && (
            <a
              href={program.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-5 w-5 mr-2" />
              Visit Website
            </a>
          )}
          {program.applicationUrl && (
            <a
              href={program.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-prilo-blue rounded-lg text-white hover:bg-prilo-blue-hover transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Apply Now
            </a>
          )}
        </div>
      </div>
      
      <div className="w-full lg:w-80 p-8 border-t lg:border-l lg:border-t-0 border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Similar Programs</h2>
        <div className="space-y-6">
          {similarPrograms.map(program => (
            <div key={program.id} className="group">
              <img src={program.image} alt={program.title} className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-medium text-gray-900 group-hover:text-prilo-blue transition-colors">
                <a href={`/programs/${program.id}`}>{program.title}</a>
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{program.description}</p>
            </div>
          ))}
          {similarPrograms.length === 0 && (
            <p className="text-gray-500 text-center">No similar programs found</p>
          )}
        </div>
      </div>
    </div>
  );
}