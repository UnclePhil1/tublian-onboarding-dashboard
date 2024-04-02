// components/Legend.tsx
import React from 'react';

interface LegendItem {
  label: string;
  color: string;
}

// array for the bie chart Image consisting of Male, Female, & others.
const items: LegendItem[] = [
  { label: 'Male', color: 'bg-[#283350]' },
  { label: 'Female', color: 'bg-[#0FA44A]' },
  { label: 'Other', color: 'bg-[#FFF854]' },
];

const Legend: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 py-2">
      {/* Mapping out the items array */}
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className={`${item.color} w-3 h-3 rounded-full inline-block mr-2`} aria-hidden="true"></span>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
