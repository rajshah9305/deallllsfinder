import { hotels } from "../../../lib/data";
import { Hotel } from "../../../lib/types";
import Image from "next/image";
import ImageGallery from "../../../components/ImageGallery";
import { notFound } from "next/navigation";

interface HotelDetailsPageProps {
  params: {
    id: string;
  };
}

export default function HotelDetailsPage({ params }: HotelDetailsPageProps) {
  const hotel = hotels.find((h) => h.id === params.id);

  if (!hotel) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <ImageGallery images={hotel.images} />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-gray-600 mb-4">{hotel.address}</p>
            <div className="flex items-center mb-4">
              <span className="text-secondary">{'★'.repeat(Math.round(hotel.rating))}</span>
              <span className="text-gray-400">{'★'.repeat(5 - Math.round(hotel.rating))}</span>
              <span className="ml-2 text-sm text-gray-600">({hotel.rating})</span>
            </div>
            <div className="text-2xl font-bold text-primary-dark mb-4">
              ${hotel.pricePerNight}
              <span className="text-base font-normal text-gray-500">/night</span>
            </div>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Book Now
            </button>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About this hotel</h2>
          <p className="text-gray-700 mb-6">{hotel.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hotel.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${hotel.address}`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
