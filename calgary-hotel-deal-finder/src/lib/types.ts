export type Amenity =
  | "Free Wi-Fi"
  | "Pool"
  | "Free Parking"
  | "Pet-Friendly"
  | "Gym"
  | "Spa"
  | "Restaurant"
  | "Room Service";

export type Hotel = {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  pricePerNight: number;
  images: string[];
  amenities: Amenity[];
  location: {
    lat: number;
    lng: number;
  };
};

export type Deal = {
  hotelId: string;
  dealPrice: number;
  originalPrice: number;
  dealDescription: string;
};
