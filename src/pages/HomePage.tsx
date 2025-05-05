import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Bell, PieChart, Search, Shield } from 'lucide-react';
import HeroImage from '../components/home/HeroImage';
import TestimonialCard from '../components/home/TestimonialCard';
import PricingCard from '../components/subscription/PricingCard';
import { subscriptionPlans } from '../data/subscriptionPlans';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Bell className="w-8 h-8 text-primary-500" />,
      title: 'Real-time Alerts',
      description: 'Get instant notifications when underpriced properties hit the market, giving you the edge over other buyers.'
    },
    {
      icon: <Building className="w-8 h-8 text-primary-500" />,
      title: 'Cross-Platform Analysis',
      description: 'We compare listings across Sreality.cz and Bazos.cz to find the best deals that others might miss.'
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary-500" />,
      title: 'Market Insights',
      description: 'Access detailed analytics on price trends, property features, and location-based metrics.'
    },
    {
      icon: <Search className="w-8 h-8 text-primary-500" />,
      title: 'Smart Filters',
      description: 'Customize your search with advanced filters to find exactly what you\'re looking for.'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Verified Listings',
      description: 'Our system validates all properties to ensure you only see legitimate opportunities.'
    }
  ];

  const testimonials = [
    {
      name: 'Jan Novák',
      role: 'Real Estate Investor',
      content: 'I found a property 15% below market value within my first week using PropArb. The ROI on this subscription is incredible!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1'
    },
    {
      name: 'Eva Svobodová',
      role: 'First-time Homebuyer',
      content: 'As someone new to the real estate market, PropArb helped me understand pricing and find a great deal on my first apartment in Prague.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1'
    },
    {
      name: 'Martin Dvořák',
      role: 'Property Developer',
      content: 'The instant notifications have revolutionized how quickly we can respond to new opportunities. Well worth the Pro subscription.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Find Underpriced Real Estate Deals in Real Time
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                Our platform scans Czech real estate listings 24/7 to identify properties priced below market value, 
                giving you first access to the best investment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <Link
                  to="/register"
                  className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg text-center transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/listings"
                  className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white font-medium rounded-lg text-center transition-all flex items-center justify-center"
                >
                  Browse Listings
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <HeroImage />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How PropArb Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our technology finds real estate bargains so you don't have to spend hours searching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-600">
                Our system continuously scrapes Sreality.cz and Bazos.cz to collect the latest property listings across the Czech Republic.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
              <p className="text-gray-600">
                Properties are analyzed against comparable listings to identify those priced below market value based on location, size, and features.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Instant Alerts</h3>
              <p className="text-gray-600">
                When we find properties priced in the lowest 5% of their market segment, we immediately notify you, giving you first-mover advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to find and act on the best property deals in the Czech market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Subscription Plans</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your investment strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mx-auto">
            {subscriptionPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} featured={plan.id === 'pro'} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Real people finding real value with PropArb.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Property Deal?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Join thousands of smart investors who are already using PropArb to find below-market properties.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 font-bold rounded-lg text-lg inline-block shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;