import React, { useState, useEffect } from 'react';
import { Play, Info, Star, Calendar, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ featuredCars }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredCars.length, isAutoPlaying]);

  const currentCar = featuredCars[currentIndex];

  if (!currentCar) return null;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentCar.heroImage}
          alt={currentCar.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-4 py-2 mb-4">
              <span className="text-white font-bold text-sm">{currentCar.brand}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-white fill-current" />
                <span className="text-white text-sm">{currentCar.rating}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {currentCar.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {currentCar.description}
            </p>

            {/* Quick Specs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <Calendar className="h-4 w-4 text-red-400" />
                <span className="text-white text-sm font-medium">{currentCar.year}</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <Zap className="h-4 w-4 text-red-400" />
                <span className="text-white text-sm font-medium">{currentCar.specs.horsepower}</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <Settings className="h-4 w-4 text-red-400" />
                <span className="text-white text-sm font-medium">{currentCar.specs.acceleration}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to={`/car/${currentCar.id}`}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Play className="h-5 w-5 fill-current" />
                <span>View Details</span>
              </Link>
              <Link
                to={`/car/${currentCar.id}`}
                className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 border border-gray-600"
              >
                <Info className="h-5 w-5" />
                <span>More Info</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredCars.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-gray-600"
      >
        {isAutoPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default HeroSection;