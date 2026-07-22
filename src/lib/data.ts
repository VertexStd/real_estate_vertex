export const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Communities", href: "#communities" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Agents", href: "#agents" },
  { label: "About", href: "#about" },
];

export const propertyTypes = [
  "All Types",
  "Estate",
  "Penthouse",
  "Villa",
  "Waterfront",
  "Condominium",
];

export const locations = [
  "All Locations",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Dubai Marina",
  "Emirates Hills",
  "Beverly Hills",
  "Malibu",
];

export const priceRanges = [
  "Any Price",
  "$1M – $5M",
  "$5M – $10M",
  "$10M – $25M",
  "$25M+",
];

export const featuredProperties = [
  {
    id: 1,
    title: "The Azure Estate",
    location: "Beverly Hills, California",
    price: 24_500_000,
    beds: 7,
    baths: 9,
    sqft: 14200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    tag: "Private",
  },
  {
    id: 2,
    title: "Oceanview Penthouse",
    location: "Miami Beach, Florida",
    price: 18_750_000,
    beds: 5,
    baths: 6,
    sqft: 9800,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    tag: "New",
  },
  {
    id: 3,
    title: "Hillside Modern Villa",
    location: "Malibu, California",
    price: 32_000_000,
    beds: 8,
    baths: 10,
    sqft: 16500,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    tag: "Exclusive",
  },
  {
    id: 4,
    title: "Central Park Residence",
    location: "Manhattan, New York",
    price: 45_000_000,
    beds: 6,
    baths: 7,
    sqft: 11200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    tag: "Iconic",
  },
  {
    id: 5,
    title: "Alpine Chalet Estate",
    location: "Aspen, Colorado",
    price: 28_500_000,
    beds: 9,
    baths: 11,
    sqft: 18900,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    tag: "Alpine",
  },
  {
    id: 6,
    title: "Coastal Contemporary",
    location: "Hamptons, New York",
    price: 19_200_000,
    beds: 6,
    baths: 8,
    sqft: 12400,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
    tag: "Waterfront",
  },
];

export const whyChooseUs = [
  {
    icon: "badge-check",
    title: "Verified Listings",
    description:
      "Every property is rigorously vetted for authenticity, legal clarity, and exceptional quality before it reaches our portfolio.",
  },
  {
    icon: "users",
    title: "Expert Real Estate Advisors",
    description:
      "Work with seasoned advisors who understand luxury markets, private negotiations, and the art of the perfect match.",
  },
  {
    icon: "lock",
    title: "Secure Transactions",
    description:
      "Bank-grade protocols and discreet handling ensure every closing is protected, confidential, and seamlessly executed.",
  },
  {
    icon: "sparkles",
    title: "Luxury Lifestyle Experience",
    description:
      "Beyond the home — private viewings, concierge coordination, and a lifestyle experience designed around you.",
  },
];

export const communities = [
  {
    name: "Palm Jumeirah",
    properties: 64,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    description: "Iconic island living on the Arabian Gulf",
  },
  {
    name: "Downtown Dubai",
    properties: 89,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=85",
    description: "Skyline residences at the city's heart",
  },
  {
    name: "Dubai Marina",
    properties: 72,
    image:
      "https://images.unsplash.com/photo-1582672060674-9b412f4f3c95?w=1200&q=85",
    description: "Waterfront towers and yacht living",
  },
  {
    name: "Emirates Hills",
    properties: 38,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
    description: "Private villas in gated elegance",
  },
];

export const showcaseProperty = {
  title: "Villa Serenity",
  subtitle: "An Architectural Masterpiece",
  location: "Pacific Palisades, California",
  price: 58_000_000,
  description:
    "Perched above the Pacific with 270-degree ocean views, this 12,000 sq ft residence by renowned architect Richard Meier features floor-to-ceiling glass, a private infinity pool, and a 1,200-bottle wine cellar carved into the hillside.",
  features: [
    "12,000 sq ft living space",
    "270° ocean panorama",
    "Infinity edge pool",
    "Private beach access",
    "Smart home automation",
    "6-car garage",
  ],
  images: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
    "https://images.unsplash.com/photo-1600210492496-724fe5c67fb0?w=1400&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f88d28fc7?w=1400&q=80",
  ],
};

export const agents = [
  {
    name: "Victoria Ashford",
    role: "Managing Director",
    specialty: "Beverly Hills & Malibu",
    experience: "25 Years Experience",
    rating: 5.0,
    sales: "$2.4B+",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85",
    bio: "25 years curating extraordinary estates for global elite.",
  },
  {
    name: "Alexander Chen",
    role: "Senior Partner",
    specialty: "Manhattan & Hamptons",
    experience: "18 Years Experience",
    rating: 4.9,
    sales: "$1.8B+",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85",
    bio: "The definitive authority on New York luxury real estate.",
  },
  {
    name: "Isabella Laurent",
    role: "International Director",
    specialty: "Miami & Caribbean",
    experience: "15 Years Experience",
    rating: 4.9,
    sales: "$1.2B+",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85",
    bio: "Connecting discerning buyers with waterfront masterpieces.",
  },
  {
    name: "James Whitmore",
    role: "Estate Specialist",
    specialty: "Aspen & Mountain West",
    experience: "12 Years Experience",
    rating: 4.8,
    sales: "$950M+",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85",
    bio: "Alpine luxury expert with an eye for architectural excellence.",
  },
];

export const testimonials = [
  {
    quote:
      "Their discretion and attention to detail are unmatched. They found us an off-market estate that exceeded every expectation — a true once-in-a-lifetime acquisition.",
    author: "Richard Monroe",
    location: "Beverly Hills Estate",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
  },
  {
    quote:
      "From the first private viewing to closing, the experience felt more like art curation than real estate. Extraordinary in every sense of the word.",
    author: "Dr. Elena Vasquez",
    location: "Manhattan Penthouse",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85",
  },
  {
    quote:
      "We've worked with luxury firms worldwide. None compare to the level of sophistication, market knowledge, and genuine care they bring to every engagement.",
    author: "Kenji Nakamura",
    location: "Malibu Villa",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",
  },
];

export const statistics = [
  { value: 4.2, suffix: "B+", prefix: "$", label: "Closed volume", decimals: 1 },
  { value: 850, suffix: "+", prefix: "", label: "Residences placed", decimals: 0 },
  { value: 35, suffix: "", prefix: "", label: "Years advising", decimals: 0 },
  { value: 98, suffix: "%", prefix: "", label: "Repeat & referral", decimals: 0 },
];
