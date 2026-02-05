import { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { StructuredData } from "@/components/SEO/StructuredData";
import { getFAQPageSchema, getHowToSchema } from "@/lib/schemas";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "First-Time Property Investor Guide",
  description: "Complete guide for first-time property investors. Learn investment fundamentals, financing options, property selection strategies, and risk management techniques.",
  path: "/guides/first-time-investor",
  keywords: ["first-time investor", "property investment guide", "real estate basics", "investment fundamentals", "property financing"],
  ogImage: "/og-images/guides.png",
});

const faqs = [
  {
    question: "How much money do I need to start investing in rental properties?",
    answer: "Most lenders require a 20-25% down payment for investment properties. For a $300,000 property, you'd need $60,000-$75,000 plus closing costs (typically 2-5% of the purchase price) and a reserve fund for repairs and vacancies. Start with $75,000-$90,000 for a first investment property.",
  },
  {
    question: "What is a good ROI for rental property?",
    answer: "A good return on investment for rental properties typically ranges from 8-12% annually. This includes both cash flow and appreciation. Calculate your ROI by dividing annual profit by total investment. Properties with 15%+ ROI are considered excellent investments.",
  },
  {
    question: "Should I invest in single-family or multi-family properties?",
    answer: "Single-family homes are easier to manage and finance for beginners, with lower down payments (20-25%) and simpler tenant management. Multi-family properties offer higher income potential and better risk distribution across multiple units, but require larger down payments (25-30%) and more intensive management.",
  },
  {
    question: "What is the 1% rule in real estate investing?",
    answer: "The 1% rule states that monthly rent should equal at least 1% of the property's purchase price. For a $250,000 property, monthly rent should be $2,500 or more. This is a quick screening tool to identify potentially profitable properties, though it should be combined with detailed financial analysis.",
  },
  {
    question: "How do I calculate cash-on-cash return?",
    answer: "Cash-on-cash return = (Annual pre-tax cash flow ÷ Total cash invested) × 100. For example, if you invest $75,000 and earn $9,000 annually in net cash flow, your cash-on-cash return is 12%. This metric measures the annual return on your actual cash investment.",
  },
  {
    question: "What are the biggest risks in property investment?",
    answer: "Key risks include: vacancy periods (no rental income), unexpected repairs, problematic tenants, market downturns affecting property values, interest rate increases, and overleveraging. Mitigate risks through proper screening, maintaining reserves (6-12 months expenses), regular maintenance, and conservative financing.",
  },
  {
    question: "Should I use a property management company?",
    answer: "Use a property management company if you own properties far from your residence, lack time for tenant management, or own multiple properties. Typical fees are 8-12% of monthly rent. Self-management saves money but requires significant time investment for tenant screening, maintenance coordination, and rent collection.",
  },
  {
    question: "How important is location in property investment?",
    answer: "Location is the most critical factor affecting property value, rental demand, and appreciation potential. Prioritize properties near employment centers, good schools, public transportation, and amenities. Research crime rates, economic growth, and population trends. A great property in a poor location will underperform.",
  },
  {
    question: "What financing options are available for investment properties?",
    answer: "Common financing options include: conventional mortgages (20-25% down, best rates), FHA loans (3.5% down for owner-occupied, must live there 1 year before renting), portfolio loans from local banks, hard money loans (short-term, higher rates), and cash purchases. Conventional loans offer the best terms for pure investment properties.",
  },
  {
    question: "When should I sell an investment property?",
    answer: "Consider selling when: the property no longer meets your investment goals, appreciation has plateaued, the neighborhood is declining, you can 1031 exchange into a better property, or you need to rebalance your portfolio. Avoid emotional decisions and analyze whether selling and reinvesting elsewhere would improve your returns.",
  },
  {
    question: "How do I find good investment properties?",
    answer: "Find properties through: MLS listings (work with investor-friendly realtors), off-market deals (networking, direct mail to owners), foreclosures and auctions, wholesalers, driving for dollars in target neighborhoods, and online marketplaces. Build relationships with real estate agents who specialize in investment properties in your target market.",
  },
  {
    question: "What is a cap rate and how do I use it?",
    answer: "Capitalization rate (cap rate) = (Net Operating Income ÷ Property Value) × 100. It measures the property's potential return independent of financing. For example, a property generating $30,000 NOI valued at $400,000 has a 7.5% cap rate. Compare cap rates across similar properties to identify good deals. Higher cap rates indicate higher returns but often higher risk.",
  },
  {
    question: "Do I need an LLC for rental properties?",
    answer: "An LLC provides liability protection, separating personal assets from investment property risks. It's recommended if you own multiple properties, have significant personal assets to protect, or want to add partners. Consult a tax professional, as LLCs can complicate financing and may increase insurance costs. Many beginning investors start without an LLC and form one after acquiring 2-3 properties.",
  },
  {
    question: "How much should I budget for maintenance and repairs?",
    answer: "Budget 1-2% of property value annually for maintenance and repairs, plus 10% of monthly rent for ongoing maintenance. For a $300,000 property renting at $2,500/month, budget $3,000-$6,000 annually for major repairs plus $250/month for ongoing maintenance. Older properties require higher reserves. Always maintain a separate emergency fund for unexpected issues.",
  },
  {
    question: "What tax benefits do property investors receive?",
    answer: "Key tax benefits include: mortgage interest deductions, property tax deductions, depreciation (typically 27.5 years for residential), operating expense deductions, 1031 exchanges (defer capital gains by reinvesting), and potential pass-through deduction. Consult a tax professional to maximize deductions while maintaining proper documentation.",
  },
];

