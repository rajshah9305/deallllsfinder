import { Hotel, Deal } from './types';

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Hotel Arts',
    description: 'A luxurious and modern hotel in the heart of downtown Calgary.',
    address: '119 12 Ave SW, Calgary, AB T2R 0G8',
    rating: 4.5,
    pricePerNight: 250,
    images: [
      'https://picsum.photos/seed/hotelarts1/800/600',
      'https://picsum.photos/seed/hotelarts2/800/600',
      'https://picsum.photos/seed/hotelarts3/800/600',
    ],
    amenities: ['Free Wi-Fi', 'Pool', 'Gym', 'Spa', 'Restaurant'],
    location: { lat: 51.0408, lng: -114.0654 },
  },
  {
    id: '2',
    name: 'Fairmont Palliser',
    description: 'A historic landmark hotel offering timeless elegance.',
    address: '133 9 Ave SW, Calgary, AB T2P 2M3',
    rating: 4.7,
    pricePerNight: 350,
    images: [
      'https://picsum.photos/seed/fairmont1/800/600',
      'https://picsum.photos/seed/fairmont2/800/600',
    ],
    amenities: ['Free Wi-Fi', 'Gym', 'Spa', 'Restaurant', 'Room Service'],
    location: { lat: 51.0449, lng: -114.0644 },
  },
  {
    id: '3',
    name: 'Le Germain Hotel Calgary',
    description: 'A chic and stylish boutique hotel.',
    address: '899 Centre St SW, Calgary, AB T2G 1B8',
    rating: 4.6,
    pricePerNight: 300,
    images: [
      'https://picsum.photos/seed/legermain1/800/600',
      'https://picsum.photos/seed/legermain2/800/600',
      'https://picsum.photos/seed/legermain3/800/600',
    ],
    amenities: ['Free Wi-Fi', 'Pet-Friendly', 'Gym', 'Restaurant'],
    location: { lat: 51.0454, lng: -114.0621 },
  },
    {
    id: '4',
    name: 'Hyatt Regency Calgary',
    description: 'A contemporary hotel connected to the Telus Convention Centre.',
    address: '700 Centre St S, Calgary, AB T2G 5P6',
    rating: 4.4,
    pricePerNight: 280,
    images: [
      'https://picsum.photos/seed/hyatt1/800/600',
      'https://picsum.photos/seed/hyatt2/800/600',
    ],
    amenities: ['Free Wi-Fi', 'Pool', 'Gym', 'Restaurant', 'Room Service', 'Spa'],
    location: { lat: 51.046, lng: -114.061 },
  },
];

export const deals: Deal[] = [
  {
    hotelId: '1',
    dealPrice: 199,
    originalPrice: 250,
    dealDescription: 'Summer Special: 20% off!',
  },
  {
    hotelId: '3',
    dealPrice: 250,
    originalPrice: 300,
    dealDescription: 'Last Minute Deal!',
  },
];
