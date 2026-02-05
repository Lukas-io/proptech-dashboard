'use client';

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PortfolioOverviewSection } from "@/components/PortfolioOverviewSection";
import OverviewCard from "@/components/OverviewCard";
import PropertyCard from "@/components/PropertyCard";
import { PageTransition } from "@/components/PageTransition";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  TrendingUp,
  DollarSign,
  Users,
  Home,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function DashboardPage() {
  const [showLoading, setShowLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'sold'>('active');

  // Get featured properties for display
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);
  const activeProperties = properties.filter(p => p.status === 'active');
  const pendingProperties = properties.filter(p => p.status === 'under-contract' || p.status === 'analysis');
  const soldProperties = properties.filter(p => p.status === 'sold');

  // Calculate portfolio metrics
  const totalValue = properties.reduce((sum, p) => sum + p.financials.currentValue, 0);
  const totalMonthlyIncome = properties
    .filter(p => p.status === 'active')
    .reduce((sum, p) => sum + p.financials.monthlyRent, 0);
  const avgROI = properties.reduce((sum, p) => sum + p.financials.roi, 0) / properties.length;
  const totalProperties = properties.length;

  const displayProperties = activeTab === 'active'
    ? activeProperties.slice(0, 6)
    : activeTab === 'pending'
    ? pendingProperties
    : soldProperties;

  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        {/* Enhanced Hero Section with Live Indicator */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#105B48] to-[#176d58] p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                Welcome Back, Ahmed
              </h1>
              <p className="text-base sm:text-lg opacity-90">
                Here&apos;s your portfolio overview for today
              </p>
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium">Live</span>
            </div>
          </div>

          {/* Quick stats with success indicators */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/20">
              <p className="text-2xl font-bold">${(totalValue / 1000000).toFixed(1)}M</p>
              <p className="text-sm opacity-80">Portfolio Value</p>
              <span className="absolute top-0 right-0 text-xs bg-green-400 text-[#105B48] px-2 py-0.5 rounded-bl-lg font-semibold">
                +12.5%
              </span>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/20">
              <p className="text-2xl font-bold">${(totalMonthlyIncome / 1000).toFixed(1)}K</p>
              <p className="text-sm opacity-80">Monthly Income</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/20">
              <p className="text-2xl font-bold">{avgROI.toFixed(1)}%</p>
              <p className="text-sm opacity-80">Avg ROI</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/properties">
              <Button size="lg" variant="secondary" className="bg-white text-[#105B48] hover:bg-white/90">
                Browse Properties
              </Button>
            </Link>
            <Link href="/calculators/roi">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10">
                View Analytics
              </Button>
            </Link>
          </div>
        </section>

        {/* Interactive Metrics Dashboard */}
        <section className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Success state metric card */}
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-[#606060]">Total Properties</p>
                <p className="text-3xl font-bold text-[#191919] mt-1">{totalProperties}</p>
              </div>
              <div className="p-3 rounded-full bg-[#105B48]/10 group-hover:bg-[#105B48] transition-colors">
                <Home className="size-5 text-[#105B48] group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500 flex items-center gap-1">
                <ArrowUpRight className="size-4" />
                8.2%
              </span>
              <span className="text-[#606060]">vs last month</span>
            </div>
            <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#105B48] rounded-full" style={{ width: '68%' }}></div>
            </div>
          </Card>

          {/* Error/Action Required state */}
          <Card className="p-6 border-red-200 bg-red-50/50">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-red-100">
                <AlertCircle className="size-5 text-red-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-red-900">Action Required</p>
                <p className="text-sm text-red-700 mt-1">
                  {pendingProperties.length} properties need inspection
                </p>
                <Button size="sm" variant="outline" className="mt-3 border-red-300 text-red-700 hover:bg-red-100">
                  Review Now
                </Button>
              </div>
            </div>
          </Card>

          {/* Success/All Good state */}
          <Card className="p-6 border-green-200 bg-green-50/50">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-green-100">
                <CheckCircle2 className="size-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-green-900">All Systems Operational</p>
                <p className="text-sm text-green-700 mt-1">Portfolio performing above target</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Live Activity Feed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#105B48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#105B48]"></span>
            </span>
            Recent Activity
          </h2>

          <Card className="divide-y">
            <div className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
              <div className="p-2 rounded-full bg-green-50">
                <TrendingUp className="size-5 text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-[#191919]">Property value increased</p>
                    <p className="text-sm text-[#606060] mt-1">Downtown Austin Condo gained $15K in value</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                    New
                  </span>
                </div>
                <p className="text-xs text-[#A0A0A0] mt-2">2 min ago</p>
              </div>
            </div>

            <div className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
              <div className="p-2 rounded-full bg-[#105B48]/10">
                <DollarSign className="size-5 text-[#105B48]" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#191919]">Rent payment received</p>
                <p className="text-sm text-[#606060] mt-1">Sunset Boulevard Duplex - $6,500</p>
                <p className="text-xs text-[#A0A0A0] mt-2">1 hour ago</p>
              </div>
            </div>

            <div className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
              <div className="p-2 rounded-full bg-blue-50">
                <Users className="size-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#191919]">New inquiry received</p>
                <p className="text-sm text-[#606060] mt-1">3 potential buyers interested in Miami Beach Condo</p>
                <p className="text-xs text-[#A0A0A0] mt-2">3 hours ago</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Legacy Portfolio Overview Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-5 mb-8">
          <div className="flex-1 rounded-2xl border border-[#E4E4E4] bg-white p-4 sm:p-5">
            <PortfolioOverviewSection />
          </div>

          <div className="flex shrink-0 flex-col gap-5 self-stretch lg:w-[407px]">
            <OverviewCard
              title="Listings Overview"
              icon={<Image src="/icons/house.svg" alt="Listings" width={24} height={24} />}
              items={[
                { label: "Total", value: totalProperties.toString() },
                { label: "Active", value: activeProperties.length.toString() },
                { label: "Sold", value: soldProperties.length.toString() },
              ]}
            />
            <OverviewCard
              title="Performance Metrics"
              icon={<Image src="/icons/chart.svg" alt="Performance" width={24} height={24} />}
              items={[
                { label: "Avg ROI", value: `${avgROI.toFixed(1)}%` },
                { label: "Cash Flow", value: `$${(totalMonthlyIncome / 1000).toFixed(1)}K` },
                { label: "Occupancy", value: "96%" },
              ]}
            />
          </div>
        </div>

        {/* Properties with State Tabs and Loading Toggle */}
        <section className="mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-[#191919]">Your Properties</h2>

            <div className="flex gap-3 items-center flex-wrap">
              {/* Tab Navigation */}
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('active')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'active'
                      ? 'bg-white text-[#105B48] shadow-sm'
                      : 'text-[#606060] hover:text-[#191919]'
                  }`}
                >
                  Active ({activeProperties.length})
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'pending'
                      ? 'bg-white text-[#105B48] shadow-sm'
                      : 'text-[#606060] hover:text-[#191919]'
                  }`}
                >
                  Pending ({pendingProperties.length})
                </button>
                <button
                  onClick={() => setActiveTab('sold')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'sold'
                      ? 'bg-white text-[#105B48] shadow-sm'
                      : 'text-[#606060] hover:text-[#191919]'
                  }`}
                >
                  Sold ({soldProperties.length})
                </button>
              </div>

              {/* Loading state toggle (demo) */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLoading(!showLoading)}
              >
                {showLoading ? 'Hide' : 'Show'} Loading
              </Button>
            </div>
          </div>

          {/* Properties Grid with Loading States */}
          {showLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="p-4 space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  badge={property.status === 'under-contract' ? 'Under Contract' : property.status === 'sold' ? 'Sold' : property.isNew ? 'New' : undefined}
                  showChat={property.status === 'active'}
                />
              ))}
            </div>
          )}

          {/* Empty state example */}
          {!showLoading && displayProperties.length === 0 && (
            <Card className="p-12 text-center">
              <div className="mx-auto w-fit p-4 rounded-full bg-gray-100 mb-4">
                <Home className="size-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-[#191919] mb-2">
                No {activeTab} properties
              </h3>
              <p className="text-sm text-[#606060] mb-4">
                {activeTab === 'sold'
                  ? 'You haven\'t sold any properties yet'
                  : `You don't have any ${activeTab} properties at the moment`}
              </p>
              {activeTab === 'active' && (
                <Link href="/properties">
                  <Button>
                    Browse Properties
                  </Button>
                </Link>
              )}
            </Card>
          )}

          {/* View all link */}
          {!showLoading && displayProperties.length > 0 && activeTab === 'active' && (
            <div className="mt-6 text-center">
              <Link href="/properties">
                <Button variant="outline" size="lg">
                  View All Properties ({activeProperties.length})
                </Button>
              </Link>
            </div>
          )}
        </section>
      </main>
    </PageTransition>
  );
}
