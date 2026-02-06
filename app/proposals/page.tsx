import { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Applications",
  description: "Review investment applications from partners and co-investors. Track application status, terms, and investment amounts.",
  path: "/proposals",
  keywords: ["investment applications", "partnership applications", "co-investment", "deal flow"],
});

const applications = [
  {
    id: '1',
    investor: 'Sarah Martinez',
    targetProperty: 'Sunset Boulevard Duplex',
    investmentAmount: 425000,
    terms: '30% equity stake',
    submittedDate: '2024-01-10',
    status: 'Under Review',
    expectedROI: 19.5,
  },
  {
    id: '2',
    investor: 'Pinnacle Investment Group',
    targetProperty: 'Seattle Capitol Hill Fourplex',
    investmentAmount: 600000,
    terms: '50% equity stake',
    submittedDate: '2024-01-12',
    status: 'Approved',
    expectedROI: 24.0,
  },
  {
    id: '3',
    investor: 'David Johnson',
    targetProperty: 'Miami Beach Oceanview Condo',
    investmentAmount: 362500,
    terms: '50% equity stake',
    submittedDate: '2024-01-15',
    status: 'Under Review',
    expectedROI: 17.4,
  },
  {
    id: '4',
    investor: 'Atlantic Realty Partners',
    targetProperty: 'Nashville Germantown Duplex',
    investmentAmount: 310000,
    terms: '50% equity stake',
    submittedDate: '2024-01-18',
    status: 'Approved',
    expectedROI: 30.5,
  },
  {
    id: '5',
    investor: 'Emily Thompson',
    targetProperty: 'Portland Pearl District Loft',
    investmentAmount: 237500,
    terms: '50% equity stake',
    submittedDate: '2024-01-20',
    status: 'Declined',
    expectedROI: 14.7,
  },
  {
    id: '6',
    investor: 'Horizon Capital Management',
    targetProperty: 'San Diego La Jolla Cottage',
    investmentAmount: 575000,
    terms: '50% equity stake',
    submittedDate: '2024-01-22',
    status: 'Under Review',
    expectedROI: 16.8,
  },
];

export default function ProposalsPage() {
  const underReview = applications.filter(p => p.status === 'Under Review');
  const approved = applications.filter(p => p.status === 'Approved');
  const declined = applications.filter(p => p.status === 'Declined');

  const totalProposed = applications.reduce((sum, p) => sum + p.investmentAmount, 0);

  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#191919]">Applications</h1>
            <p className="mt-1 text-sm text-[#606060]">Review and manage investment applications from partners</p>
          </div>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-[#D6D6D6] bg-white px-6 py-2.5 text-xs font-medium text-[#191919] opacity-60"
          >
            New Application
          </button>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Under Review</div>
            <p className="mt-2 text-2xl font-semibold text-[#4545FE]">{underReview.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Approved</div>
            <p className="mt-2 text-2xl font-semibold text-[#12B76A]">{approved.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Declined</div>
            <p className="mt-2 text-2xl font-semibold text-[#F04438]">{declined.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Total Proposed</div>
            <p className="mt-2 text-2xl font-semibold text-[#14B8A6]">
              ${(totalProposed / 1000000).toFixed(2)}M
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4E4E4] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E4E4E4] bg-[#F9FAFB]">
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Investor</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Target Property</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Investment Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Terms</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Expected ROI</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Submitted</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((proposal, index) => (
                  <tr key={proposal.id} className={index !== applications.length - 1 ? "border-b border-[#E4E4E4]" : ""}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-sm font-semibold text-[#191919]">
                          {proposal.investor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="font-medium text-[#191919]">{proposal.investor}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#191919]">{proposal.targetProperty}</td>
                    <td className="px-4 py-4 font-medium text-[#191919]">
                      ${(proposal.investmentAmount / 1000).toFixed(0)}K
                    </td>
                    <td className="px-4 py-4 text-[#606060]">{proposal.terms}</td>
                    <td className="px-4 py-4">
                      <span className="font-medium text-[#12B76A]">{proposal.expectedROI.toFixed(1)}%</span>
                    </td>
                    <td className="px-4 py-4 text-[#606060]">{new Date(proposal.submittedDate).toLocaleDateString()}</td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        proposal.status === 'Approved' ? 'bg-[#12B76A]/10 text-[#12B76A]' :
                        proposal.status === 'Under Review' ? 'bg-[#4545FE]/10 text-[#4545FE]' :
                        'bg-[#F04438]/10 text-[#F04438]'
                      }`}>
                        {proposal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