const steps = [
  {
    name: "Educate Yourself",
    text: "Learn investment fundamentals through books, courses, and mentors. Understand key metrics (ROI, cap rate, cash-on-cash return), financing options, and local market conditions. Join real estate investment groups and attend networking events.",
  },
  {
    name: "Assess Your Finances",
    text: "Review your credit score (aim for 680+), calculate available capital, and determine how much you can invest. Account for down payment (20-25%), closing costs (2-5%), and emergency reserves (6-12 months of expenses). Improve credit and save if needed.",
  },
  {
    name: "Choose Your Market",
    text: "Research markets based on population growth, job market strength, rental demand, and property appreciation trends. Consider starting in your local area where you understand the market. Analyze median home prices, average rents, and vacancy rates.",
  },
  {
    name: "Define Investment Criteria",
    text: "Set specific criteria: property type (single-family, duplex, etc.), price range, target ROI (minimum 8-10%), preferred neighborhoods, and deal-breaker factors. Create a scoring system to objectively evaluate properties.",
  },
  {
    name: "Build Your Team",
    text: "Assemble your team: investor-friendly real estate agent, lender/mortgage broker, property inspector, insurance agent, contractor, and accountant. Interview multiple professionals and choose those experienced with investment properties.",
  },
  {
    name: "Analyze Properties",
    text: "Run detailed financial analysis on potential properties: calculate cash flow, ROI, cap rate, and cash-on-cash return. Factor in all expenses (mortgage, taxes, insurance, maintenance, vacancy, property management). Use conservative estimates for income and liberal estimates for expenses.",
  },
  {
    name: "Make Offers",
    text: "Submit offers below asking price based on your analysis. Be prepared to walk away if numbers don't work. Include inspection contingency and appraisal contingency. Don't let emotions override your analysis.",
  },
  {
    name: "Conduct Due Diligence",
    text: "Perform thorough property inspection, review rent roll and operating history (if applicable), verify zoning and permits, research neighborhood crime and school ratings, and analyze comparable sales and rents.",
  },
  {
    name: "Secure Financing",
    text: "Get pre-approved before making offers. Compare rates from multiple lenders. Provide required documentation: tax returns, bank statements, employment verification. Lock in your rate when favorable.",
  },
  {
    name: "Close the Deal",
    text: "Review closing disclosure carefully, wire funds securely, complete final walkthrough, sign closing documents, receive keys. Set up utilities and insurance effective the closing date.",
  },
  {
    name: "Prepare for Tenants",
    text: "Make necessary repairs and improvements, deep clean the property, take professional photos, determine competitive rent price, create lease agreement, and market the property on multiple platforms.",
  },
  {
    name: "Screen and Select Tenants",
    text: "Require application with employment and rental history, run credit and background checks, verify income (3x rent minimum), check references from previous landlords, and review all findings before making a decision.",
  },
  {
    name: "Manage the Property",
    text: "Collect rent on time, respond promptly to maintenance requests, conduct periodic inspections, maintain detailed records of all income and expenses, and build cash reserves for vacancies and repairs.",
  },
];

