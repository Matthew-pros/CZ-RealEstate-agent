import React, { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ChartCard;