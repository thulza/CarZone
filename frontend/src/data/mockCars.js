// Mock data for car enthusiast platform
export const mockCars = [
  {
    id: 1,
    title: "Mercedes C63 AMG W204",
    brand: "Mercedes-AMG",
    category: "Performance Sedan",
    year: 2012,
    description: "The W204 C63 AMG is a legendary performance sedan that redefined the compact executive car segment. With its naturally aspirated 6.3L V8 engine, it delivers pure, unadulterated driving pleasure that enthusiasts cherish.",
    specs: {
      engine: "6.3L V8 Naturally Aspirated",
      horsepower: "451 HP",
      torque: "443 lb-ft",
      acceleration: "0-60 mph in 4.4 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "7-speed AMG Speedshift Plus",
      drivetrain: "Rear-wheel drive"
    },
    releaseDate: "2008-03-01",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.2,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 2,
    title: "Mercedes C63 AMG 507 Edition",
    brand: "Mercedes-AMG",
    category: "Limited Edition",
    year: 2013,
    description: "The ultimate send-off for the W204 generation, the 507 Edition packs an additional 56 horsepower and exclusive performance upgrades. Limited to just 500 units worldwide, this is the pinnacle of naturally aspirated AMG engineering.",
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
    description: "The most extreme C-Class ever built. The Black Series strips away luxury in favor of pure performance, featuring widebody aerodynamics, track-focused suspension, and an enhanced naturally aspirated V8 that screams to 7,200 RPM.",
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
  },
  {
    id: 4,
    title: "BMW M3 Competition",
    brand: "BMW M",
    category: "Performance Sedan",
    year: 2021,
    description: "The latest iteration of the legendary M3 brings twin-turbo power and precision handling to the compact executive segment. With its aggressive styling and track-capable performance, it's a worthy competitor to the AMG C63.",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      horsepower: "503 HP",
      torque: "479 lb-ft",
      acceleration: "0-60 mph in 3.8 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "8-speed M Steptronic",
      drivetrain: "Rear-wheel drive"
    },
    releaseDate: "2021-03-01",
    image: "https://images.unsplash.com/photo-1617814012347-d0e2c8c30b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814012347-d0e2c8c30b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.1,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1617814012347-d0e2c8c30b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 5,
    title: "Audi RS Q8",
    brand: "Audi Sport",
    category: "Performance SUV",
    year: 2020,
    description: "The RS Q8 redefines what a performance SUV can be. With its twin-turbo V8 and quattro all-wheel drive, it delivers supercar-level acceleration in a practical SUV package. The perfect blend of luxury and performance.",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      torque: "590 lb-ft",
      acceleration: "0-60 mph in 3.7 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "8-speed Tiptronic",
      drivetrain: "Quattro AWD"
    },
    releaseDate: "2019-11-01",
    image: "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.3,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 6,
    title: "BMW M5 Competition",
    brand: "BMW M",
    category: "Performance Sedan",
    year: 2021,
    description: "The M5 Competition represents the pinnacle of BMW's performance sedan engineering. With its twin-turbo V8 and xDrive all-wheel drive, it delivers blistering acceleration while maintaining everyday usability.",
    specs: {
      engine: "4.4L Twin-Turbo V8",
      horsepower: "617 HP",
      torque: "553 lb-ft",
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "8-speed M Steptronic",
      drivetrain: "xDrive AWD"
    },
    releaseDate: "2020-07-01",
    image: "https://images.unsplash.com/photo-1617814073183-f10dd4e2e0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814073183-f10dd4e2e0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.4,
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1617814073183-f10dd4e2e0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 7,
    title: "Audi RS6 Avant",
    brand: "Audi Sport",
    category: "Performance Wagon",
    year: 2020,
    description: "The RS6 Avant proves that practicality doesn't have to come at the cost of performance. This stunning wagon combines supercar-level acceleration with genuine everyday usability, making it the ultimate sleeper.",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      torque: "590 lb-ft",
      acceleration: "0-60 mph in 3.5 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "8-speed Tiptronic",
      drivetrain: "Quattro AWD"
    },
    releaseDate: "2019-09-01",
    image: "https://images.unsplash.com/photo-1617814056436-c5b7b7b6b7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814056436-c5b7b7b6b7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.5,
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1617814056436-c5b7b7b6b7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 8,
    title: "Mercedes-AMG GT 63 S",
    brand: "Mercedes-AMG",
    category: "Grand Tourer",
    year: 2019,
    description: "The AMG GT 63 S combines the soul of a sports car with the practicality of a four-door. Its twin-turbo V8 delivers exceptional performance while maintaining the comfort expected from a Mercedes-AMG.",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "630 HP",
      torque: "664 lb-ft",
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "196 mph",
      transmission: "9-speed AMG Speedshift TCT",
      drivetrain: "4MATIC+ AWD"
    },
    releaseDate: "2018-10-01",
    image: "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroImage: "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 9.6,
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  }
];

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