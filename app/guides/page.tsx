import { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Investment Guides",
  description: "Comprehensive guides for property investors. Learn about ROI calculation, market analysis, portfolio diversification, and first-time investing strategies.",
  path: "/guides",
  keywords: ["investment guides", "real estate education", "property investing tips", "ROI calculation", "market analysis"],
  ogImage: "/og-images/guides.png",
});

const guides = [
  {
    title: "First-Time Investor Guide",
    description: "Complete guide for first-time property investors. Learn the fundamentals of real estate investment, financing options, and property selection.",
    path: "/guides/first-time-investor",
    readTime: "12 min read",
    topics: ["Investment fundamentals", "Financing", "Property selection", "Risk management"],
  },
  {
    title: "ROI Calculation Masterclass",
    description: "Master the art of calculating return on investment for rental properties. Understand cash-on-cash return, cap rates, and total returns.",
    path: "/guides/roi-calculation",
    readTime: "10 min read",
    topics: ["Cash-on-cash return", "Cap rate analysis", "Total return calculation", "Performance metrics"],
  },
  {
    title: "Market Analysis Guide",
    description: "Learn how to analyze real estate markets, identify trends, and spot investment opportunities before they become obvious.",
    path: "/guides/market-analysis",
    readTime: "15 min read",
    topics: ["Market indicators", "Trend analysis", "Location evaluation", "Economic factors"],
  },
  {
    title: "Portfolio Diversification Strategies",
    description: "Build a resilient investment portfolio through diversification. Learn strategies for geographic, property type, and risk diversification.",
    path: "/guides/portfolio-diversification",
    readTime: "14 min read",
    topics: ["Geographic diversification", "Property type mix", "Risk management", "Asset allocation"],
  },
];

export default function GuidesPage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#191919] sm:text-3xl">Investment Guides</h1>
          <p className="mt-2 text-base text-[#606060]">
            Expert guidance to help you succeed in property investment
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.path}
              href={guide.path}
              className="group rounded-2xl border border-[#E4E4E4] bg-white p-6 transition-all hover:border-[#105B48] hover:shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#191919] group-hover:text-[#105B48]">
                  {guide.title}
                </h2>
                <span className="text-xs font-medium text-[#606060]">{guide.readTime}</span>
              </div>
              <p className="mb-4 text-sm text-[#606060]">{guide.description}</p>
              <div className="flex flex-wrap gap-2">
                {guide.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs font-medium text-[#3D3D3D]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
