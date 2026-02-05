import { Metadata } from "next";
import Image from "next/image";
import { PortfolioOverviewSection } from "@/components/PortfolioOverviewSection";
import OverviewCard from "@/components/OverviewCard";
import PropertyCard from "@/components/PropertyCard";
import { PageTransition } from "@/components/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio Dashboard",
  description: "Track your property investment portfolio performance, ROI, cash flow, and top performing properties in real-time.",
  path: "/",
  keywords: ["portfolio dashboard", "investment performance", "property ROI", "cash flow tracking"],
});

export default function DashboardPage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <h1 className="mb-6 text-xl font-semibold text-[#191919] sm:mb-8">Welcome, Ahmed</h1>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-5">
          <div className="flex-1 rounded-2xl border border-[#E4E4E4] bg-white p-4 sm:p-5">
            <PortfolioOverviewSection />
          </div>

          <div className="flex shrink-0 flex-col gap-5 self-stretch lg:w-[407px]">
            <OverviewCard
              title="Listings Overview"
              icon={<Image src="/icons/house.svg" alt="Listings" width={24} height={24} />}
              items={[
                { label: "Total", value: "1.8k" },
                { label: "Active", value: "80" },
                { label: "Archived", value: "1k" },
              ]}
            />
            <OverviewCard
              title="Users Overview"
              icon={<Image src="/icons/profile-2.svg" alt="Users" width={24} height={24} />}
              items={[
                { label: "Total", value: "20.7k" },
                { label: "Riders", value: "8.5k" },
                { label: "Subscribers", value: "7.5k" },
              ]}
            />
          </div>
        </div>

        <section className="mt-8 sm:mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PropertyCard
              badge="Most Clicked"
              title="Urban Prime Plaza Premiere"
              images={["/images/property-1.png", "/images/property-2.png", "/images/property-3.png"]}
              showChat={false}
            />
            <PropertyCard
              badge="Most Watchlisted"
              title="Urban Prime Plaza Premiere"
              images={["/images/property-2.png", "/images/property-3.png", "/images/property-1.png"]}
            />
            <PropertyCard
              badge="Hottest Listing"
              title="Urban Prime Plaza Premiere"
              images={["/images/property-3.png", "/images/property-1.png", "/images/property-2.png"]}
              showChat
            />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
