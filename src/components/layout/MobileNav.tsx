import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Compass, Trophy, GraduationCap, Award } from 'lucide-react';
import { Logo } from '../shared/Logo';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 px-4 flex items-center justify-between z-50">
        <Logo mobile />
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-600 hover:text-prilo-blue transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40">
          <nav className="p-4 space-y-2">
            <NavLink
              to="/"
              onClick={toggleMenu}
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
              onClick={toggleMenu}
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
              onClick={toggleMenu}
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
              onClick={toggleMenu}
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
          </nav>
        </div>
      )}
    </div>
  );
}