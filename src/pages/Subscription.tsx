import React from 'react';
import { useAuth } from '../hooks/useAuth';
import PricingCard from '../components/subscription/PricingCard';
import { Check, X } from 'lucide-react';
import { subscriptionPlans } from '../data/subscriptionPlans';

const Subscription: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  
  const features = [
    { name: 'New Property Alerts', basic: true, pro: true, enterprise: true },
    { name: 'Property Filtering', basic: true, pro: true, enterprise: true },
    { name: 'Below Market Identifier', basic: true, pro: true, enterprise: true },
    { name: 'Save Favorites', basic: true, pro: true, enterprise: true },
    { name: 'Maximum Alerts', basic: '3', pro: '10', enterprise: 'Unlimited' },
    { name: 'Email Notifications', basic: 'Daily', pro: 'Instant', enterprise: 'Instant' },
    { name: 'Market Analytics', basic: false, pro: true, enterprise: true },
    { name: 'Historical Data', basic: false, pro: '3 months', enterprise: '1 year' },
    { name: 'API Access', basic: false, pro: false, enterprise: true },
    { name: 'Custom Search Parameters', basic: false, pro: true, enterprise: true },
    { name: 'Dedicated Support', basic: false, pro: false, enterprise: true },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Subscription Plans</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your investment strategy and helps you find the best property deals.
          </p>
        </div>
        
        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {subscriptionPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} featured={plan.id === 'pro'} />
          ))}
        </div>
        
        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Compare Features</h2>
            <p className="mt-2 text-gray-600">Detailed comparison of all plan features</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-gray-900">Basic</th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-gray-900 bg-primary-50">Pro</th>
                  <th className="px-6 py-5 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.basic === true ? (
                        <Check size={20} className="mx-auto text-green-500" />
                      ) : feature.basic === false ? (
                        <X size={20} className="mx-auto text-gray-300" />
                      ) : (
                        <span className="text-sm text-gray-700">{feature.basic}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50">
                      {feature.pro === true ? (
                        <Check size={20} className="mx-auto text-green-500" />
                      ) : feature.pro === false ? (
                        <X size={20} className="mx-auto text-gray-300" />
                      ) : (
                        <span className="text-sm text-gray-700">{feature.pro}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.enterprise === true ? (
                        <Check size={20} className="mx-auto text-green-500" />
                      ) : feature.enterprise === false ? (
                        <X size={20} className="mx-auto text-gray-300" />
                      ) : (
                        <span className="text-sm text-gray-700">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How does the free trial work?</h3>
              <p className="text-gray-600">
                You get 7 days of full access to the Basic plan features. No credit card required, and you can cancel anytime. We'll send you a reminder before your trial ends.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit toward your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payment via PayPal.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How accurate are the property valuations?</h3>
              <p className="text-gray-600">
                Our algorithm compares properties based on location, size, amenities, and historical sales data to identify underpriced listings. While we strive for accuracy, we recommend conducting your own due diligence before making investment decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can I cancel my subscription?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access until the end of your current billing period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;