export interface MarketTrend {
  market: string;
  medianPrice: number;
  priceChange: number;
  medianRent: number;
  rentChange: number;
  averageCapRate: number;
  occupancyRate: number;
  outlook: 'bullish' | 'neutral' | 'bearish';
}

export const marketTrends: MarketTrend[] = [
  {
    market: 'Austin, TX',
    medianPrice: 525000,
    priceChange: 8.2,
    medianRent: 2850,
    rentChange: 5.4,
    averageCapRate: 5.3,
    occupancyRate: 96.8,
    outlook: 'bullish'
  },
  {
    market: 'Nashville, TN',
    medianPrice: 485000,
    priceChange: 11.5,
    medianRent: 2450,
    rentChange: 7.2,
    averageCapRate: 5.8,
    occupancyRate: 97.2,
    outlook: 'bullish'
  },
  {
    market: 'Phoenix, AZ',
    medianPrice: 445000,
    priceChange: 6.8,
    medianRent: 2150,
    rentChange: 4.1,
    averageCapRate: 5.5,
    occupancyRate: 95.4,
    outlook: 'neutral'
  },
  {
    market: 'Atlanta, GA',
    medianPrice: 395000,
    priceChange: 9.3,
    medianRent: 2050,
    rentChange: 6.5,
    averageCapRate: 6.2,
    occupancyRate: 96.1,
    outlook: 'bullish'
  },
  {
    market: 'Denver, CO',
    medianPrice: 615000,
    priceChange: 4.2,
    medianRent: 2650,
    rentChange: 3.8,
    averageCapRate: 4.9,
    occupancyRate: 94.8,
    outlook: 'neutral'
  },
  {
    market: 'Miami, FL',
    medianPrice: 565000,
    priceChange: 7.6,
    medianRent: 2950,
    rentChange: 5.9,
    averageCapRate: 5.1,
    occupancyRate: 93.2,
    outlook: 'neutral'
  }
];
