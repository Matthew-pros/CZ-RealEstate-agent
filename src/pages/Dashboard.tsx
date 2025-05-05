import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuth } from '../hooks/useAuth';
import { useListings } from '../hooks/useListings';
import PropertyCard from '../components/properties/PropertyCard';
import ChartCard from '../components/dashboard/ChartCard';
import { ArrowUpRight, ArrowDownRight, Layers, Bell, TrendingUp, Filter } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { listings } = useListings();
  const [timeRange, setTimeRange] = useState('30d');
  
  // Mock data for charts
  const priceData = [
    { month: 'Jan', avg: 6200000, this: 6500000 },
    { month: 'Feb', avg: 6250000, this: 6400000 },
    { month: 'Mar', avg: 6300000, this: 6300000 },
    { month: 'Apr', avg: 6350000, this: 6100000 },
    { month: 'May', avg: 6400000, this: 5900000 },
    { month: 'Jun', avg: 6450000, this: 5800000 },
    { month: 'Jul', avg: 6500000, this: 5700000 },
  ];
  
  const discountData = [
    { name: '0-5%', value: 10 },
    { name: '5-10%', value: 25 },
    { name: '10-15%', value: 35 },
    { name: '15-20%', value: 20 },
    { name: '>20%', value: 10 },
  ];
  
  const locationData = [
    { name: 'Prague', value: 45 },
    { name: 'Brno', value: 25 },
    { name: 'Ostrava', value: 15 },
    { name: 'Plzeň', value: 10 },
    { name: 'Others', value: 5 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  
  // Recent listings - use 3 most recent
  const recentListings = [...listings]
    .sort((a, b) => a.daysAgo - b.daysAgo)
    .slice(0, 3);
  
  // Mock stats
  const stats = [
    { 
      title: 'Total Savings', 
      value: '4,328,500 Kč', 
      change: '+12.5%', 
      trend: 'up',
      icon: <TrendingUp size={20} />
    },
    { 
      title: 'Properties Found', 
      value: '142', 
      change: '+8 this week', 
      trend: 'up',
      icon: <Layers size={20} />
    },
    { 
      title: 'Avg. Discount', 
      value: '14.2%', 
      change: '+2.3%', 
      trend: 'up',
      icon: <ArrowDownRight size={20} />
    },
    { 
      title: 'Active Alerts', 
      value: '8', 
      change: '2 new matches', 
      trend: 'up',
      icon: <Bell size={20} />
    },
  ];
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard Access</h1>
          <p className="text-gray-600 mb-8">
            Please login or create an account to access your personalized dashboard.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="/login"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Your real estate market insights and opportunities
          </p>
        </div>
        
        {/* Time range selector */}
        <div className="mb-6 flex justify-end">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                  timeRange === range
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
        
        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard title="Property Price Trends">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `${value.toLocaleString()} Kč`} />
                <Legend />
                <Line type="monotone" dataKey="avg" stroke="#8884d8" name="Market Average" />
                <Line type="monotone" dataKey="this" stroke="#82ca9d" name="Your Opportunities" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ChartCard title="Discount Distribution">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={discountData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {discountData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} properties`} />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
            
            <ChartCard title="Locations">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
        
        {/* Recent opportunities */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Opportunities</h2>
            <a href="/listings" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
        
        {/* Saved searches & alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Saved Searches & Alerts</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
              <Filter size={16} className="mr-1" /> Create New
            </button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {i === 1 ? 'Prague Apartments' : i === 2 ? 'Brno Houses' : 'Investment Properties'}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {i === 1
                        ? 'Apartments in Prague, 2+kk and larger, max 8M Kč'
                        : i === 2
                        ? 'Houses in Brno, min 100m², max 10M Kč'
                        : 'Properties with ROI >5%, max 6M Kč'}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="flex h-3 w-3 relative mr-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${i === 1 ? 'bg-green-400' : 'bg-gray-400'} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${i === 1 ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                    </span>
                    <span className={`text-sm ${i === 1 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {i === 1 ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex text-sm">
                  <span className="text-gray-500 mr-4">
                    Created: {i === 1 ? '2 days ago' : i === 2 ? '1 week ago' : '3 weeks ago'}
                  </span>
                  <span className="text-gray-500">
                    {i === 1 ? '3 matches' : i === 2 ? '0 matches' : '9 matches'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;