export interface Investor {
  id: string;
  name: string;
  email: string;
  role: 'individual' | 'institutional' | 'fund-manager' | 'partner';
  portfolio: {
    totalInvestment: number;
    propertyCount: number;
    averageROI: number;
  };
  joinedDate: string;
  status: 'active' | 'inactive' | 'pending';
  avatar: string;
}
