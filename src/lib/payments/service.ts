export type PaymentProvider = 'stripe' | 'sslcommerz';

export interface PaymentIntentOptions {
  amount: number;
  currency: string;
  donorEmail: string;
  metadata?: Record<string, string>;
}

export abstract class PaymentService {
  abstract createIntent(options: PaymentIntentOptions): Promise<{ id: string; url: string }>;
  abstract verifyWebhook(payload: unknown, signature: string): Promise<boolean>;
}

// Logic factory
export function getPaymentService(provider: PaymentProvider): PaymentService {
  // Mocking the services for now as per "toy example" constraint - 
  // but following enterprise architecture with abstraction.
  return new MockPaymentService(provider);
}

class MockPaymentService extends PaymentService {
  constructor(private provider: PaymentProvider) {
    super();
  }

  async createIntent(options: PaymentIntentOptions) {
    console.log(`Creating ${this.provider} intent for ${options.amount} ${options.currency}`);
    return {
      id: `intent_${Math.random().toString(36).substr(2, 9)}`,
      url: `/payment-mock?provider=${this.provider}&amount=${options.amount}`,
    };
  }

  async verifyWebhook() {
    return true;
  }
}
