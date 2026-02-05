export interface PortfolioMetrics {
  totalValue: number;
  totalEquity: number;
  totalCashFlow: number;
  averageROI: number;
  totalProperties: number;
  occupancyRate: number;
  yearOverYearGrowth: number;
}

export interface PortfolioPerformance {
  period: string;
  portfolioValue: number;
  cashFlow: number;
  roi: number;
  appreciation: number;
}
