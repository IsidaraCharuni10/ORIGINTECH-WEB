export const mockProducts = [
  {
    id: 'p1',
    name: 'Origin Pro Max',
    brand: 'Origin',
    category: 'Phones',
    price: 120000,
    originalPrice: 135000,
    rating: 4.8,
    reviews: 142,
    inStock: true,
    isAuthentic: true,
    colors: ['Midnight', 'Starlight', 'Ocean Blue'],
    storage: ['128GB', '256GB', '512GB'],
    image: '/images/phone.png',
    badges: ['New Arrival', 'Best Seller']
  },
  {
    id: 'p2',
    name: 'Origin Tablet Z',
    brand: 'Origin',
    category: 'Tablets',
    price: 85000,
    rating: 4.5,
    reviews: 89,
    inStock: true,
    isAuthentic: true,
    colors: ['Space Gray', 'Silver'],
    storage: ['64GB', '256GB'],
    image: '/images/tablet.png',
    badges: []
  },
  {
    id: 'p3',
    name: 'Sonic Buds Pro',
    brand: 'Sonic',
    category: 'Accessories',
    price: 25000,
    originalPrice: 30000,
    rating: 4.2,
    reviews: 45,
    inStock: false,
    isAuthentic: true,
    colors: ['White', 'Black'],
    storage: [],
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80',
    badges: ['Sale']
  },
  {
    id: 'p4',
    name: 'OriginBook Pro 16"',
    brand: 'Origin',
    category: 'Tablets',
    price: 320000,
    rating: 4.9,
    reviews: 62,
    inStock: true,
    isAuthentic: true,
    colors: ['Space Gray', 'Silver'],
    storage: ['512GB SSD', '1TB SSD'],
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
    badges: ['Pro Series']
  },
  {
    id: 'p5',
    name: 'Origin Watch Series X',
    brand: 'Origin',
    category: 'Accessories',
    price: 65000,
    originalPrice: 75000,
    rating: 4.7,
    reviews: 110,
    inStock: true,
    isAuthentic: true,
    colors: ['Midnight', 'Graphite'],
    storage: [],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80',
    badges: ['Best Seller']
  },
  {
    id: 'p6',
    name: 'Sonic Over-Ear Max',
    brand: 'Sonic',
    category: 'Accessories',
    price: 45000,
    rating: 4.6,
    reviews: 84,
    inStock: true,
    isAuthentic: true,
    colors: ['Black', 'Silver', 'Navy'],
    storage: [],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    badges: []
  },
  {
    id: 'p7',
    name: 'Origin Pro Max Clear Case',
    brand: 'Origin',
    category: 'Accessories',
    price: 5000,
    rating: 4.3,
    reviews: 320,
    inStock: true,
    isAuthentic: true,
    colors: ['Clear'],
    storage: [],
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=80',
    badges: ['Essential']
  }
];

export const mockCurrencies = {
  LKR: { symbol: 'Rs.', rate: 1 },
  USD: { symbol: '$', rate: 0.0031 },
  GBP: { symbol: '£', rate: 0.0025 },
  EUR: { symbol: '€', rate: 0.0029 }
};

export const formatPrice = (priceInLKR, currencyKey) => {
  const currency = mockCurrencies[currencyKey] || mockCurrencies.LKR;
  const converted = priceInLKR * currency.rate;
  return `${currency.symbol} ${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const translationStrings = {
  EN: {
    shopNow: 'Shop Now',
    preOrder: 'View Pre-Orders',
    phones: 'Phones',
    tablets: 'Tablets',
    accessories: 'Accessories',
    searchPlaceholder: 'Search products...',
    cart: 'Cart',
    login: 'Login',
    checkout: 'Checkout'
  },
  SI: {
    shopNow: 'දැන් මිලදී ගන්න',
    preOrder: 'පෙර-ඇණවුම් බලන්න',
    phones: 'දුරකථන',
    tablets: 'ටැබ්ලට්',
    accessories: 'උපාංග',
    searchPlaceholder: 'නිෂ්පාදන සොයන්න...',
    cart: 'කරත්තය',
    login: 'ඇතුල් වන්න',
    checkout: 'ඉදිරියට යන්න'
  },
  TA: {
    shopNow: 'இப்போதே வாங்குங்கள்',
    preOrder: 'முன்பதிவுகளைக் காண்க',
    phones: 'தொலைபேசிகள்',
    tablets: 'மாத்திரைகள்',
    accessories: 'பாகங்கள்',
    searchPlaceholder: 'தயாரிப்புகளை தேடுங்கள்...',
    cart: 'வண்டி',
    login: 'உள்நுழைக',
    checkout: 'வெளியேறு'
  }
};
