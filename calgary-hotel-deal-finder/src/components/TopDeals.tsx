import { deals, hotels } from "../lib/data";
import { Deal, Hotel } from "../lib/types";
import HotelCard from "./HotelCard";

export default function TopDeals() {
  const dealHotels: (Hotel & { deal: Deal })[] = deals
    .map((deal) => {
      const hotel = hotels.find((h) => h.id === deal.hotelId);
      if (!hotel) return null;
      return { ...hotel, deal };
    })
    .filter((h): h is Hotel & { deal: Deal } => h !== null);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Top Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dealHotels.map((hotel) => (
          <div key={hotel.id} className="relative">
            <div className="absolute top-0 right-0 bg-secondary-dark text-white p-2 rounded-bl-lg z-10">
              <p className="font-bold text-lg">${hotel.deal.dealPrice}</p>
              <p className="text-sm line-through">${hotel.deal.originalPrice}</p>
            </div>
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
}
