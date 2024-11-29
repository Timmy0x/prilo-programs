import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  mobile?: boolean;
}

export function Logo({ mobile = false }: LogoProps) {
  return (
    <Link to="/" className="block">
      {mobile ? (
        <div className="flex items-center space-x-3">
          <img src="https://app.prilo.ai/static/images/logo.png" alt="Prilo" className="h-8 w-8" />
          <span className="text-xl font-bold text-[#1E2B3A]">Prilo</span>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img src="https://app.prilo.ai/static/images/logo.png" alt="Prilo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-[#1E2B3A]">Prilo</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Discover academic opportunities tailored to your interests
          </p>
        </div>
      )}
    </Link>
  );
}