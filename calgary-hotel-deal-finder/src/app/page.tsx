"use client";

import { useState } from 'react';
import { hotels } from '../lib/data';
import HotelCard from '../components/HotelCard';
import SearchFilters from '../components/SearchFilters';
import TopDeals from '../components/TopDeals';
import { Hotel } from '../lib/types';

export default function Home() {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);

  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Calgary Hotel Deal Finder</h1>
        <p className="text-xl text-gray-600">
          Find the best deals for your stay in Calgary.
        </p>
      </header>
      <main>
        <SearchFilters setFilteredHotels={setFilteredHotels} />
        <TopDeals />
        <h2 className="text-3xl font-bold mb-6">All Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
