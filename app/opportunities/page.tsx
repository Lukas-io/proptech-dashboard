import { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Request",
  description: "Manage due diligence requests, property inspections, market analysis, and financing approvals for property acquisitions.",
  path: "/opportunities",
  keywords: ["due diligence requests", "property inspection requests", "market analysis", "financing approvals"],
});

const opportunities = [
  {
    id: '1',
    type: 'Due Diligence',
    property: 'Riverside Luxury Apartments',
    location: 'Portland, OR',
    requestDate: '2024-01-15',
    status: 'Under Review',
    priority: 'High',
    estimatedValue: 2850000,
  },
  {
    id: '2',
    type: 'Property Inspection',
    property: 'Downtown Commercial Plaza',
    location: 'Seattle, WA',
    requestDate: '2024-01-18',
    status: 'Approved',
    priority: 'Medium',
    estimatedValue: 4200000,
  },
  {
    id: '3',
    type: 'Market Analysis',
    property: 'Suburban Office Complex',
    location: 'Austin, TX',
    requestDate: '2024-01-20',
    status: 'Under Review',
    priority: 'Medium',
    estimatedValue: 3100000,
  },
  {
    id: '4',
    type: 'Financing Approval',
    property: 'Beachfront Condos',
    location: 'San Diego, CA',
    requestDate: '2024-01-22',
    status: 'Approved',
    priority: 'High',
    estimatedValue: 5600000,
  },
  {
    id: '5',
    type: 'Due Diligence',
    property: 'Mountain View Estates',
    location: 'Denver, CO',
    requestDate: '2024-01-25',
    status: 'Passed',
    priority: 'Low',
    estimatedValue: 1850000,
  },
];

export default function OpportunitiesPage() {
  const underReview = opportunities.filter(o => o.status === 'Under Review');
  const approved = opportunities.filter(o => o.status === 'Approved');
  const passed = opportunities.filter(o => o.status === 'Passed');

  const totalEstimatedValue = opportunities.reduce((sum, o) => sum + o.estimatedValue, 0);

  return (
    <PageTransition>
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#191919]">Request</h1>
            <p className="mt-1 text-sm text-[#606060]">Manage and track all property-related requests</p>
          </div>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-[#D6D6D6] bg-white px-6 py-2.5 text-xs font-medium text-[#191919] opacity-60"
          >
            New Request
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
            <div className="text-sm font-medium text-[#525252]">Passed</div>
            <p className="mt-2 text-2xl font-semibold text-[#606060]">{passed.length}</p>
          </div>
          <div className="rounded-xl border border-[#E4E4E4] bg-white p-4">
            <div className="text-sm font-medium text-[#525252]">Est. Value</div>
            <p className="mt-2 text-2xl font-semibold text-[#14B8A6]">
              ${(totalEstimatedValue / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4E4E4] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E4E4E4] bg-[#F9FAFB]">
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Property</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Request Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Est. Value</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Priority</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#525252]">Status</th>
                </tr>
              </thead>
              <tbody>
                {opportunities.map((opportunity, index) => (
                  <tr key={opportunity.id} className={index !== opportunities.length - 1 ? "border-b border-[#E4E4E4]" : ""}>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#F5F5F5] px-2.5 py-1 text-xs font-medium text-[#3D3D3D]">
                        {opportunity.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-medium text-[#191919]">{opportunity.property}</td>
                    <td className="px-4 py-4 text-[#606060]">{opportunity.location}</td>
                    <td className="px-4 py-4 text-[#606060]">{new Date(opportunity.requestDate).toLocaleDateString()}</td>
                    <td className="px-4 py-4 font-medium text-[#191919]">
                      ${(opportunity.estimatedValue / 1000000).toFixed(2)}M
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        opportunity.priority === 'High' ? 'bg-[#F04438]/10 text-[#F04438]' :
                        opportunity.priority === 'Medium' ? 'bg-[#4545FE]/10 text-[#4545FE]' :
                        'bg-[#606060]/10 text-[#606060]'
                      }`}>
                        {opportunity.priority}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        opportunity.status === 'Approved' ? 'bg-[#12B76A]/10 text-[#12B76A]' :
                        opportunity.status === 'Under Review' ? 'bg-[#4545FE]/10 text-[#4545FE]' :
                        'bg-[#606060]/10 text-[#606060]'
                      }`}>
                        {opportunity.status}
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
