import Image from 'next/image';
import Link from 'next/link';
import { Hotel } from '../lib/types';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotel/${hotel.id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="relative h-56">
        <Image
          src={hotel.images[0]}
          alt={`Image of ${hotel.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{hotel.address}</p>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-primary-dark">
            ${hotel.pricePerNight}
            <span className="text-sm font-normal text-gray-500">/night</span>
          </div>
          <div className="flex items-center">
            <span className="text-secondary">{'★'.repeat(Math.round(hotel.rating))}</span>
            <span className="text-gray-400">{'★'.repeat(5 - Math.round(hotel.rating))}</span>
            <span className="ml-2 text-sm text-gray-600">({hotel.rating})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
