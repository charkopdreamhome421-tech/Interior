"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-dark"
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
