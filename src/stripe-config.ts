export const stripeProducts = [
  {
    priceId: 'prod_SdpfWwmvwTQajZ', // Replace with your actual Stripe price ID
    name: 'Service Booking',
    description: 'Book professional services with verified providers',
    mode: 'payment' as const,
    price: 20,
    currency: 'ZAR'
  },
  {
    priceId: 'prod_SdnIJ1ML5eMuHb', // Replace with your actual Stripe price ID
    name: 'Individual Subscription',
    description: 'Access to AI profile generation and premium features',
    mode: 'subscription' as const,
    price: 99,
    currency: 'ZAR'
  },
  {
    priceId: 'prod_SdnKVYXUGFYKZq', // Replace with your actual Stripe price ID
    name: 'Business Subscription',
    description: 'Complete business solution with booking management and analytics',
    mode: 'subscription' as const,
    price: 199,
    currency: 'ZAR'
  }
];

export type StripeProduct = typeof stripeProducts[number];