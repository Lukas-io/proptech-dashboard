import { WithContext, Organization, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Expert Investment',
    url: 'https://expertinvestment.com',
    logo: 'https://expertinvestment.com/icons/logo.svg',
    description: 'Professional property investment analytics and portfolio management platform for real estate investors.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@expertinvestment.com',
    },
    sameAs: [
      'https://twitter.com/expertinvestment',
      'https://linkedin.com/company/expertinvestment',
    ],
  };
}

export function getSoftwareApplicationSchema(): WithContext<SoftwareApplication> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Expert Investment Dashboard',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Comprehensive property investment analytics dashboard for tracking ROI, cash flow, portfolio performance, and market trends.',
    featureList: [
      'Portfolio performance tracking',
      'ROI calculation and analysis',
      'Cash flow monitoring',
      'Property valuation tracking',
      'Market trend analysis',
      'Investor management',
      'Investment opportunity pipeline',
    ],
    screenshot: 'https://expertinvestment.com/og-images/home.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '342',
    },
  };
}

export function getFAQPageSchema(faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getHowToSchema(
  title: string,
  description: string,
  steps: Array<{ name: string; text: string }>
): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
