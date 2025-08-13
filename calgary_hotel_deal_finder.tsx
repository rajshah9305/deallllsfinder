import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, DollarSign, Star, Users, Filter, ExternalLink, Phone, Wifi, Car, Coffee, Utensils, Dumbbell, Bath } from 'lucide-react';

const CalgaryHotelDealFinder = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [maxPrice, setMaxPrice] = useState(200);
  const [location, setLocation] = useState('all');
  const [amenities, setAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('price');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Set default dates (today + 7 days for a week stay)
  useEffect(() => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(nextWeek.toISOString().split('T')[0]);
  }, []);

  const budgetHotels = [
    {
      id: 1,
      name: "HI Calgary City Centre Hostel",
      price: 38,
      weeklyPrice: 266,
      rating: 4.2,
      location: "Downtown",
      address: "520 7th Ave SE, Calgary",
      phone: "+1 403-670-7580",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'coffee', 'laundry'],
      features: ["Free coffee/tea all day", "Shared facilities", "Central location", "Kitchen access"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/hi-calgary-city-centre.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-HI-Calgary-City-Centre.h3456789.Hotel-Information",
        hostelworld: "https://www.hostelworld.com/hostels/Calgary/HI-Calgary-City-Centre"
      },
      dealHighlight: "Cheapest option in downtown Calgary",
      category: "Ultra Budget"
    },
    {
      id: 2,
      name: "Canada's Best Value Inn Calgary Chinook Station",
      price: 51,
      weeklyPrice: 357,
      rating: 4.0,
      location: "Southwest",
      address: "2440 33 Ave SW, Calgary",
      phone: "+1 403-287-2440",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'parking', 'laundry'],
      features: ["Free WiFi", "Free parking", "24/7 front desk", "Near Chinook Centre"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/canadas-best-value-inn-calgary-chinook-station.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Canadas-Best-Value-Inn.h1234567.Hotel-Information"
      },
      dealHighlight: "Best overall value with free parking",
      category: "Budget"
    },
    {
      id: 3,
      name: "Econo Lodge Motel Village",
      price: 58,
      weeklyPrice: 406,
      rating: 3.8,
      location: "Northwest",
      address: "2440 16 Ave NW, Calgary",
      phone: "+1 403-289-2561",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'restaurant', 'parking', 'laundry'],
      features: ["Restaurant on-site", "Laundry facilities", "Basic but clean", "Reliable chain"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/econo-lodge-motel-village.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Econo-Lodge-Motel-Village.h2345678.Hotel-Information"
      },
      dealHighlight: "Reliable budget option with restaurant",
      category: "Budget"
    },
    {
      id: 4,
      name: "Super 8 by Wyndham Calgary/Airport",
      price: 70,
      weeklyPrice: 490,
      rating: 4.1,
      location: "Airport",
      address: "1904 19 St NE, Calgary",
      phone: "+1 403-291-9644",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'shuttle', 'laundry'],
      features: ["Airport shuttle ($10)", "Free WiFi", "24/7 front desk", "Laundry facilities"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/super-8-calgary-airport.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Super-8-Calgary-Airport.h3456789.Hotel-Information"
      },
      dealHighlight: "Great airport access with shuttle",
      category: "Budget"
    },
    {
      id: 5,
      name: "Holiday Inn Express Airport-Calgary",
      price: 85,
      weeklyPrice: 595,
      rating: 4.3,
      location: "Airport",
      address: "2227 Banff Trail NW, Calgary",
      phone: "+1 403-230-1999",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'breakfast', 'shuttle', 'fitness', 'parking'],
      features: ["Free breakfast", "Airport shuttle", "Fitness center", "Business center"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/holiday-inn-express-calgary-airport.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Holiday-Inn-Express-Airport.h4567890.Hotel-Information"
      },
      dealHighlight: "Free breakfast saves $15/day",
      category: "Mid-Range Budget"
    },
    {
      id: 6,
      name: "Emerald Hotel & Suites",
      price: 91,
      weeklyPrice: 637,
      rating: 4.2,
      location: "Northeast",
      address: "12332 Symons Valley Rd NW, Calgary",
      phone: "+1 403-275-5551",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'pool', 'restaurant', 'parking', 'fitness'],
      features: ["Indoor pool", "Restaurant", "Free parking", "Good for extended stays"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/emerald-hotel-suites-calgary.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Emerald-Hotel-Suites.h5678901.Hotel-Information"
      },
      dealHighlight: "More amenities than typical budget hotels",
      category: "Mid-Range Budget"
    },
    {
      id: 7,
      name: "Staybridge Suites Calgary Airport",
      price: 93,
      weeklyPrice: 651,
      rating: 4.5,
      location: "Airport",
      address: "2825 Sunridge Way NE, Calgary",
      phone: "+1 403-537-6366",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'kitchen', 'breakfast', 'pool', 'shuttle', 'fitness', 'laundry'],
      features: ["Full kitchens", "Free breakfast", "Pool with waterslide", "Weekly discounts available"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/staybridge-suites-calgary-airport.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Staybridge-Suites-Calgary.h6789012.Hotel-Information"
      },
      dealHighlight: "Perfect for week-long stays with kitchen",
      category: "Extended Stay"
    },
    {
      id: 8,
      name: "Best Western Plus Suites Downtown",
      price: 100,
      weeklyPrice: 700,
      rating: 4.4,
      location: "Downtown",
      address: "1330 8 St SW, Calgary",
      phone: "+1 403-228-6900",
      image: "/api/placeholder/300/200",
      amenities: ['wifi', 'kitchen', 'fitness', 'parking'],
      features: ["Kitchenette", "Downtown location", "Weekly rate discounts", "Business-friendly"],
      bookingLinks: {
        booking: "https://www.booking.com/hotel/ca/best-western-plus-suites-downtown-calgary.html",
        expedia: "https://www.expedia.ca/Calgary-Hotels-Best-Western-Plus-Suites.h7890123.Hotel-Information"
      },
      dealHighlight: "Downtown location with weekly discounts",
      category: "Extended Stay"
    }
  ];

  const amenityIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    parking: <Car className="w-4 h-4" />,
    breakfast: <Coffee className="w-4 h-4" />,
    restaurant: <Utensils className="w-4 h-4" />,
    fitness: <Dumbbell className="w-4 h-4" />,
    pool: <Bath className="w-4 h-4" />,
    shuttle: <Car className="w-4 h-4" />,
    kitchen: <Utensils className="w-4 h-4" />,
    laundry: <Wifi className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />
  };

  const locations = [
    { value: 'all', label: 'All Areas' },
    { value: 'Downtown', label: 'Downtown Calgary' },
    { value: 'Airport', label: 'Airport Area' },
    { value: 'Southwest', label: 'Southwest Calgary' },
    { value: 'Northeast', label: 'Northeast Calgary' },
    { value: 'Northwest', label: 'Northwest Calgary' }
  ];

  const amenityOptions = [
    { value: 'wifi', label: 'Free WiFi' },
    { value: 'parking', label: 'Free Parking' },
    { value: 'breakfast', label: 'Free Breakfast' },
    { value: 'kitchen', label: 'Kitchen/Kitchenette' },
    { value: 'pool', label: 'Pool' },
    { value: 'fitness', label: 'Fitness Center' },
    { value: 'shuttle', label: 'Airport Shuttle' }
  ];

  const handleSearch = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = budgetHotels.filter(hotel => {
        const locationMatch = location === 'all' || hotel.location === location;
        const priceMatch = hotel.price <= maxPrice;
        const amenityMatch = amenities.length === 0 || amenities.some(amenity => hotel.amenities.includes(amenity));
        
        return locationMatch && priceMatch && amenityMatch;
      });

      // Sort results
      filtered.sort((a, b) => {
        switch(sortBy) {
          case 'price': return a.price - b.price;
          case 'rating': return b.rating - a.rating;
          case 'weekly': return a.weeklyPrice - b.weeklyPrice;
          default: return a.price - b.price;
        }
      });

      setSearchResults(filtered);
      setIsLoading(false);
    }, 1000);
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
  };

  const toggleAmenity = (amenity) => {
    setAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  // Auto-search when filters change
  useEffect(() => {
    handleSearch();
  }, [location, maxPrice, amenities, sortBy]);

  const nights = calculateNights();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🏨 Calgary Hotel Deal Finder</h1>
        <p className="text-lg text-gray-600">Find the cheapest hotels in Calgary with the best value for money</p>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {locations.map(loc => (
                <option key={loc.value} value={loc.value}>{loc.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="border-t pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price per Night: CAD ${maxPrice}
              </label>
              <input
                type="range"
                min="30"
                max="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="price">Lowest Price</option>
                <option value="weekly">Best Weekly Rate</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="flex flex-wrap gap-2">
                {amenityOptions.map(amenity => (
                  <button
                    key={amenity.value}
                    onClick={() => toggleAmenity(amenity.value)}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      amenities.includes(amenity.value)
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {amenity.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Duration Info */}
      <div className="bg-blue-100 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">
              {nights} night{nights > 1 ? 's' : ''} stay
            </span>
          </div>
          <div className="text-blue-600 font-medium">
            {nights >= 7 ? '✨ Weekly stay discounts available!' : 'Extend to 7+ nights for weekly discounts'}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Finding the best deals...</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {searchResults.length} Hotel{searchResults.length !== 1 ? 's' : ''} Found
              </h2>
              <div className="text-sm text-gray-600">
                Showing results for {nights} night{nights > 1 ? 's' : ''}
              </div>
            </div>

            {searchResults.map(hotel => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {hotel.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {hotel.location}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                            {hotel.rating}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {hotel.phone}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{hotel.address}</p>
                        
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                          <p className="text-green-800 font-medium text-sm">💡 {hotel.dealHighlight}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          CAD ${hotel.price}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">per night</div>
                        
                        {nights >= 7 && (
                          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2 mb-2">
                            <div className="text-sm font-medium text-yellow-800">Weekly Rate</div>
                            <div className="text-lg font-bold text-yellow-800">
                              CAD ${hotel.weeklyPrice}
                            </div>
                            <div className="text-xs text-yellow-700">
                              Save CAD ${(hotel.price * 7) - hotel.weeklyPrice}
                            </div>
                          </div>
                        )}
                        
                        <div className="text-lg font-semibold text-gray-800">
                          Total: CAD ${nights >= 7 ? hotel.weeklyPrice : hotel.price * nights}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {hotel.amenities.map(amenity => (
                          <div key={amenity} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs">
                            {amenityIcons[amenity]}
                            <span className="capitalize">{amenity}</span>
                          </div>
                        ))}
                      </div>
                      
                      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                        {hotel.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(hotel.bookingLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="capitalize">Book on {platform}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Tips Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Money-Saving Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• Book directly with hotels for potential weekly discounts</li>
            <li>• Extended stay hotels offer better value for 7+ nights</li>
            <li>• Choose hotels with free breakfast to save $15/day</li>
            <li>• Consider airport area hotels for cheaper rates</li>
          </ul>
          <ul className="space-y-2">
            <li>• Avoid weekends and Calgary Stampede (July) for better prices</li>
            <li>• Book 90+ days in advance for best rates</li>
            <li>• Hotels with kitchens save $30-50/day on meals</li>
            <li>• Free parking saves $15-25/day in downtown</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalgaryHotelDealFinder;