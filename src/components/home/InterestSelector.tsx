import React from 'react';
import { motion } from 'framer-motion';
import { interests } from '../../data/interests';

interface InterestSelectorProps {
  selectedInterests: string[];
  onInterestChange: (interests: string[]) => void;
  animate?: boolean;
  constrained?: boolean;
}

export function InterestSelector({ 
  selectedInterests, 
  onInterestChange, 
  animate = false,
  constrained = false 
}: InterestSelectorProps) {
  const toggleInterest = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      onInterestChange(selectedInterests.filter(id => id !== interestId));
    } else {
      onInterestChange([...selectedInterests, interestId]);
    }
  };

  const ButtonComponent = animate ? motion.button : 'button';

  return (
    <div className="py-4">
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${constrained ? 'max-w-4xl' : ''}`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {interests.map((interest, index) => (
            <ButtonComponent
              onClick={() => toggleInterest(interest.id)}
              {...(animate ? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: index * 0.1 }
              } : {})}
              key={interest.id}
              className={`p-4 rounded-lg transition-all flex items-center space-x-3 group w-full ${
                selectedInterests.includes(interest.id) 
                  ? 'ring-2 ring-prilo-blue text-prilo-blue bg-white' 
                  : 'ring-1 ring-gray-200 text-gray-700 hover:ring-prilo-blue/30 bg-white'
              }`}
            >
              <span className="text-2xl">{interest.icon}</span>
              <span className="text-sm font-medium">{interest.label}</span>
            </ButtonComponent>
          ))}
        </div>
      </div>
    </div>
  );
}