export default function FirstTimeInvestorGuidePage() {
  const faqSchema = getFAQPageSchema(faqs);
  const howToSchema = getHowToSchema(
    "How to Start Investing in Rental Properties",
    "Complete step-by-step guide for first-time property investors to successfully purchase and manage their first rental property.",
    steps
  );

  return (
    <PageTransition>
      <StructuredData data={faqSchema} />
      <StructuredData data={howToSchema} />

      <article className="mx-auto max-w-[900px] px-4 py-6 sm:px-6 sm:py-8 md:px-16">
        <header className="mb-8 border-b border-[#E4E4E4] pb-6">
          <h1 className="mb-3 text-3xl font-bold text-[#191919] sm:text-4xl">
            First-Time Property Investor Guide
          </h1>
          <p className="text-lg text-[#606060]">
            Complete guide for first-time investors: fundamentals, financing, property selection, and risk management
          </p>
          <div className="mt-4 flex gap-4 text-sm text-[#606060]">
            <span>12 min read</span>
            <span>•</span>
            <span>Updated January 2025</span>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#191919]">Introduction to Property Investment</h2>
          <p className="text-[#3D3D3D]">
            Property investment offers a proven path to building long-term wealth through rental income and appreciation.
            Unlike stocks or bonds, real estate provides tangible assets you can improve, leverage with financing, and benefit
            from multiple income streams. This comprehensive guide will walk you through everything you need to know to make
            your first successful property investment.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-[#191919]">Why Invest in Rental Properties?</h2>
          <p className="text-[#3D3D3D]">
            Rental properties offer several unique advantages. First, they generate passive monthly income through rent payments.
            Second, properties typically appreciate over time, building equity. Third, mortgage payments are partially paid by
            tenants while you build ownership. Fourth, real estate provides significant tax benefits including depreciation,
            expense deductions, and 1031 exchanges. Finally, real estate has historically been less volatile than stocks,
            providing portfolio stability.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-[#191919]">Getting Started: Step-by-Step Process</h2>
          <ol className="list-decimal space-y-4 pl-6 text-[#3D3D3D]">
            {steps.map((step, index) => (
              <li key={index}>
                <strong className="text-[#191919]">{step.name}:</strong> {step.text}
              </li>
            ))}
          </ol>

          <h2 className="mt-8 text-2xl font-semibold text-[#191919]">Key Investment Metrics</h2>
          <p className="text-[#3D3D3D]">
            Understanding investment metrics is crucial for evaluating properties. <strong>Cash-on-cash return</strong> measures
            annual pre-tax cash flow divided by total cash invested. Aim for at least 8-10%. <strong>Cap rate</strong> (capitalization rate)
            is net operating income divided by property value, showing potential return independent of financing. Compare cap rates
            across similar properties. <strong>Total ROI</strong> combines cash flow and appreciation. A good total ROI is 10-15%
            annually. The <strong>1% rule</strong> suggests monthly rent should equal 1% of purchase price as a quick screening tool.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-[#191919]">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group rounded-lg border border-[#E4E4E4] p-4">
                <summary className="cursor-pointer font-semibold text-[#191919] group-open:mb-3">
                  {faq.question}
                </summary>
                <p className="text-[#3D3D3D]">{faq.answer}</p>
              </details>
            ))}
          </div>

          <h2 className="mt-8 text-2xl font-semibold text-[#191919]">Common Mistakes to Avoid</h2>
          <ul className="list-disc space-y-2 pl-6 text-[#3D3D3D]">
            <li>Underestimating expenses and overestimating income</li>
            <li>Skipping professional property inspection</li>
            <li>Not maintaining adequate cash reserves</li>
            <li>Making emotional decisions instead of following data</li>
            <li>Overleveraging with too much debt</li>
            <li>Ignoring location quality in favor of purchase price</li>
            <li>Inadequate tenant screening leading to problem renters</li>
            <li>Failing to account for vacancy periods</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-[#191919]">Next Steps</h2>
          <p className="text-[#3D3D3D]">
            Ready to begin your property investment journey? Start by educating yourself further, assessing your financial
            readiness, and researching your target market. Join local real estate investment groups, network with experienced
            investors, and begin analyzing properties in your area. Remember: successful investing requires patience, thorough
            analysis, and disciplined execution. Your first property is a learning experience—start conservatively and scale
            as you gain expertise.
          </p>
        </section>
      </article>
    </PageTransition>
  );
}
