import { InvestmentProperty } from '@/types';

export const properties: InvestmentProperty[] = [
  {
    id: '1',
    title: 'Sunset Boulevard Duplex',
    description: 'Stunning duplex in the heart of Los Angeles with modern amenities and excellent rental income. Each unit features spacious living areas, updated kitchens, and private outdoor space. Prime location near entertainment district.',
    location: {
      address: '1234 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90028'
    },
    financials: {
      purchasePrice: 850000,
      currentValue: 1050000,
      appreciation: 23.5,
      monthlyRent: 6500,
      expenses: 2800,
      netCashFlow: 3700,
      capRate: 5.2,
      roi: 28.4,
      cashOnCashReturn: 16.8
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-03-15',
      propertyType: 'multi-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2400
    },
    performance: {
      totalReturn: 241600,
      annualizedReturn: 14.2,
      holdingPeriod: 34
    },
    images: ['/images/property-1.png', '/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Pool', 'Parking', 'Laundry', 'Gym', 'Pet-friendly'],
    neighborhood: {
      walkScore: 88,
      transitScore: 72,
      schools: [
        { name: 'Hollywood High School', distance: '0.8 mi', rating: 7 },
        { name: 'Selma Avenue Elementary', distance: '0.5 mi', rating: 8 }
      ],
      nearbyPlaces: ['Whole Foods', 'LA Fitness', 'Griffith Park', 'Hollywood Bowl']
    },
    virtualTourUrl: 'https://example.com/tour/1',
    agent: {
      name: 'Sarah Johnson',
      phone: '(310) 555-0123',
      email: 'sarah.johnson@expertinvestment.com',
      avatar: '/images/agent-1.png'
    },
    featured: true,
    isNew: false
  },
  {
    id: '2',
    title: 'Downtown Austin Condo',
    description: 'Modern high-rise condo in the vibrant downtown Austin area. Floor-to-ceiling windows with city views, walkable to entertainment district and tech companies. Perfect for young professionals.',
    location: {
      address: '500 Congress Ave #1204',
      city: 'Austin',
      state: 'TX',
      zip: '78701'
    },
    financials: {
      purchasePrice: 425000,
      currentValue: 495000,
      appreciation: 16.5,
      monthlyRent: 3200,
      expenses: 1400,
      netCashFlow: 1800,
      capRate: 5.1,
      roi: 22.1,
      cashOnCashReturn: 14.4
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2021-11-20',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1200
    },
    performance: {
      totalReturn: 93900,
      annualizedReturn: 10.8,
      holdingPeriod: 38
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Pool', 'Gym', 'Concierge', 'Rooftop Deck', 'Parking'],
    neighborhood: {
      walkScore: 95,
      transitScore: 88,
      schools: [
        { name: 'Austin High School', distance: '1.2 mi', rating: 9 },
        { name: 'Zilker Elementary', distance: '1.5 mi', rating: 8 }
      ],
      nearbyPlaces: ['Whole Foods HQ', '6th Street', 'Lady Bird Lake', 'Capitol']
    },
    agent: {
      name: 'Michael Chen',
      phone: '(512) 555-0187',
      email: 'michael.chen@expertinvestment.com'
    },
    featured: false,
    isNew: true
  },
  {
    id: '3',
    title: 'Cherry Creek Townhouse',
    description: 'Elegant townhouse in Denver\'s prestigious Cherry Creek neighborhood. Recently renovated with high-end finishes, private garage, and rooftop terrace with mountain views.',
    location: {
      address: '2890 Cherry Creek Dr',
      city: 'Denver',
      state: 'CO',
      zip: '80209'
    },
    financials: {
      purchasePrice: 675000,
      currentValue: 725000,
      appreciation: 7.4,
      monthlyRent: 4800,
      expenses: 2100,
      netCashFlow: 2700,
      capRate: 4.8,
      roi: 12.2,
      cashOnCashReturn: 9.6
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-06-10',
      propertyType: 'townhouse',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1850
    },
    performance: {
      totalReturn: 82400,
      annualizedReturn: 8.9,
      holdingPeriod: 20
    },
    images: ['/images/property-1.png', '/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Rooftop Deck', 'Storage', 'Pet-friendly'],
    neighborhood: {
      walkScore: 82,
      transitScore: 65,
      schools: [
        { name: 'Cherry Creek High', distance: '0.9 mi', rating: 9 },
        { name: 'Campus Middle School', distance: '1.1 mi', rating: 9 }
      ],
      nearbyPlaces: ['Cherry Creek Mall', 'Denver Country Club', 'Trader Joes']
    },
    agent: {
      name: 'Jennifer Martinez',
      phone: '(303) 555-0142',
      email: 'jennifer.martinez@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '4',
    title: 'Buckhead Single Family Home',
    description: 'Beautiful single-family home in Atlanta\'s upscale Buckhead neighborhood. Large backyard, updated kitchen, hardwood floors throughout. Excellent schools and safe community.',
    location: {
      address: '445 Peachtree Hills Ave',
      city: 'Atlanta',
      state: 'GA',
      zip: '30305'
    },
    financials: {
      purchasePrice: 550000,
      currentValue: 640000,
      appreciation: 16.4,
      monthlyRent: 4200,
      expenses: 1900,
      netCashFlow: 2300,
      capRate: 5.0,
      roi: 25.8,
      cashOnCashReturn: 15.1
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-08-22',
      propertyType: 'single-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2800
    },
    performance: {
      totalReturn: 141800,
      annualizedReturn: 12.4,
      holdingPeriod: 29
    },
    images: ['/images/property-1.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Backyard', 'Pet-friendly', 'Storage'],
    neighborhood: {
      walkScore: 56,
      transitScore: 48,
      schools: [
        { name: 'Buckhead Prep', distance: '0.4 mi', rating: 10 },
        { name: 'Morris Brandon Elementary', distance: '0.6 mi', rating: 9 }
      ],
      nearbyPlaces: ['Lenox Square', 'Piedmont Park', 'Whole Foods', 'Chastain Park']
    },
    agent: {
      name: 'Robert Williams',
      phone: '(404) 555-0193',
      email: 'robert.williams@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '5',
    title: 'Portland Pearl District Loft',
    description: 'Industrial-chic loft in Portland\'s trendy Pearl District. Exposed brick, high ceilings, and modern finishes. Walking distance to restaurants, galleries, and public transit.',
    location: {
      address: '1120 NW 12th Ave #305',
      city: 'Portland',
      state: 'OR',
      zip: '97209'
    },
    financials: {
      purchasePrice: 475000,
      currentValue: 510000,
      appreciation: 7.4,
      monthlyRent: 3400,
      expenses: 1500,
      netCashFlow: 1900,
      capRate: 4.8,
      roi: 14.7,
      cashOnCashReturn: 11.2
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-02-14',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1350
    },
    performance: {
      totalReturn: 69900,
      annualizedReturn: 9.1,
      holdingPeriod: 24
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Gym', 'Bike Storage', 'Pet-friendly', 'Parking'],
    neighborhood: {
      walkScore: 98,
      transitScore: 95,
      schools: [
        { name: 'Portland High School', distance: '2.1 mi', rating: 7 },
        { name: 'Chapman Elementary', distance: '1.8 mi', rating: 8 }
      ],
      nearbyPlaces: ['Powell\'s Books', 'Portland Saturday Market', 'Jamison Square', 'Streetcar']
    },
    agent: {
      name: 'Emily Foster',
      phone: '(503) 555-0176',
      email: 'emily.foster@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '6',
    title: 'Miami Beach Oceanview Condo',
    description: 'Luxurious oceanfront condo with breathtaking Atlantic views. Resort-style amenities, updated interior, and direct beach access. Prime South Beach location.',
    location: {
      address: '3801 Collins Ave #1502',
      city: 'Miami Beach',
      state: 'FL',
      zip: '33140'
    },
    financials: {
      purchasePrice: 725000,
      currentValue: 810000,
      appreciation: 11.7,
      monthlyRent: 5200,
      expenses: 2400,
      netCashFlow: 2800,
      capRate: 4.6,
      roi: 17.4,
      cashOnCashReturn: 13.1
    },
    metrics: {
      occupancyRate: 95,
      acquisitionDate: '2022-12-05',
      propertyType: 'condo',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1650
    },
    performance: {
      totalReturn: 126200,
      annualizedReturn: 10.2,
      holdingPeriod: 26
    },
    images: ['/images/property-1.png', '/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Pool', 'Beach Access', 'Gym', 'Concierge', 'Valet Parking', 'Spa'],
    neighborhood: {
      walkScore: 91,
      transitScore: 76,
      schools: [
        { name: 'South Pointe Elementary', distance: '1.2 mi', rating: 7 },
        { name: 'Nautilus Middle', distance: '2.5 mi', rating: 6 }
      ],
      nearbyPlaces: ['Lincoln Road', 'Ocean Drive', 'Bass Museum', 'Whole Foods']
    },
    virtualTourUrl: 'https://example.com/tour/6',
    agent: {
      name: 'Carlos Rodriguez',
      phone: '(305) 555-0198',
      email: 'carlos.rodriguez@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '7',
    title: 'Seattle Capitol Hill Fourplex',
    description: 'Well-maintained fourplex in Seattle\'s vibrant Capitol Hill neighborhood. Each unit fully renovated with modern amenities. Strong rental demand and excellent cash flow.',
    location: {
      address: '1515 E Republican St',
      city: 'Seattle',
      state: 'WA',
      zip: '98112'
    },
    financials: {
      purchasePrice: 1200000,
      currentValue: 1380000,
      appreciation: 15.0,
      monthlyRent: 9200,
      expenses: 3800,
      netCashFlow: 5400,
      capRate: 5.4,
      roi: 24.0,
      cashOnCashReturn: 18.0
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2021-09-18',
      propertyType: 'multi-family',
      bedsCount: 8,
      bathsCount: 4,
      sqft: 4200
    },
    performance: {
      totalReturn: 288000,
      annualizedReturn: 13.5,
      holdingPeriod: 40
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Laundry', 'Parking', 'Storage', 'Pet-friendly'],
    neighborhood: {
      walkScore: 94,
      transitScore: 89,
      schools: [
        { name: 'Stevens Elementary', distance: '0.3 mi', rating: 8 },
        { name: 'Meany Middle School', distance: '0.7 mi', rating: 7 }
      ],
      nearbyPlaces: ['Volunteer Park', 'Pike-Pine Corridor', 'Cal Anderson Park', 'Broadway']
    },
    agent: {
      name: 'David Park',
      phone: '(206) 555-0165',
      email: 'david.park@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '8',
    title: 'Phoenix Scottsdale Ranch House',
    description: 'Desert contemporary home with mountain views. Open floor plan, private pool, and low-maintenance landscaping. Located in desirable North Scottsdale.',
    location: {
      address: '8520 E McDowell Rd',
      city: 'Scottsdale',
      state: 'AZ',
      zip: '85257'
    },
    financials: {
      purchasePrice: 485000,
      currentValue: 565000,
      appreciation: 16.5,
      monthlyRent: 3600,
      expenses: 1600,
      netCashFlow: 2000,
      capRate: 4.9,
      roi: 23.5,
      cashOnCashReturn: 14.8
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-05-30',
      propertyType: 'single-family',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 2100
    },
    performance: {
      totalReturn: 114000,
      annualizedReturn: 11.8,
      holdingPeriod: 32
    },
    images: ['/images/property-1.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Pool', 'Parking', 'Backyard', 'Pet-friendly'],
    neighborhood: {
      walkScore: 42,
      transitScore: 35,
      schools: [
        { name: 'Desert Canyon Elementary', distance: '0.6 mi', rating: 9 },
        { name: 'Pinnacle High School', distance: '1.8 mi', rating: 8 }
      ],
      nearbyPlaces: ['Scottsdale Fashion Square', 'McDowell Sonoran Preserve', 'Kierland Commons']
    },
    agent: {
      name: 'Amanda Sullivan',
      phone: '(480) 555-0154',
      email: 'amanda.sullivan@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '9',
    title: 'Nashville Germantown Duplex',
    description: 'Charming historic duplex in Nashville\'s trendy Germantown neighborhood. Renovated with original character preserved. Walking distance to downtown and hot spots.',
    location: {
      address: '1025 Monroe St',
      city: 'Nashville',
      state: 'TN',
      zip: '37208'
    },
    financials: {
      purchasePrice: 620000,
      currentValue: 745000,
      appreciation: 20.2,
      monthlyRent: 5000,
      expenses: 2200,
      netCashFlow: 2800,
      capRate: 5.4,
      roi: 30.5,
      cashOnCashReturn: 16.3
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2021-07-12',
      propertyType: 'multi-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2600
    },
    performance: {
      totalReturn: 189200,
      annualizedReturn: 15.1,
      holdingPeriod: 42
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Parking', 'Laundry', 'Pet-friendly', 'Backyard'],
    neighborhood: {
      walkScore: 87,
      transitScore: 54,
      schools: [
        { name: 'Germantown Elementary', distance: '0.4 mi', rating: 8 },
        { name: 'Maplewood High School', distance: '2.1 mi', rating: 7 }
      ],
      nearbyPlaces: ['Bicentennial Park', 'Broadway', 'Farmers Market', 'Music Row']
    },
    agent: {
      name: 'Jessica Taylor',
      phone: '(615) 555-0189',
      email: 'jessica.taylor@expertinvestment.com'
    },
    featured: false,
    isNew: true
  },
  {
    id: '10',
    title: 'Boston Back Bay Brownstone Unit',
    description: 'Historic brownstone unit in Boston\'s prestigious Back Bay. High ceilings, original details, and modern updates. Prime Commonwealth Avenue location.',
    location: {
      address: '225 Commonwealth Ave #2',
      city: 'Boston',
      state: 'MA',
      zip: '02116'
    },
    financials: {
      purchasePrice: 875000,
      currentValue: 925000,
      appreciation: 5.7,
      monthlyRent: 5800,
      expenses: 2600,
      netCashFlow: 3200,
      capRate: 4.4,
      roi: 11.1,
      cashOnCashReturn: 10.5
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-09-01',
      propertyType: 'condo',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1900
    },
    performance: {
      totalReturn: 97100,
      annualizedReturn: 8.4,
      holdingPeriod: 17
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Storage', 'Laundry'],
    neighborhood: {
      walkScore: 99,
      transitScore: 100,
      schools: [
        { name: 'Boston Latin School', distance: '1.5 mi', rating: 10 },
        { name: 'Snowden International', distance: '0.9 mi', rating: 7 }
      ],
      nearbyPlaces: ['Newbury Street', 'Public Garden', 'Copley Square', 'Prudential Center']
    },
    agent: {
      name: 'Thomas Anderson',
      phone: '(617) 555-0172',
      email: 'thomas.anderson@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '11',
    title: 'Charlotte SouthPark Office Space',
    description: 'Prime commercial office space in Charlotte\'s upscale SouthPark district. Class A building with modern amenities. Strong tenant in place with long-term lease.',
    location: {
      address: '6200 Fairview Rd Suite 120',
      city: 'Charlotte',
      state: 'NC',
      zip: '28210'
    },
    financials: {
      purchasePrice: 950000,
      currentValue: 980000,
      appreciation: 3.2,
      monthlyRent: 7200,
      expenses: 3200,
      netCashFlow: 4000,
      capRate: 5.1,
      roi: 8.4,
      cashOnCashReturn: 12.6
    },
    metrics: {
      occupancyRate: 90,
      acquisitionDate: '2023-11-15',
      propertyType: 'commercial',
      bedsCount: 0,
      bathsCount: 2,
      sqft: 3500
    },
    performance: {
      totalReturn: 80000,
      annualizedReturn: 7.2,
      holdingPeriod: 15
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Parking', 'Gym', 'Conference Rooms', 'Security'],
    neighborhood: {
      walkScore: 62,
      transitScore: 48,
      schools: [],
      nearbyPlaces: ['SouthPark Mall', 'Symphony Park', 'Restaurants']
    },
    agent: {
      name: 'Michelle Brooks',
      phone: '(704) 555-0183',
      email: 'michelle.brooks@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '12',
    title: 'San Diego La Jolla Cottage',
    description: 'Coastal cottage in La Jolla with ocean breezes and village charm. Walking distance to beaches, shops, and restaurants. Excellent vacation rental potential.',
    location: {
      address: '7420 Olivetas Ave',
      city: 'La Jolla',
      state: 'CA',
      zip: '92037'
    },
    financials: {
      purchasePrice: 1150000,
      currentValue: 1280000,
      appreciation: 11.3,
      monthlyRent: 7800,
      expenses: 3400,
      netCashFlow: 4400,
      capRate: 4.6,
      roi: 16.8,
      cashOnCashReturn: 13.8
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-10-08',
      propertyType: 'single-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2900
    },
    performance: {
      totalReturn: 193200,
      annualizedReturn: 11.4,
      holdingPeriod: 28
    },
    images: ['/images/property-1.png', '/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Backyard', 'Pet-friendly', 'Ocean View'],
    neighborhood: {
      walkScore: 78,
      transitScore: 52,
      schools: [
        { name: 'La Jolla Elementary', distance: '0.5 mi', rating: 9 },
        { name: 'Muirlands Middle School', distance: '0.8 mi', rating: 9 }
      ],
      nearbyPlaces: ['La Jolla Cove', 'La Jolla Village', 'Torrey Pines', 'UCSD']
    },
    virtualTourUrl: 'https://example.com/tour/12',
    agent: {
      name: 'Lisa Chang',
      phone: '(858) 555-0191',
      email: 'lisa.chang@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '13',
    title: 'Dallas Uptown High-Rise',
    description: 'Modern high-rise condo in Dallas Uptown district. Sleek finishes, city views, and walkable urban lifestyle. Great rental demand from young professionals.',
    location: {
      address: '2900 McKinnon St #1805',
      city: 'Dallas',
      state: 'TX',
      zip: '75201'
    },
    financials: {
      purchasePrice: 385000,
      currentValue: 425000,
      appreciation: 10.4,
      monthlyRent: 2900,
      expenses: 1300,
      netCashFlow: 1600,
      capRate: 5.0,
      roi: 20.8,
      cashOnCashReturn: 14.9
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-04-22',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1100
    },
    performance: {
      totalReturn: 80100,
      annualizedReturn: 10.2,
      holdingPeriod: 22
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'under-contract',
    amenities: ['Pool', 'Gym', 'Concierge', 'Parking', 'Rooftop Deck'],
    neighborhood: {
      walkScore: 93,
      transitScore: 71,
      schools: [
        { name: 'Travis Elementary', distance: '1.4 mi', rating: 7 },
        { name: 'Woodrow Wilson High', distance: '2.8 mi', rating: 8 }
      ],
      nearbyPlaces: ['Katy Trail', 'West Village', 'Klyde Warren Park', 'Arts District']
    },
    agent: {
      name: 'Brandon Mitchell',
      phone: '(214) 555-0168',
      email: 'brandon.mitchell@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '14',
    title: 'Raleigh Research Triangle Townhouse',
    description: 'Contemporary townhouse near Research Triangle Park. Modern finishes, open layout, and proximity to major tech employers. Strong tenant pool.',
    location: {
      address: '104 Park Summit Blvd',
      city: 'Raleigh',
      state: 'NC',
      zip: '27615'
    },
    financials: {
      purchasePrice: 395000,
      currentValue: 420000,
      appreciation: 6.3,
      monthlyRent: 2800,
      expenses: 1200,
      netCashFlow: 1600,
      capRate: 4.9,
      roi: 12.6,
      cashOnCashReturn: 11.6
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-07-18',
      propertyType: 'townhouse',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1650
    },
    performance: {
      totalReturn: 49800,
      annualizedReturn: 8.8,
      holdingPeriod: 19
    },
    images: ['/images/property-1.png', '/images/property-3.png'],
    status: 'analysis',
    amenities: ['Parking', 'Pet-friendly', 'Storage'],
    neighborhood: {
      walkScore: 48,
      transitScore: 42,
      schools: [
        { name: 'Davis Drive Elementary', distance: '0.9 mi', rating: 9 },
        { name: 'Brentwood Middle', distance: '1.3 mi', rating: 8 }
      ],
      nearbyPlaces: ['Research Triangle Park', 'North Hills', 'Crabtree Mall']
    },
    agent: {
      name: 'Rachel Green',
      phone: '(919) 555-0177',
      email: 'rachel.green@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '15',
    title: 'Tampa Bay Waterfront Condo',
    description: 'Stunning waterfront condo with panoramic bay views. Updated interior, resort amenities, and walking distance to downtown Tampa. Perfect for professionals.',
    location: {
      address: '449 Bayshore Blvd #902',
      city: 'Tampa',
      state: 'FL',
      zip: '33606'
    },
    financials: {
      purchasePrice: 545000,
      currentValue: 610000,
      appreciation: 11.9,
      monthlyRent: 3900,
      expenses: 1700,
      netCashFlow: 2200,
      capRate: 4.8,
      roi: 19.3,
      cashOnCashReturn: 14.5
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-07-15',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1450
    },
    performance: {
      totalReturn: 105200,
      annualizedReturn: 10.8,
      holdingPeriod: 30
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Pool', 'Gym', 'Concierge', 'Marina', 'Parking'],
    neighborhood: {
      walkScore: 75,
      transitScore: 58,
      schools: [
        { name: 'Gorrie Elementary', distance: '1.1 mi', rating: 8 },
        { name: 'Plant High School', distance: '1.6 mi', rating: 9 }
      ],
      nearbyPlaces: ['Hyde Park Village', 'Bayshore Boulevard', 'Tampa Riverwalk', 'Armature Works']
    },
    agent: {
      name: 'Christopher Davis',
      phone: '(813) 555-0184',
      email: 'christopher.davis@expertinvestment.com'
    },
    featured: false,
    isNew: true
  },
  {
    id: '16',
    title: 'San Francisco SoMa Loft',
    description: 'Industrial loft in San Francisco\'s bustling SoMa district. Tech hub location with exposed beams, concrete floors, and modern amenities. Walk to top employers.',
    location: {
      address: '88 Howard St #401',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105'
    },
    financials: {
      purchasePrice: 950000,
      currentValue: 1025000,
      appreciation: 7.9,
      monthlyRent: 6800,
      expenses: 3100,
      netCashFlow: 3700,
      capRate: 4.3,
      roi: 13.8,
      cashOnCashReturn: 11.7
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-02-11',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1500
    },
    performance: {
      totalReturn: 131100,
      annualizedReturn: 9.2,
      holdingPeriod: 35
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Gym', 'Rooftop Deck', 'Bike Storage', 'Parking'],
    neighborhood: {
      walkScore: 99,
      transitScore: 100,
      schools: [
        { name: 'Bessie Carmichael Elementary', distance: '0.6 mi', rating: 6 },
        { name: 'Lowell High School', distance: '3.2 mi', rating: 10 }
      ],
      nearbyPlaces: ['Salesforce Park', 'Ferry Building', 'AT&T Park', 'MOMA']
    },
    virtualTourUrl: 'https://example.com/tour/16',
    agent: {
      name: 'Kevin Nguyen',
      phone: '(415) 555-0196',
      email: 'kevin.nguyen@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '17',
    title: 'Brooklyn Williamsburg Apartment',
    description: 'Trendy Williamsburg apartment with skyline views. Modern kitchen, hardwood floors, and abundant natural light. Prime location near subway and nightlife.',
    location: {
      address: '285 Kent Ave #12B',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11249'
    },
    financials: {
      purchasePrice: 825000,
      currentValue: 895000,
      appreciation: 8.5,
      monthlyRent: 5600,
      expenses: 2500,
      netCashFlow: 3100,
      capRate: 4.5,
      roi: 13.9,
      cashOnCashReturn: 11.3
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-01-20',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1300
    },
    performance: {
      totalReturn: 114600,
      annualizedReturn: 9.5,
      holdingPeriod: 25
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Gym', 'Rooftop Deck', 'Doorman', 'Bike Storage'],
    neighborhood: {
      walkScore: 99,
      transitScore: 100,
      schools: [
        { name: 'PS 84', distance: '0.4 mi', rating: 7 },
        { name: 'MS 50', distance: '0.9 mi', rating: 6 }
      ],
      nearbyPlaces: ['Bedford Ave', 'East River State Park', 'Smorgasburg', 'Music Hall']
    },
    agent: {
      name: 'Stephanie Kim',
      phone: '(718) 555-0179',
      email: 'stephanie.kim@expertinvestment.com'
    },
    featured: false,
    isNew: true
  },
  {
    id: '18',
    title: 'Minneapolis Uptown Duplex',
    description: 'Charming duplex in Minneapolis\' vibrant Uptown neighborhood. Both units fully leased, excellent cash flow, and near lakes and entertainment.',
    location: {
      address: '2801 Hennepin Ave',
      city: 'Minneapolis',
      state: 'MN',
      zip: '55408'
    },
    financials: {
      purchasePrice: 485000,
      currentValue: 535000,
      appreciation: 10.3,
      monthlyRent: 3800,
      expenses: 1650,
      netCashFlow: 2150,
      capRate: 5.3,
      roi: 20.6,
      cashOnCashReturn: 15.9
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-04-08',
      propertyType: 'multi-family',
      bedsCount: 4,
      bathsCount: 2,
      sqft: 2200
    },
    performance: {
      totalReturn: 100000,
      annualizedReturn: 11.5,
      holdingPeriod: 33
    },
    images: ['/images/property-1.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Laundry', 'Pet-friendly', 'Storage'],
    neighborhood: {
      walkScore: 92,
      transitScore: 74,
      schools: [
        { name: 'Kenwood Elementary', distance: '0.7 mi', rating: 8 },
        { name: 'Southwest High', distance: '1.5 mi', rating: 8 }
      ],
      nearbyPlaces: ['Lake Calhoun', 'Uptown Theater', 'Chain of Lakes', 'Lyn-Lake']
    },
    agent: {
      name: 'Mark Johnson',
      phone: '(612) 555-0186',
      email: 'mark.johnson@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '19',
    title: 'Philadelphia Rittenhouse Square Condo',
    description: 'Elegant condo overlooking Rittenhouse Square in Philadelphia. Pre-war building with modern updates, doorman service, and prime location.',
    location: {
      address: '1830 Rittenhouse Sq #8C',
      city: 'Philadelphia',
      state: 'PA',
      zip: '19103'
    },
    financials: {
      purchasePrice: 625000,
      currentValue: 680000,
      appreciation: 8.8,
      monthlyRent: 4500,
      expenses: 2000,
      netCashFlow: 2500,
      capRate: 4.8,
      roi: 17.6,
      cashOnCashReturn: 14.4
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-11-03',
      propertyType: 'condo',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1700
    },
    performance: {
      totalReturn: 110000,
      annualizedReturn: 10.3,
      holdingPeriod: 27
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Doorman', 'Gym', 'Storage', 'Parking'],
    neighborhood: {
      walkScore: 99,
      transitScore: 97,
      schools: [
        { name: 'Greenfield Elementary', distance: '0.5 mi', rating: 9 },
        { name: 'Central High School', distance: '2.1 mi', rating: 9 }
      ],
      nearbyPlaces: ['Rittenhouse Square', 'Walnut Street', 'University of Penn', 'Reading Terminal']
    },
    agent: {
      name: 'Nicole Patterson',
      phone: '(215) 555-0173',
      email: 'nicole.patterson@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '20',
    title: 'Salt Lake City Sugar House Bungalow',
    description: 'Renovated craftsman bungalow in Salt Lake\'s trendy Sugar House district. Modern interior with original charm, fenced yard, and walk to shops.',
    location: {
      address: '1155 E Wilmington Ave',
      city: 'Salt Lake City',
      state: 'UT',
      zip: '84106'
    },
    financials: {
      purchasePrice: 425000,
      currentValue: 475000,
      appreciation: 11.8,
      monthlyRent: 3200,
      expenses: 1400,
      netCashFlow: 1800,
      capRate: 5.1,
      roi: 22.4,
      cashOnCashReturn: 15.2
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-03-14',
      propertyType: 'single-family',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1800
    },
    performance: {
      totalReturn: 95200,
      annualizedReturn: 11.6,
      holdingPeriod: 23
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Parking', 'Backyard', 'Pet-friendly', 'Storage'],
    neighborhood: {
      walkScore: 78,
      transitScore: 61,
      schools: [
        { name: 'Hawthorne Elementary', distance: '0.3 mi', rating: 8 },
        { name: 'Highland High School', distance: '1.2 mi', rating: 8 }
      ],
      nearbyPlaces: ['Sugar House Park', 'Highland Drive', '2100 South', 'Westminster College']
    },
    agent: {
      name: 'Ryan Cooper',
      phone: '(801) 555-0167',
      email: 'ryan.cooper@expertinvestment.com'
    },
    featured: false,
    isNew: true
  },
  {
    id: '21',
    title: 'San Antonio River Walk Apartment',
    description: 'Downtown apartment steps from San Antonio River Walk. Recently updated with contemporary finishes. Great for short-term rentals and strong tourism demand.',
    location: {
      address: '112 College St #305',
      city: 'San Antonio',
      state: 'TX',
      zip: '78205'
    },
    financials: {
      purchasePrice: 295000,
      currentValue: 335000,
      appreciation: 13.6,
      monthlyRent: 2400,
      expenses: 1050,
      netCashFlow: 1350,
      capRate: 5.5,
      roi: 27.1,
      cashOnCashReturn: 16.4
    },
    metrics: {
      occupancyRate: 95,
      acquisitionDate: '2023-05-19',
      propertyType: 'condo',
      bedsCount: 1,
      bathsCount: 1,
      sqft: 850
    },
    performance: {
      totalReturn: 80000,
      annualizedReturn: 13.2,
      holdingPeriod: 21
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Pool', 'Gym', 'Parking', 'Concierge'],
    neighborhood: {
      walkScore: 96,
      transitScore: 68,
      schools: [
        { name: 'Hawthorne Academy', distance: '1.3 mi', rating: 7 },
        { name: 'Lanier High School', distance: '2.4 mi', rating: 6 }
      ],
      nearbyPlaces: ['River Walk', 'Alamo', 'Market Square', 'Pearl District']
    },
    agent: {
      name: 'Maria Gonzalez',
      phone: '(210) 555-0192',
      email: 'maria.gonzalez@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '22',
    title: 'Columbus Short North Townhouse',
    description: 'Modern townhouse in Columbus\' artistic Short North district. Three levels of living space, rooftop deck, and walking distance to galleries and restaurants.',
    location: {
      address: '89 W 3rd Ave',
      city: 'Columbus',
      state: 'OH',
      zip: '43201'
    },
    financials: {
      purchasePrice: 385000,
      currentValue: 425000,
      appreciation: 10.4,
      monthlyRent: 2900,
      expenses: 1250,
      netCashFlow: 1650,
      capRate: 5.4,
      roi: 20.4,
      cashOnCashReturn: 15.4
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-09-25',
      propertyType: 'townhouse',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1750
    },
    performance: {
      totalReturn: 78400,
      annualizedReturn: 11.8,
      holdingPeriod: 28
    },
    images: ['/images/property-1.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Rooftop Deck', 'Pet-friendly'],
    neighborhood: {
      walkScore: 91,
      transitScore: 72,
      schools: [
        { name: 'Columbus Alternative High', distance: '0.4 mi', rating: 7 },
        { name: 'Indianola Informal K-8', distance: '1.1 mi', rating: 8 }
      ],
      nearbyPlaces: ['Short North Arts District', 'North Market', 'OSU Campus', 'Goodale Park']
    },
    agent: {
      name: 'James Miller',
      phone: '(614) 555-0181',
      email: 'james.miller@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '23',
    title: 'Las Vegas Henderson Single Family',
    description: 'Spacious single-family home in desirable Henderson suburb. Pool, solar panels, and mountain views. Strong rental market from relocating professionals.',
    location: {
      address: '2450 Desert Bloom Dr',
      city: 'Henderson',
      state: 'NV',
      zip: '89052'
    },
    financials: {
      purchasePrice: 465000,
      currentValue: 515000,
      appreciation: 10.8,
      monthlyRent: 3400,
      expenses: 1500,
      netCashFlow: 1900,
      capRate: 4.9,
      roi: 20.9,
      cashOnCashReturn: 14.7
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-06-12',
      propertyType: 'single-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2600
    },
    performance: {
      totalReturn: 97200,
      annualizedReturn: 11.2,
      holdingPeriod: 31
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Pool', 'Solar Panels', 'Parking', 'Backyard'],
    neighborhood: {
      walkScore: 38,
      transitScore: 32,
      schools: [
        { name: 'Vanderburg Elementary', distance: '0.6 mi', rating: 8 },
        { name: 'Foothill High School', distance: '1.9 mi', rating: 8 }
      ],
      nearbyPlaces: ['Green Valley Ranch', 'Lake Las Vegas', 'Galleria Mall', 'District at Green Valley']
    },
    agent: {
      name: 'Vincent Torres',
      phone: '(702) 555-0174',
      email: 'vincent.torres@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '24',
    title: 'Indianapolis Broad Ripple Duplex',
    description: 'Well-maintained duplex in Indianapolis\' lively Broad Ripple neighborhood. Both units renovated, separate utilities, and strong rental history.',
    location: {
      address: '6215 N Winthrop Ave',
      city: 'Indianapolis',
      state: 'IN',
      zip: '46220'
    },
    financials: {
      purchasePrice: 325000,
      currentValue: 365000,
      appreciation: 12.3,
      monthlyRent: 2600,
      expenses: 1150,
      netCashFlow: 1450,
      capRate: 5.4,
      roi: 24.6,
      cashOnCashReturn: 16.0
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-08-07',
      propertyType: 'multi-family',
      bedsCount: 4,
      bathsCount: 2,
      sqft: 2000
    },
    performance: {
      totalReturn: 80000,
      annualizedReturn: 12.8,
      holdingPeriod: 18
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Parking', 'Laundry', 'Pet-friendly', 'Backyard'],
    neighborhood: {
      walkScore: 82,
      transitScore: 58,
      schools: [
        { name: 'Broad Ripple Magnet High', distance: '0.7 mi', rating: 8 },
        { name: 'School 80', distance: '1.2 mi', rating: 7 }
      ],
      nearbyPlaces: ['Broad Ripple Village', 'Monon Trail', 'White River', 'Butler University']
    },
    agent: {
      name: 'Angela White',
      phone: '(317) 555-0188',
      email: 'angela.white@expertinvestment.com'
    },
    featured: false,
    isNew: true
  },
  {
    id: '25',
    title: 'Tucson Foothills Casita',
    description: 'Desert modern home with casita in Tucson Foothills. Stunning mountain views, outdoor living space, and separate rental unit provides extra income.',
    location: {
      address: '4850 N Camino De Oeste',
      city: 'Tucson',
      state: 'AZ',
      zip: '85745'
    },
    financials: {
      purchasePrice: 535000,
      currentValue: 585000,
      appreciation: 9.3,
      monthlyRent: 3900,
      expenses: 1700,
      netCashFlow: 2200,
      capRate: 4.9,
      roi: 18.7,
      cashOnCashReturn: 14.8
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-12-18',
      propertyType: 'single-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2500
    },
    performance: {
      totalReturn: 100200,
      annualizedReturn: 10.5,
      holdingPeriod: 26
    },
    images: ['/images/property-1.png', '/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Pool', 'Casita', 'Mountain Views', 'Parking', 'Pet-friendly'],
    neighborhood: {
      walkScore: 24,
      transitScore: 18,
      schools: [
        { name: 'Canyon View Elementary', distance: '1.4 mi', rating: 9 },
        { name: 'Canyon Del Oro High', distance: '2.6 mi', rating: 8 }
      ],
      nearbyPlaces: ['Catalina State Park', 'La Encantada', 'Sabino Canyon', 'Oro Valley']
    },
    virtualTourUrl: 'https://example.com/tour/25',
    agent: {
      name: 'Daniel Ramirez',
      phone: '(520) 555-0195',
      email: 'daniel.ramirez@expertinvestment.com'
    },
    featured: true,
    isNew: false
  },
  {
    id: '26',
    title: 'Kansas City Crossroads Arts District Loft',
    description: 'Converted warehouse loft in Kansas City\'s Crossroads Arts District. Soaring ceilings, exposed brick, and urban lifestyle. Walk to First Fridays.',
    location: {
      address: '1728 Baltimore Ave #401',
      city: 'Kansas City',
      state: 'MO',
      zip: '64108'
    },
    financials: {
      purchasePrice: 295000,
      currentValue: 325000,
      appreciation: 10.2,
      monthlyRent: 2300,
      expenses: 1000,
      netCashFlow: 1300,
      capRate: 5.3,
      roi: 20.3,
      cashOnCashReturn: 15.8
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-10-05',
      propertyType: 'condo',
      bedsCount: 1,
      bathsCount: 1,
      sqft: 1100
    },
    performance: {
      totalReturn: 60000,
      annualizedReturn: 11.4,
      holdingPeriod: 16
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Gym', 'Bike Storage', 'Parking', 'Rooftop Deck'],
    neighborhood: {
      walkScore: 94,
      transitScore: 71,
      schools: [
        { name: 'Foreign Language Academy', distance: '1.8 mi', rating: 7 },
        { name: 'Lincoln College Prep', distance: '2.3 mi', rating: 9 }
      ],
      nearbyPlaces: ['Crossroads Arts District', 'Union Station', 'Power & Light', 'River Market']
    },
    agent: {
      name: 'Laura Bennett',
      phone: '(816) 555-0169',
      email: 'laura.bennett@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '27',
    title: 'Albuquerque Old Town Adobe',
    description: 'Historic adobe-style home near Albuquerque Old Town. Southwestern charm with modern updates, enclosed courtyard, and kiva fireplace. Unique character property.',
    location: {
      address: '318 Romero St NW',
      city: 'Albuquerque',
      state: 'NM',
      zip: '87104'
    },
    financials: {
      purchasePrice: 375000,
      currentValue: 415000,
      appreciation: 10.7,
      monthlyRent: 2800,
      expenses: 1250,
      netCashFlow: 1550,
      capRate: 5.0,
      roi: 21.3,
      cashOnCashReturn: 14.9
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2023-02-28',
      propertyType: 'single-family',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1900
    },
    performance: {
      totalReturn: 80000,
      annualizedReturn: 11.4,
      holdingPeriod: 23
    },
    images: ['/images/property-1.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Courtyard', 'Parking', 'Kiva Fireplace', 'Pet-friendly'],
    neighborhood: {
      walkScore: 72,
      transitScore: 54,
      schools: [
        { name: 'Duranes Elementary', distance: '0.8 mi', rating: 6 },
        { name: 'Valley High School', distance: '2.2 mi', rating: 7 }
      ],
      nearbyPlaces: ['Old Town Plaza', 'ABQ BioPark', 'Sawmill Market', 'Rio Grande']
    },
    agent: {
      name: 'Sofia Hernandez',
      phone: '(505) 555-0178',
      email: 'sofia.hernandez@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '28',
    title: 'Richmond Museum District Rowhouse',
    description: 'Charming historic rowhouse in Richmond\'s Museum District. Original details preserved, updated systems, and walkable to VCU and museums. Strong student rental market.',
    location: {
      address: '2905 Monument Ave',
      city: 'Richmond',
      state: 'VA',
      zip: '23221'
    },
    financials: {
      purchasePrice: 395000,
      currentValue: 435000,
      appreciation: 10.1,
      monthlyRent: 2900,
      expenses: 1300,
      netCashFlow: 1600,
      capRate: 5.3,
      roi: 20.3,
      cashOnCashReturn: 14.6
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-10-22',
      propertyType: 'townhouse',
      bedsCount: 3,
      bathsCount: 2,
      sqft: 1800
    },
    performance: {
      totalReturn: 80200,
      annualizedReturn: 11.2,
      holdingPeriod: 27
    },
    images: ['/images/property-1.png', '/images/property-2.png'],
    status: 'active',
    amenities: ['Parking', 'Backyard', 'Pet-friendly', 'Storage'],
    neighborhood: {
      walkScore: 88,
      transitScore: 64,
      schools: [
        { name: 'Binford Middle School', distance: '1.1 mi', rating: 7 },
        { name: 'Maggie Walker High', distance: '2.8 mi', rating: 10 }
      ],
      nearbyPlaces: ['VMFA', 'Carytown', 'VCU', 'Byrd Theatre']
    },
    agent: {
      name: 'Patrick O\'Brien',
      phone: '(804) 555-0185',
      email: 'patrick.obrien@expertinvestment.com'
    },
    featured: false,
    isNew: false
  },
  {
    id: '29',
    title: 'New Orleans French Quarter Apartment',
    description: 'Historic apartment in the iconic French Quarter. Wrought-iron balcony overlooking Royal Street. Perfect for short-term rentals with strong tourism demand.',
    location: {
      address: '527 Royal St #3',
      city: 'New Orleans',
      state: 'LA',
      zip: '70130'
    },
    financials: {
      purchasePrice: 485000,
      currentValue: 545000,
      appreciation: 12.4,
      monthlyRent: 3600,
      expenses: 1600,
      netCashFlow: 2000,
      capRate: 5.0,
      roi: 24.7,
      cashOnCashReturn: 14.8
    },
    metrics: {
      occupancyRate: 90,
      acquisitionDate: '2023-04-03',
      propertyType: 'condo',
      bedsCount: 2,
      bathsCount: 2,
      sqft: 1250
    },
    performance: {
      totalReturn: 120000,
      annualizedReturn: 13.6,
      holdingPeriod: 22
    },
    images: ['/images/property-1.png', '/images/property-2.png', '/images/property-3.png'],
    status: 'active',
    amenities: ['Balcony', 'Historic Building', 'Courtyard'],
    neighborhood: {
      walkScore: 99,
      transitScore: 82,
      schools: [
        { name: 'Lusher Charter School', distance: '2.1 mi', rating: 9 },
        { name: 'Ben Franklin High', distance: '3.4 mi', rating: 10 }
      ],
      nearbyPlaces: ['Bourbon Street', 'Jackson Square', 'French Market', 'Cafe Du Monde']
    },
    virtualTourUrl: 'https://example.com/tour/29',
    agent: {
      name: 'Gabrielle Dubois',
      phone: '(504) 555-0194',
      email: 'gabrielle.dubois@expertinvestment.com'
    },
    featured: true,
    isNew: true
  },
  {
    id: '30',
    title: 'Sacramento Midtown Victorian',
    description: 'Beautifully restored Victorian home in Sacramento\'s hip Midtown district. Modern kitchen and baths with period details preserved. Strong rental demand.',
    location: {
      address: '1520 21st St',
      city: 'Sacramento',
      state: 'CA',
      zip: '95811'
    },
    financials: {
      purchasePrice: 625000,
      currentValue: 695000,
      appreciation: 11.2,
      monthlyRent: 4500,
      expenses: 2000,
      netCashFlow: 2500,
      capRate: 4.8,
      roi: 22.4,
      cashOnCashReturn: 14.4
    },
    metrics: {
      occupancyRate: 100,
      acquisitionDate: '2022-08-14',
      propertyType: 'single-family',
      bedsCount: 4,
      bathsCount: 3,
      sqft: 2400
    },
    performance: {
      totalReturn: 140000,
      annualizedReturn: 12.1,
      holdingPeriod: 29
    },
    images: ['/images/property-2.png', '/images/property-3.png'],
    status: 'sold',
    amenities: ['Parking', 'Backyard', 'Historic Details', 'Pet-friendly'],
    neighborhood: {
      walkScore: 95,
      transitScore: 78,
      schools: [
        { name: 'Sutter Middle School', distance: '0.9 mi', rating: 7 },
        { name: 'C.K. McClatchy High', distance: '1.6 mi', rating: 8 }
      ],
      nearbyPlaces: ['Midtown Farmers Market', 'Capitol Mall', 'Crocker Art Museum', 'Golden 1 Center']
    },
    agent: {
      name: 'Andrew Wilson',
      phone: '(916) 555-0171',
      email: 'andrew.wilson@expertinvestment.com'
    },
    featured: false,
    isNew: false
  }
];
