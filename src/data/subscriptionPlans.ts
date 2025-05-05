import { SubscriptionPlan } from '../types/subscription';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for beginners',
    price: 20,
    features: [
      'Real-time property alerts',
      'Basic property filtering',
      'Up to 3 saved searches',
      'Daily email notifications',
      'Access to basic market data'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For serious investors',
    price: 50,
    features: [
      'Everything in Basic',
      'Up to 10 saved searches',
      'Instant notifications',
      'Advanced filtering options',
      'Market analytics dashboard',
      '3 months of historical data',
      'Custom search parameters'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full power & support',
    price: 120,
    features: [
      'Everything in Pro',
      'Unlimited saved searches',
      'API access for integration',
      'Full market analytics',
      '1 year of historical data',
      'Dedicated support',
      'Custom reporting'
    ]
  }
];