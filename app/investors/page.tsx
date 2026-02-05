import { Metadata } from "next";
import Image from "next/image";
import { PageTransition } from "@/components/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";
import { investors } from "@/data/investors";

export const metadata: Metadata = generatePageMetadata({
  title: "Investors",
  description: "Manage investor relationships, track investments, and monitor partner portfolio performance.",
  path: "/investors",
  keywords: ["real estate investors", "investment partners", "investor management", "portfolio tracking"],
});

export default function InvestorsPage() {
  const activeInvestors = investors.filter(i => i.status === 'active');
  const pendingInvestors = investors.filter(i => i.status === 'pending');
  const individualInvestors = investors.filter(i => i.role === 'individual');
  const institutionalInvestors = investors.filter(i => i.role === 'institutional');

  const totalInvestment = investors.reduce((sum, i) => sum + i.portfolio.totalInvestment, 0);

  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#191919]">Investors</h1>
            <p className="mt-1 text-sm text-[#606060]">Manage investor relationships and track investments</p>
          </div>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-[#D6D6D6] bg-white px-6 py-2.5 text-xs font-medium text-[#191919] opacity-60"
          >
            Add Investor
          </button>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Total Investors</div>
            <p className="mt-2 text-2xl font-semibold text-[#4545FE]">{investors.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Individual</div>
            <p className="mt-2 text-2xl font-semibold text-[#12B76A]">{individualInvestors.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Institutional</div>
            <p className="mt-2 text-2xl font-semibold text-[#14B8A6]">{institutionalInvestors.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Total Investment</div>
            <p className="mt-2 text-2xl font-semibold text-[#F04438]">
              ${(totalInvestment / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4E4E4] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E4E4E4] bg-[#F9FAFB]">
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Investor</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Total Investment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Properties</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Avg ROI</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeInvestors.map((investor, index) => (
                  <tr key={investor.id} className={index !== activeInvestors.length - 1 ? "border-b border-[#E4E4E4]" : ""}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-sm font-semibold text-[#191919]">
                          {investor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium text-[#191919]">{investor.name}</div>
                          <div className="text-xs text-[#606060]">{investor.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#F5F5F5] px-2.5 py-1 text-xs font-medium capitalize text-[#3D3D3D]">
                        {investor.role.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-medium text-[#191919]">
                      ${(investor.portfolio.totalInvestment / 1000).toFixed(0)}K
                    </td>
                    <td className="px-4 py-4 text-[#191919]">{investor.portfolio.propertyCount}</td>
                    <td className="px-4 py-4">
                      <span className="font-medium text-[#12B76A]">{investor.portfolio.averageROI.toFixed(1)}%</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#12B76A]/10 px-2.5 py-1 text-xs font-medium capitalize text-[#12B76A]">
                        {investor.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {pendingInvestors.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-[#191919]">Pending Approval ({pendingInvestors.length})</h2>
            <div className="rounded-2xl border border-[#E4E4E4] bg-white p-4">
              {pendingInvestors.map((investor) => (
                <div key={investor.id} className="flex items-center justify-between border-b border-[#E4E4E4] py-3 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-sm font-semibold text-[#191919]">
                      {investor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-[#191919]">{investor.name}</div>
                      <div className="text-xs text-[#606060]">{investor.email}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-lg bg-[#12B76A] px-4 py-2 text-xs font-medium text-white opacity-60"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-lg border border-[#E4E4E4] bg-white px-4 py-2 text-xs font-medium text-[#191919] opacity-60"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </PageTransition>
  );
}
