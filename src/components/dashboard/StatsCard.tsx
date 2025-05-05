import React from 'react';

interface StatProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

interface StatsCardProps {
  stat: StatProps;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{stat.title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
        </div>
        <div className={`rounded-full p-2 ${
          stat.trend === 'up' ? 'bg-green-100 text-green-600' :
          stat.trend === 'down' ? 'bg-red-100 text-red-600' :
          'bg-gray-100 text-gray-600'
        }`}>
          {stat.icon}
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${
          stat.trend === 'up' ? 'text-green-600' :
          stat.trend === 'down' ? 'text-red-600' :
          'text-gray-600'
        }`}>
          {stat.change}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;