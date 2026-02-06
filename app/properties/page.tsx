import { Metadata } from "next";
import Image from "next/image";
import { PageTransition } from "@/components/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export const metadata: Metadata = generatePageMetadata({
  title: "Listings",
  description: "Browse and manage property listings. View active, under contract, and analysis-phase properties with detailed metrics.",
  path: "/properties",
  keywords: ["property listings", "real estate listings", "available properties", "property search"],
  ogImage: "/og-images/properties.png",
});

export default function PropertiesPage() {
  const activeProperties = properties.filter(p => p.status === 'active');
  const underContract = properties.filter(p => p.status === 'under-contract');
  const inAnalysis = properties.filter(p => p.status === 'analysis');

  const totalValue = activeProperties.reduce((sum, p) => sum + p.financials.currentValue, 0);
  const avgOccupancy = activeProperties.reduce((sum, p) => sum + p.metrics.occupancyRate, 0) / activeProperties.length;

  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#191919]">Listings</h1>
            <p className="mt-1 text-sm text-[#606060]">Browse and manage all property listings</p>
          </div>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-[#D6D6D6] bg-white px-6 py-2.5 text-xs font-medium text-[#191919] opacity-60"
          >
            Add New Listing
          </button>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[#525252]">
              <Image src="/icons/house.svg" alt="" width={20} height={20} />
              Total Portfolio Value
            </div>
            <p className="mt-2 text-2xl font-semibold text-[#4545FE]">
              ${(totalValue / 1000000).toFixed(2)}M
            </p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[#525252]">
              <Image src="/icons/house.svg" alt="" width={20} height={20} />
              Active Properties
            </div>
            <p className="mt-2 text-2xl font-semibold text-[#12B76A]">{activeProperties.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[#525252]">
              <Image src="/icons/house.svg" alt="" width={20} height={20} />
              Avg Occupancy
            </div>
            <p className="mt-2 text-2xl font-semibold text-[#14B8A6]">{avgOccupancy.toFixed(1)}%</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-[#191919]">Active Properties ({activeProperties.length})</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeProperties.map((property) => (
              <PropertyCard
                key={property.id}
                badge={property.location.city + ", " + property.location.state}
                title={property.title}
                images={property.images}
                roi={property.financials.roi}
                cashFlow={property.financials.netCashFlow}
                appreciation={property.financials.appreciation}
              />
            ))}
          </div>
        </section>

        {underContract.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-[#191919]">Under Contract ({underContract.length})</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {underContract.map((property) => (
                <PropertyCard
                  key={property.id}
                  badge="Under Contract"
                  title={property.title}
                  images={property.images}
                  roi={property.financials.roi}
                  cashFlow={property.financials.netCashFlow}
                  appreciation={property.financials.appreciation}
                />
              ))}
            </div>
          </section>
        )}

        {inAnalysis.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#191919]">In Analysis ({inAnalysis.length})</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inAnalysis.map((property) => (
                <PropertyCard
                  key={property.id}
                  badge="Analysis Phase"
                  title={property.title}
                  images={property.images}
                  roi={property.financials.roi}
                  cashFlow={property.financials.netCashFlow}
                  appreciation={property.financials.appreciation}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </PageTransition>
  );
}
