// components/VisitorsTable.tsx
import React from 'react';

interface VisitorData {
  country: string;
  visitors: number;
  change: number; // Percentage change
}

const data: VisitorData[] = [
  { country: 'Nigeria', visitors: 5430, change: 2.2 },
  { country: 'Germany', visitors: 2610, change: 1.2 },
  { country: 'Switzerland', visitors: 1925, change: 1.1 },
  { country: 'Iraq', visitors: 1571, change: 0.8 },
];

const VisitorsTable: React.FC = () => {
  return (
    <div className="w-full overflow-y-auto scroll-smooth custom-scrollbar">
      <div className="text-lg font-semibold mb-2">Visitors</div>
      <table className="min-w-full">
        <thead className ='border-b border-gray-300'>
          <tr>
            <th className="text-left text-sm font-medium text-gray-900 px-6 py-4">Country</th>
            <th className="text-right text-sm font-medium text-gray-900 px-6 py-4">Visitors</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.country}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right flex flex-col">
                <span className="font-medium">{item.visitors.toLocaleString()}</span>
                <span className={`ml-2 text-[10px] ${(item.change > 0) ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change > 0 ? '▲' : '▼'} {item.change}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorsTable;
