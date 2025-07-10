import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Zap, Settings, Gauge, Cog, Car, Heart, Share2 } from 'lucide-react';
import { getCarById } from '../data/mockCars';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const carData = getCarById(id);
    setCar(carData);
  }, [id]);

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto"></div>
          <p className="text-white mt-4">Loading car details...</p>
        </div>
      </div>
    );
  }

  const specIcons = {
    engine: Settings,
    horsepower: Zap,
    torque: Gauge,
    acceleration: Gauge,
    topSpeed: Gauge,
    transmission: Cog,
    drivetrain: Car
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="relative pt-16">
        <div className="absolute top-20 left-4 z-10">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-gray-600"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={car.gallery[activeImageIndex] || car.heroImage}
          alt={car.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-200 ${
              isLiked 
                ? 'bg-red-500 border-red-500 text-white' 
                : 'bg-black/50 border-gray-600 text-white hover:bg-black/70'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 text-white hover:bg-black/70 transition-all duration-200">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Car Title and Rating */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-4 py-2">
                  <span className="text-white font-bold text-sm">{car.brand}</span>
                </div>
                <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{car.rating}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {car.title}
              </h1>
              
              <p className="text-xl text-gray-400 mb-4">{car.category} • {car.year}</p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(car.specs).map(([key, value]) => {
                  const IconComponent = specIcons[key] || Engine;
                  return (
                    <div key={key} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                          <IconComponent className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-white font-semibold">{value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gallery */}
            {car.gallery && car.gallery.length > 1 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {car.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
                        activeImageIndex === index 
                          ? 'ring-2 ring-red-500 transform scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Stats */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300">Release Year</span>
                    </div>
                    <span className="text-white font-semibold">{car.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300">Power</span>
                    </div>
                    <span className="text-white font-semibold">{car.specs.horsepower}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Gauge className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300">0-60 mph</span>
                    </div>
                    <span className="text-white font-semibold">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300">Rating</span>
                    </div>
                    <span className="text-white font-semibold">{car.rating}/10</span>
                  </div>
                </div>
              </div>

              {/* Release Info */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Release Information</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold">Release Date:</span> {new Date(car.releaseDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Category:</span> {car.category}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Manufacturer:</span> {car.brand}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;