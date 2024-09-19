declare namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id': string;
        'publishable-key': Promise<Stripe | null>;
      };
    }
  }
