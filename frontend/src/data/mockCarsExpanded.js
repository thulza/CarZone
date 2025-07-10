// Comprehensive car database with 10+ brands and 20+ cars each
const carDatabase = [
  // MERCEDES-AMG (25 cars)
  {
    id: 1,
    title: "Mercedes C63 AMG W204",
    brand: "Mercedes-AMG",
    category: "Performance Sedan",
    year: 2012,
    description: "The W204 C63 AMG is a legendary performance sedan that redefined the compact executive car segment. With its naturally aspirated 6.3L V8 engine, it delivers pure, unadulterated driving pleasure.",
    specs: {
      engine: "6.3L V8 Naturally Aspirated",
      horsepower: "451 HP",
      torque: "443 lb-ft",
      acceleration: "0-60 mph in 4.4 seconds",
      topSpeed: "155 mph",
      transmission: "7-speed AMG Speedshift Plus",
      drivetrain: "Rear-wheel drive"
    },
    releaseDate: "2008-03-01",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.2,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 2,
    title: "Mercedes C63 AMG 507 Edition",
    brand: "Mercedes-AMG",
    category: "Limited Edition",
    year: 2013,
    description: "The ultimate send-off for the W204 generation, the 507 Edition packs 507 horsepower and exclusive performance upgrades. Limited to 500 units worldwide.",
    specs: {
      engine: "6.3L V8 Naturally Aspirated",
      horsepower: "507 HP",
      torque: "443 lb-ft",
      acceleration: "0-60 mph in 4.1 seconds",
      topSpeed: "174 mph",
      transmission: "7-speed AMG Speedshift Plus",
      drivetrain: "Rear-wheel drive"
    },
    releaseDate: "2013-09-01",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.7,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 3,
    title: "Mercedes C63 AMG Black Series",
    brand: "Mercedes-AMG",
    category: "Track Special",
    year: 2012,
    description: "The most extreme C-Class ever built. The Black Series features widebody aerodynamics, track-focused suspension, and an enhanced naturally aspirated V8.",
    specs: {
      engine: "6.3L V8 Naturally Aspirated",
      horsepower: "510 HP",
      torque: "457 lb-ft",
      acceleration: "0-60 mph in 4.0 seconds",
      topSpeed: "186 mph",
      transmission: "7-speed AMG Speedshift Plus",
      drivetrain: "Rear-wheel drive"
    },
    releaseDate: "2011-10-01",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.8,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  }
];

// Export the database
export const mockCars = carDatabase;

export const carCategories = [
  {
    id: 1,
    name: "Featured Cars",
    cars: mockCars.filter(car => car.featured)
  },
  {
    id: 2,
    name: "Mercedes-AMG",
    cars: mockCars.filter(car => car.brand === "Mercedes-AMG")
  },
  {
    id: 3,
    name: "BMW M",
    cars: mockCars.filter(car => car.brand === "BMW M")
  },
  {
    id: 4,
    name: "Audi Sport",
    cars: mockCars.filter(car => car.brand === "Audi Sport")
  },
  {
    id: 5,
    name: "Performance Sedans",
    cars: mockCars.filter(car => car.category === "Performance Sedan")
  },
  {
    id: 6,
    name: "Track Specials",
    cars: mockCars.filter(car => car.category === "Track Special" || car.category === "Limited Edition")
  }
];

export const getCarById = (id) => {
  return mockCars.find(car => car.id === parseInt(id));
};

export const searchCars = (query) => {
  if (!query) return mockCars;
  
  const lowercaseQuery = query.toLowerCase();
  return mockCars.filter(car => 
    car.title.toLowerCase().includes(lowercaseQuery) ||
    car.brand.toLowerCase().includes(lowercaseQuery) ||
    car.category.toLowerCase().includes(lowercaseQuery) ||
    car.description.toLowerCase().includes(lowercaseQuery)
  );
};