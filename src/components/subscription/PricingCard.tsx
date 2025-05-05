import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubscriptionPlan } from '../../types/subscription';
import { useAuth } from '../../hooks/useAuth';

interface PricingCardProps {
  plan: SubscriptionPlan;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, featured = false }) => {
  const { isAuthenticated, user } = useAuth();
  
  return (
    <div className={`rounded-lg overflow-hidden ${
      featured 
        ? 'shadow-xl border-2 border-primary-500 transform scale-105' 
        : 'shadow-md border border-gray-200'
    }`}>
      {featured && (
        <div className="bg-primary-500 text-white py-2 px-4 text-center font-medium">
          Most Popular
        </div>
      )}
      
      <div className="bg-white p-6">
        <div className={`${featured ? 'text-primary-600' : 'text-gray-900'} font-bold text-xl mb-1`}>
          {plan.name}
        </div>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        
        <div className="mb-6">
          {plan.price === 0 ? (
            <span className="text-3xl font-bold">Free</span>
          ) : (
            <>
              <span className="text-3xl font-bold">{plan.price}€</span>
              <span className="text-gray-600 ml-1">/month</span>
            </>
          )}
        </div>
        
        <Link
          to={isAuthenticated ? "/subscription/checkout" : "/register"}
          className={`block w-full py-2 px-4 text-center rounded-md font-medium ${
            featured
              ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
        >
          {plan.price === 0 ? 'Start Free Trial' : isAuthenticated ? 'Subscribe' : 'Sign Up'}
        </Link>
      </div>
      
      <div className="bg-gray-50 px-6 py-6">
        <h3 className="font-medium text-gray-900 mb-4">Plan includes:</h3>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;