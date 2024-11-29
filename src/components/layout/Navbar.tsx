import React from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, Trophy, GraduationCap, Award, Sparkles, Instagram, Youtube, Video } from 'lucide-react';
import { Logo } from '../shared/Logo';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = '' }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-gray-100 flex flex-col ${className}`}>
      <div className="flex-none p-8 pb-6">
        <Logo />
        <div className="flex items-center gap-6 mt-6">
          <a 
            href="https://instagram.com/tryprilo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-prilo-blue transition-colors"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a 
            href="https://tiktok.com/@tryprilo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-prilo-blue transition-colors"
          >
            <Video className="h-7 w-7" />
          </a>
          <a 
            href="https://youtube.com/@tryprilo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-prilo-blue transition-colors"
          >
            <Youtube className="h-7 w-7" />
          </a>
        </div>
      </div>

      <div className="flex-1 space-y-1 px-6 mb-24">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? 'bg-blue-50 text-prilo-blue font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Compass className="h-5 w-5" />
          <span>Discover</span>
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? 'bg-blue-50 text-prilo-blue font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Trophy className="h-5 w-5" />
          <span>Competitions</span>
        </NavLink>
        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? 'bg-blue-50 text-prilo-blue font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <GraduationCap className="h-5 w-5" />
          <span>Programs</span>
        </NavLink>
        <NavLink
          to="/scholarships"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? 'bg-blue-50 text-prilo-blue font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Award className="h-5 w-5" />
          <span>Scholarships</span>
        </NavLink>
      </div>
      <div className="border-t border-gray-100">
        <div className="px-6 py-6">
          <div className="flex items-center space-x-2 text-prilo-blue mb-3">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Master DECA™ with AI</span>
          </div>
          <p className="text-base text-gray-600 mb-4">
            Get personalized AI tutoring and practice for DECA™
          </p>
          <a 
            href="https://prilo.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center px-4 py-3 bg-prilo-blue text-white rounded-lg hover:bg-prilo-blue-hover transition-all font-medium gap-2 text-base"
          >
            Try Prilo
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}