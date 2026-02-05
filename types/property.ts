export interface InvestmentProperty {
  id: string;
  title: string;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  financials: {
    purchasePrice: number;
    currentValue: number;
    appreciation: number;
    monthlyRent: number;
    expenses: number;
    netCashFlow: number;
    capRate: number;
    roi: number;
    cashOnCashReturn: number;
  };
  metrics: {
    occupancyRate: number;
    acquisitionDate: string;
    propertyType: 'single-family' | 'multi-family' | 'condo' | 'townhouse' | 'commercial';
    bedsCount: number;
    bathsCount: number;
    sqft: number;
  };
  performance: {
    totalReturn: number;
    annualizedReturn: number;
    holdingPeriod: number;
  };
  images: string[];
  status: 'active' | 'under-contract' | 'sold' | 'analysis';
  amenities: string[];
  neighborhood: {
    walkScore: number;
    transitScore: number;
    schools: Array<{
      name: string;
      distance: string;
      rating: number;
    }>;
    nearbyPlaces: string[];
  };
  virtualTourUrl?: string;
  agent: {
    name: string;
    phone: string;
    email: string;
    avatar?: string;
  };
  featured: boolean;
  isNew: boolean;
  description: string;
}
