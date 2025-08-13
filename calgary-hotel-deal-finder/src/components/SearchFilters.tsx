"use client";

import { useState, useEffect } from "react";
import { Amenity, Hotel } from "../lib/types";
import { hotels } from "../lib/data";

const allAmenities: Amenity[] = [
  "Free Wi-Fi", "Pool", "Free Parking", "Pet-Friendly", "Gym", "Spa", "Restaurant", "Room Service",
];

interface SearchFiltersProps {
  setFilteredHotels: (hotels: Hotel[]) => void;
}

export default function SearchFilters({ setFilteredHotels }: SearchFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [price, setPrice] = useState(500);
  const [rating, setRating] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>([]);

  useEffect(() => {
    let filtered = hotels;

    if (searchTerm) {
      filtered = filtered.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (price < 500) {
      filtered = filtered.filter((hotel) => hotel.pricePerNight <= price);
    }

    if (rating > 0) {
      filtered = filtered.filter((hotel) => hotel.rating >= rating);
    }

    if (selectedAmenities.length > 0) {
      filtered = filtered.filter((hotel) =>
        selectedAmenities.every((amenity) => hotel.amenities.includes(amenity))
      );
    }

    setFilteredHotels(filtered);
  }, [searchTerm, price, rating, selectedAmenities, setFilteredHotels]);

  const handleAmenityChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <input
          type="text"
          placeholder="Search by hotel name..."
          className="p-2 border rounded col-span-1 md:col-span-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium mb-1">
            Max Price: <span className="font-bold">${price}</span>
          </label>
          <input
            type="range"
            id="price"
            min="50"
            max="500"
            step="10"
            className="w-full"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-sm font-medium mb-1">
            Min Rating
          </label>
          <select
            id="rating"
            className="p-2 border rounded"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value="0">All</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Amenities</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
          {allAmenities.map((amenity) => (
            <div key={amenity} className="flex items-center">
              <input
                type="checkbox"
                id={amenity}
                value={amenity}
                className="mr-2"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
              />
              <label htmlFor={amenity} className="text-sm">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
