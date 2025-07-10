import React from 'react';
import { Star, Calendar, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarCard = ({ car, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-48 h-72',
    medium: 'w-64 h-80',
    large: 'w-80 h-96'
  };

  return (
    <Link to={`/car/${car.id}`} className="group block">
      <div className={`${sizeClasses[size]} relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
        {/* Car Image */}
        <div className="relative h-3/5 overflow-hidden">
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs font-medium text-white">{car.rating}</span>
          </div>

          {/* Brand Badge */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-3 py-1">
            <span className="text-xs font-bold text-white">{car.brand}</span>
          </div>
        </div>

        {/* Car Details */}
        <div className="p-4 h-2/5 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white text-lg mb-1 truncate group-hover:text-red-400 transition-colors">
              {car.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2 truncate">{car.category}</p>
            <p className="text-gray-300 text-xs line-clamp-2 mb-3">
              {car.description}
            </p>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="h-3 w-3" />
              <span>{car.specs.horsepower}</span>
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300" />
      </div>
    </Link>
  );
};

export default CarCard;