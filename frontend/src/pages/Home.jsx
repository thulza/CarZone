import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CarRow from '../components/CarRow';
import { mockCars, carCategories, searchCars } from '../data/mockCars';

const Home = ({ searchQuery }) => {
  const [displayedCars, setDisplayedCars] = useState(mockCars);
  const [filteredCategories, setFilteredCategories] = useState(carCategories);

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchCars(searchQuery);
      setDisplayedCars(filtered);
      setFilteredCategories([{
        id: 'search',
        name: `Search Results for "${searchQuery}"`,
        cars: filtered
      }]);
    } else {
      setDisplayedCars(mockCars);
      setFilteredCategories(carCategories);
    }
  }, [searchQuery]);

  const featuredCars = mockCars.filter(car => car.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section - Only show when not searching */}
      {!searchQuery && <HeroSection featuredCars={featuredCars} />}
      
      {/* Car Categories */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${searchQuery ? 'pt-24' : 'py-16'}`}>
        {filteredCategories.map((category) => (
          <CarRow
            key={category.id}
            title={category.name}
            cars={category.cars}
            size="medium"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;