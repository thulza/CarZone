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
  },
  {
    id: 4, // New ID
    title: "Mercedes-AMG GT 63 S 4MATIC+",
    brand: "Mercedes-AMG",
    category: "Grand Tourer",
    year: 2019,
    description: "The AMG GT 63 S combines sports car soul with four-door practicality and a twin-turbo V8.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "630 HP", torque: "664 lb-ft", acceleration: "0-60 mph in 3.1s", topSpeed: "196 mph", transmission: "9-speed TCT", drivetrain: "4MATIC+ AWD" },
    releaseDate: "2018-10-01",
    image: "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1617814010405-8e0d9cd6f1d4?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 5, // New ID
    title: "Mercedes-AMG E63 S",
    brand: "Mercedes-AMG",
    category: "Performance Sedan",
    year: 2021,
    description: "The E63 S combines executive luxury with a handcrafted 4.0L V8 biturbo engine.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "603 HP", torque: "627 lb-ft", acceleration: "0-60 mph in 3.3s", topSpeed: "186 mph", transmission: "9-speed TCT", drivetrain: "4MATIC+ AWD" },
    releaseDate: "2020-05-01",
    image: "https://images.unsplash.com/photo-1600089230907-a7dd9551b79d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1600089230907-a7dd9551b79d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 6, // New ID
    title: "Mercedes-AMG A45 S",
    brand: "Mercedes-AMG",
    category: "Hyper Hatch",
    year: 2020,
    description: "Potent hatchback with a powerful 2.0L turbo.",
    specs: { engine: "2.0L Turbo I4", horsepower: "416 HP" },
    releaseDate: "2019-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 7, // New ID
    title: "Mercedes-AMG CLA 45 S",
    brand: "Mercedes-AMG",
    category: "Compact Sedan",
    year: 2020,
    description: "Sleek four-door coupe with A45 S powertrain.",
    specs: { engine: "2.0L Turbo I4", horsepower: "416 HP" },
    releaseDate: "2019-08-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 8, // New ID
    title: "Mercedes-AMG GLA 45 S",
    brand: "Mercedes-AMG",
    category: "Performance SUV",
    year: 2021,
    description: "Compact SUV with hyper hatch performance.",
    specs: { engine: "2.0L Turbo I4", horsepower: "416 HP" },
    releaseDate: "2020-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.7, featured: false, gallery: []
  },
  {
    id: 9, // New ID
    title: "Mercedes-AMG GLC 63 S Coupe",
    brand: "Mercedes-AMG",
    category: "Performance SUV Coupe",
    year: 2020,
    description: "SUV coupe with a bi-turbo V8.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "503 HP" },
    releaseDate: "2019-04-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 10, // New ID
    title: "Mercedes-AMG GLE 63 S",
    brand: "Mercedes-AMG",
    category: "Performance SUV",
    year: 2021,
    description: "Large performance SUV with hybrid tech.",
    specs: { engine: "4.0L Twin-Turbo V8 EQ Boost", horsepower: "603 HP" },
    releaseDate: "2020-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: false, gallery: []
  },
  {
    id: 11, // New ID
    title: "Mercedes-AMG GLS 63",
    brand: "Mercedes-AMG",
    category: "Luxury Performance SUV",
    year: 2021,
    description: "Seven-seater SUV with AMG power.",
    specs: { engine: "4.0L Twin-Turbo V8 EQ Boost", horsepower: "603 HP" },
    releaseDate: "2020-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 12, // New ID
    title: "Mercedes-AMG GT R",
    brand: "Mercedes-AMG",
    category: "Supercar",
    year: 2017,
    description: "'Beast of the Green Hell', track-focused GT.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "577 HP" },
    releaseDate: "2016-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: true, gallery: []
  },
  {
    id: 13, // New ID
    title: "Mercedes-AMG GT Black Series",
    brand: "Mercedes-AMG",
    category: "Track Supercar",
    year: 2021,
    description: "Most powerful AMG V8 series production car.",
    specs: { engine: "4.0L Twin-Turbo V8 Flat-Plane Crank", horsepower: "720 HP" },
    releaseDate: "2020-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 14, // New ID
    title: "Mercedes-AMG SL 63",
    brand: "Mercedes-AMG",
    category: "Roadster",
    year: 2022,
    description: "New generation SL developed by AMG.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "577 HP" },
    releaseDate: "2021-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 15, // New ID
    title: "Mercedes-AMG One",
    brand: "Mercedes-AMG",
    category: "Hypercar",
    year: 2023,
    description: "F1 engine for the road.",
    specs: { engine: "1.6L V6 Turbo Hybrid", horsepower: "1000+ HP" },
    releaseDate: "2022-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 16, // New ID
    title: "Mercedes SLS AMG",
    brand: "Mercedes-AMG",
    category: "Supercar",
    year: 2010,
    description: "Gullwing door successor to the 300SL.",
    specs: { engine: "6.2L V8", horsepower: "563 HP" },
    releaseDate: "2009-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 17, // New ID
    title: "Mercedes SLS AMG Black Series",
    brand: "Mercedes-AMG",
    category: "Track Supercar",
    year: 2013,
    description: "Hardcore version of the SLS AMG.",
    specs: { engine: "6.2L V8", horsepower: "622 HP" },
    releaseDate: "2012-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 18, // New ID
    title: "Mercedes CLK GTR AMG",
    brand: "Mercedes-AMG",
    category: "Homologation Special",
    year: 1998,
    description: "Road-going version of the FIA GT champion.",
    specs: { engine: "6.9L V12", horsepower: "604 HP" },
    releaseDate: "1997-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 19, // New ID
    title: "Mercedes-AMG S63 E Performance",
    brand: "Mercedes-AMG",
    category: "Luxury Performance Sedan",
    year: 2023,
    description: "Hybrid S-Class with over 800hp.",
    specs: { engine: "4.0L V8 Hybrid", horsepower: "802 HP" },
    releaseDate: "2022-12-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 20, // New ID
    title: "Mercedes G63 AMG",
    brand: "Mercedes-AMG",
    category: "Performance SUV",
    year: 2018,
    description: "Iconic off-roader with AMG performance.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "577 HP" },
    releaseDate: "2018-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  // BMW M (25 CARS)
  {
    id: 21, // Renumbered from 4
    title: "BMW M3 Competition",
    brand: "BMW M",
    category: "Performance Sedan",
    year: 2021,
    description: "The latest iteration of the legendary M3 brings twin-turbo power and precision handling to the compact executive segment. With its aggressive styling and track-capable performance.",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      horsepower: "503 HP",
      torque: "479 lb-ft",
      acceleration: "0-60 mph in 3.8 seconds",
      topSpeed: "155 mph",
      transmission: "8-speed M Steptronic",
      drivetrain: "RWD/xDrive" // Updated from original
    },
    releaseDate: "2021-03-01",
    image: "https://images.unsplash.com/photo-1617814012347-d0e2c8c30b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", // Adjusted image size
    heroImage: "https://images.unsplash.com/photo-1617814012347-d0e2c8c30b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", // Adjusted image size
    rating: 9.1,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1617814012347-d0e2c8c30b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" // Adjusted image size
    ]
  },
  {
    id: 22, // Renumbered from 5
    title: "BMW M5 Competition",
    brand: "BMW M",
    category: "Performance Sedan",
    year: 2021,
    description: "The F90 M5 Competition, a benchmark in executive performance sedans.", // Updated description
    specs: {
      engine: "4.4L Twin-Turbo V8",
      horsepower: "617 HP",
      torque: "553 lb-ft",
      acceleration: "0-60 mph in 3.1s", // Standardized format
      topSpeed: "190 mph", // Standardized format
      transmission: "8-speed M Steptronic",
      drivetrain: "xDrive AWD"
    },
    releaseDate: "2020-07-01", // Corrected from 2020-06-01 based on common data
    image: "https://images.unsplash.com/photo-1617814073183-f10dd4e2e0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", // Adjusted image size
    heroImage: "https://images.unsplash.com/photo-1617814073183-f10dd4e2e0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", // Adjusted image size
    rating: 9.4,
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1617814073183-f10dd4e2e0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" // Adjusted image size
    ]
  },
  {
    id: 23, // Renumbered from 23
    title: "BMW M2 CS",
    brand: "BMW M",
    category: "Sports Coupe",
    year: 2020,
    description: "The M2 CS, a hardcore, track-focused version of the beloved M2.", // Updated description
    specs: {
      engine: "3.0L Twin-Turbo I6",
      horsepower: "444 HP",
      torque: "406 lb-ft",
      acceleration: "0-60 mph in 3.8s", // Standardized format
      topSpeed: "174 mph",
      transmission: "6-MT/7-DCT", // Standardized format
      drivetrain: "RWD" // Standardized format
    },
    releaseDate: "2019-11-01",
    image: "https://images.unsplash.com/photo-1593642702821-c83b3671d939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", // Adjusted image size
    heroImage: "https://images.unsplash.com/photo-1593642702821-c83b3671d939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", // Adjusted image size
    rating: 9.5,
    featured: false,
    gallery: []
  },
  {
    id: 24, // New ID
    title: "BMW M4 Competition (G82)",
    brand: "BMW M",
    category: "Performance Coupe",
    year: 2021,
    description: "Coupe version of the G80 M3.",
    specs: { engine: "3.0L Twin-Turbo I6", horsepower: "503 HP" },
    releaseDate: "2020-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: true, gallery: []
  },
  {
    id: 25, // New ID
    title: "BMW M8 Competition Gran Coupe",
    brand: "BMW M",
    category: "Performance Gran Coupe",
    year: 2020,
    description: "Flagship four-door M car.",
    specs: { engine: "4.4L Twin-Turbo V8", horsepower: "617 HP" },
    releaseDate: "2019-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 26, // New ID
    title: "BMW X3 M Competition",
    brand: "BMW M",
    category: "Performance SUV",
    year: 2020,
    description: "High-performance compact SUV.",
    specs: { engine: "3.0L Twin-Turbo I6", horsepower: "503 HP" },
    releaseDate: "2019-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 27, // New ID
    title: "BMW X5 M Competition",
    brand: "BMW M",
    category: "Performance SUV",
    year: 2020,
    description: "Large high-performance SUV.",
    specs: { engine: "4.4L Twin-Turbo V8", horsepower: "617 HP" },
    releaseDate: "2019-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 28, // New ID
    title: "BMW M135i xDrive",
    brand: "BMW M",
    category: "Hot Hatch",
    year: 2019,
    description: "M Performance hot hatch.",
    specs: { engine: "2.0L Turbo I4", horsepower: "302 HP" },
    releaseDate: "2019-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.5, featured: false, gallery: []
  },
  {
    id: 29, // New ID
    title: "BMW M240i xDrive Coupe",
    brand: "BMW M",
    category: "Sports Coupe",
    year: 2022,
    description: "New generation M Performance 2 Series.",
    specs: { engine: "3.0L Turbo I6", horsepower: "382 HP" },
    releaseDate: "2021-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 30, // New ID
    title: "BMW M3 CS (F80)",
    brand: "BMW M",
    category: "Limited Edition Sedan",
    year: 2018,
    description: "Lighter, more powerful F80 M3.",
    specs: { engine: "3.0L Twin-Turbo I6", horsepower: "453 HP" },
    releaseDate: "2017-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 31, // New ID
    title: "BMW M4 GTS (F82)",
    brand: "BMW M",
    category: "Track Special Coupe",
    year: 2016,
    description: "Water-injected M4, limited edition.",
    specs: { engine: "3.0L Twin-Turbo I6", horsepower: "493 HP" },
    releaseDate: "2015-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: true, gallery: []
  },
  {
    id: 32, // New ID
    title: "BMW 1M Coupe",
    brand: "BMW M",
    category: "Sports Coupe",
    year: 2011,
    description: "Legendary limited-run 'parts bin special'.",
    specs: { engine: "3.0L Twin-Turbo I6", horsepower: "335 HP" },
    releaseDate: "2010-12-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 33, // New ID
    title: "BMW M3 (E46)",
    brand: "BMW M",
    category: "Classic Performance",
    year: 2001,
    description: "Iconic E46 M3 with high-revving I6.",
    specs: { engine: "3.2L I6", horsepower: "333 HP" },
    releaseDate: "2000-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 34, // New ID
    title: "BMW M3 CSL (E46)",
    brand: "BMW M",
    category: "Lightweight Special",
    year: 2003,
    description: "Lightweight, track-focused E46 M3.",
    specs: { engine: "3.2L I6", horsepower: "360 HP" },
    releaseDate: "2003-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 35, // New ID
    title: "BMW M5 (E39)",
    brand: "BMW M",
    category: "Classic Performance Sedan",
    year: 1998,
    description: "The E39 M5, often called the best M5.",
    specs: { engine: "4.9L V8", horsepower: "394 HP" },
    releaseDate: "1998-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 36, // New ID
    title: "BMW Z3 M Coupe",
    brand: "BMW M",
    category: "Shooting Brake",
    year: 1998,
    description: "Quirky 'clown shoe' M Coupe.",
    specs: { engine: "3.2L I6", horsepower: "315 HP (US)" },
    releaseDate: "1998-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 37, // New ID
    title: "BMW Z4 M Coupe (E86)",
    brand: "BMW M",
    category: "Sports Coupe",
    year: 2006,
    description: "Last naturally aspirated M coupe.",
    specs: { engine: "3.2L I6 (S54)", horsepower: "330 HP" },
    releaseDate: "2006-04-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 38, // New ID
    title: "BMW M6 Gran Coupe (F06)",
    brand: "BMW M",
    category: "Performance Gran Coupe",
    year: 2013,
    description: "Stylish and powerful M6 four-door.",
    specs: { engine: "4.4L Twin-Turbo V8", horsepower: "552 HP" },
    releaseDate: "2013-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 39, // New ID
    title: "BMW XM",
    brand: "BMW M",
    category: "Performance SUV Hybrid",
    year: 2023,
    description: "Standalone M model, powerful hybrid SUV.",
    specs: { engine: "4.4L V8 Hybrid", horsepower: "644 HP" },
    releaseDate: "2022-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.7, featured: false, gallery: []
  },
  {
    id: 40, // New ID
    title: "BMW i4 M50",
    brand: "BMW M",
    category: "Electric Performance Sedan",
    year: 2022,
    description: "First all-electric M Performance model.",
    specs: { engine: "Dual Electric Motors", horsepower: "536 HP" },
    releaseDate: "2021-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  // AUDI SPORT (25 CARS)
  {
    id: 41, // Renumbered from 24
    title: "Audi RS Q8",
    brand: "Audi Sport",
    category: "Performance SUV",
    year: 2020,
    description: "The RS Q8, Audi's flagship performance SUV with a twin-turbo V8.", // Standardized
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      torque: "590 lb-ft",
      acceleration: "0-60 mph in 3.7s", // Standardized
      topSpeed: "190 mph", // Standardized
      transmission: "8-speed Tiptronic",
      drivetrain: "Quattro AWD"
    },
    releaseDate: "2019-11-01",
    image: "https://images.unsplash.com/photo-1603584086096-5cf79f67900d?auto=format&fit=crop&w=600&q=60", // Placeholder for RS Q8, adjusted size
    heroImage: "https://images.unsplash.com/photo-1603584086096-5cf79f67900d?auto=format&fit=crop&w=1200&q=80", // Adjusted size
    rating: 9.3,
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1603584086096-5cf79f67900d?auto=format&fit=crop&w=600&q=60" // Adjusted size
    ]
  },
  {
    id: 42, // Renumbered from 25
    title: "Audi RS6 Avant",
    brand: "Audi Sport",
    category: "Performance Wagon",
    year: 2020,
    description: "The iconic RS6 Avant, blending supercar performance with wagon practicality.", // Standardized
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "591 HP",
      torque: "590 lb-ft",
      acceleration: "0-60 mph in 3.5s", // Standardized
      topSpeed: "190 mph", // Standardized
      transmission: "8-speed Tiptronic",
      drivetrain: "Quattro AWD"
    },
    releaseDate: "2019-09-01",
    image: "https://images.unsplash.com/photo-1617814056436-c5b7b7b6b7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", // Adjusted size
    heroImage: "https://images.unsplash.com/photo-1617814056436-c5b7b7b6b7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", // Adjusted size
    rating: 9.5,
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1617814056436-c5b7b7b6b7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" // Adjusted size
    ]
  },
  {
    id: 43, // Was example, now part of sequence
    title: "Audi R8 V10 Performance",
    brand: "Audi Sport",
    category: "Supercar",
    year: 2022,
    description: "Audi's flagship naturally aspirated V10 supercar.", // Standardized
    specs: {
      engine: "5.2L V10", // Standardized
      horsepower: "602 HP",
      torque: "413 lb-ft",
      acceleration: "0-60 mph in 3.1s", // Standardized
      topSpeed: "205 mph",
      transmission: "7-speed S tronic",
      drivetrain: "Quattro AWD"
    },
    releaseDate: "2021-10-01",
    image: "https://images.unsplash.com/photo-1511919884226-c37f667f0664?auto=format&fit=crop&w=600&q=60", // Placeholder for R8, adjusted size
    heroImage: "https://images.unsplash.com/photo-1511919884226-c37f667f0664?auto=format&fit=crop&w=1200&q=80", // Adjusted size
    rating: 9.7,
    featured: true,
    gallery: []
  },
  {
    id: 44, // New ID
    title: "Audi RS3 Sedan",
    brand: "Audi Sport",
    category: "Compact Performance Sedan",
    year: 2022,
    description: "Pocket rocket with a unique 5-cylinder turbo.",
    specs: { engine: "2.5L Turbo I5", horsepower: "401 HP" },
    releaseDate: "2021-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 45, // New ID
    title: "Audi RS4 Avant",
    brand: "Audi Sport",
    category: "Performance Wagon",
    year: 2019,
    description: "Smaller sibling to the RS6 Avant.",
    specs: { engine: "2.9L Twin-Turbo V6", horsepower: "444 HP" },
    releaseDate: "2017-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 46, // New ID
    title: "Audi RS5 Sportback",
    brand: "Audi Sport",
    category: "Performance Sportback",
    year: 2019,
    description: "Sleek five-door coupe with RS power.",
    specs: { engine: "2.9L Twin-Turbo V6", horsepower: "444 HP" },
    releaseDate: "2018-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: false, gallery: []
  },
  {
    id: 47, // New ID
    title: "Audi RS7 Sportback",
    brand: "Audi Sport",
    category: "Performance Sportback",
    year: 2020,
    description: "RS6 performance in a sportback body.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "591 HP" },
    releaseDate: "2019-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 48, // New ID
    title: "Audi TT RS Coupe",
    brand: "Audi Sport",
    category: "Sports Coupe",
    year: 2019,
    description: "High-performance TT with 5-cylinder turbo.",
    specs: { engine: "2.5L Turbo I5", horsepower: "394 HP" },
    releaseDate: "2019-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 49, // New ID
    title: "Audi e-tron GT RS",
    brand: "Audi Sport",
    category: "Electric Performance Sedan",
    year: 2021,
    description: "Audi's electric flagship GT.",
    specs: { engine: "Dual Electric Motors", horsepower: "637 HP (boost)" },
    releaseDate: "2021-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: true, gallery: []
  },
  {
    id: 50, // New ID
    title: "Audi S8",
    brand: "Audi Sport",
    category: "Luxury Performance Sedan",
    year: 2020,
    description: "Performance version of the A8 flagship.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "563 HP" },
    releaseDate: "2019-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 51, // New ID
    title: "Audi RS Q3 Sportback",
    brand: "Audi Sport",
    category: "Performance SUV Coupe",
    year: 2020,
    description: "Compact SUV coupe with 5-cylinder power.",
    specs: { engine: "2.5L Turbo I5", horsepower: "394 HP" },
    releaseDate: "2019-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.7, featured: false, gallery: []
  },
  {
    id: 52, // New ID
    title: "Audi Sport Quattro S1 E2",
    brand: "Audi Sport",
    category: "Group B Rally Legend",
    year: 1985,
    description: "Iconic Group B rally car.",
    specs: { engine: "2.1L Turbo I5", horsepower: "500+ HP" },
    releaseDate: "1985-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 53, // New ID
    title: "Audi R8 GT (Original)",
    brand: "Audi Sport",
    category: "Limited Edition Supercar",
    year: 2010,
    description: "Lighter, more powerful first-gen R8.",
    specs: { engine: "5.2L V10", horsepower: "552 HP" },
    releaseDate: "2010-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 54, // New ID
    title: "Audi RS2 Avant",
    brand: "Audi Sport",
    category: "Classic Performance Wagon",
    year: 1994,
    description: "The original Audi RS model, co-developed with Porsche.",
    specs: { engine: "2.2L Turbo I5", horsepower: "311 HP" },
    releaseDate: "1994-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 55, // New ID
    title: "Audi R18 e-tron quattro",
    brand: "Audi Sport",
    category: "LMP1 Race Car",
    year: 2012,
    description: "Le Mans winning hybrid race car.",
    specs: { engine: "3.7L V6 TDI Hybrid", horsepower: "System total >500HP" },
    releaseDate: "2011-12-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 56, // New ID
    title: "Audi SQ7",
    brand: "Audi Sport",
    category: "Performance SUV",
    year: 2020,
    description: "S version of the Q7 with a powerful diesel/petrol V8.",
    specs: { engine: "4.0L Twin-Turbo V8 TDI/TFSI", horsepower: "~500 HP" },
    releaseDate: "2019-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 57, // New ID
    title: "Audi SQ8",
    brand: "Audi Sport",
    category: "Performance SUV Coupe",
    year: 2020,
    description: "S version of the Q8.",
    specs: { engine: "4.0L Twin-Turbo V8 TDI/TFSI", horsepower: "~500 HP" },
    releaseDate: "2019-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 58, // New ID
    title: "Audi RS e-tron GT Performance",
    brand: "Audi Sport",
    category: "Electric Performance",
    year: 2024,
    description: "Even more potent version of RS e-tron GT.",
    specs: { engine: "Dual Electric Motors", horsepower: "700+ HP (expected)" },
    releaseDate: "2023-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: true, gallery: []
  },
  {
    id: 59, // New ID
    title: "Audi R8 LMS GT3",
    brand: "Audi Sport",
    category: "GT3 Race Car",
    year: 2019,
    description: "Customer racing GT3 car.",
    specs: { engine: "5.2L V10", horsepower: "~585 HP (BoP dependent)" },
    releaseDate: "2018-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 60, // New ID
    title: "Audi RS5 Coupe",
    brand: "Audi Sport",
    category: "Performance Coupe",
    year: 2018,
    description: "Two-door version of the RS5.",
    specs: { engine: "2.9L Twin-Turbo V6", horsepower: "444 HP" },
    releaseDate: "2017-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  // PORSCHE (20+ cars)
  {
    id: 61, // New ID
    title: "Porsche 911 GT3 RS (992)",
    brand: "Porsche",
    category: "Track Car",
    year: 2023,
    description: "The ultimate track weapon 911, engineered for maximum downforce and performance.",
    specs: { engine: "4.0L NA Flat-6", horsepower: "518 HP", torque: "342 lb-ft", acceleration: "0-60 mph in 3.0s", topSpeed: "184 mph", transmission: "7-speed PDK", drivetrain: "RWD" },
    releaseDate: "2022-08-17",
    image: "https://images.unsplash.com/photo-1552654968-871d56c16973?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552654968-871d56c16973?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 62, // New ID
    title: "Porsche 718 Cayman GT4 RS",
    brand: "Porsche",
    category: "Sports Car",
    year: 2022,
    description: "Mid-engined perfection with 911 GT3 engine.",
    specs: { engine: "4.0L NA Flat-6", horsepower: "493 HP" },
    releaseDate: "2021-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 63, // New ID
    title: "Porsche 911 Turbo S (992)",
    brand: "Porsche",
    category: "Supercar",
    year: 2020,
    description: "The everyday supercar, brutally fast.",
    specs: { engine: "3.7L Twin-Turbo Flat-6", horsepower: "640 HP" },
    releaseDate: "2020-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 64, // New ID
    title: "Porsche Taycan Turbo S",
    brand: "Porsche",
    category: "Electric Super Sedan",
    year: 2020,
    description: "Porsche's first all-electric sports car.",
    specs: { engine: "Dual Electric Motors", horsepower: "750 HP (overboost)" },
    releaseDate: "2019-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: true, gallery: []
  },
  {
    id: 65, // New ID
    title: "Porsche Cayenne Turbo GT",
    brand: "Porsche",
    category: "Performance SUV Coupe",
    year: 2022,
    description: "Fastest SUV around the Nürburgring (at launch).",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "631 HP" },
    releaseDate: "2021-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 66, // New ID
    title: "Porsche Panamera Turbo S E-Hybrid",
    brand: "Porsche",
    category: "Hybrid Performance Sedan",
    year: 2021,
    description: "Flagship Panamera with hybrid power.",
    specs: { engine: "4.0L V8 Hybrid", horsepower: "690 HP" },
    releaseDate: "2020-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 67, // New ID
    title: "Porsche 918 Spyder",
    brand: "Porsche",
    category: "Hypercar",
    year: 2013,
    description: "Hybrid hypercar, part of the 'holy trinity'.",
    specs: { engine: "4.6L V8 Hybrid", horsepower: "875 HP" },
    releaseDate: "2013-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 68, // New ID
    title: "Porsche Carrera GT",
    brand: "Porsche",
    category: "Supercar",
    year: 2004,
    description: "V10-powered analog supercar legend.",
    specs: { engine: "5.7L V10", horsepower: "603 HP" },
    releaseDate: "2003-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 69, // New ID
    title: "Porsche 959",
    brand: "Porsche",
    category: "Classic Supercar",
    year: 1986,
    description: "Technologically advanced supercar of its era.",
    specs: { engine: "2.85L Twin-Turbo Flat-6", horsepower: "444 HP" },
    releaseDate: "1986-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 70, // New ID
    title: "Porsche 911 GT2 RS (991.2)",
    brand: "Porsche",
    category: "Track Supercar",
    year: 2018,
    description: "Most powerful 911 ever at its launch.",
    specs: { engine: "3.8L Twin-Turbo Flat-6", horsepower: "690 HP" },
    releaseDate: "2017-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 71, // New ID
    title: "Porsche Macan GTS",
    brand: "Porsche",
    category: "Performance SUV",
    year: 2022,
    description: "Sportiest Macan variant.",
    specs: { engine: "2.9L Twin-Turbo V6", horsepower: "434 HP" },
    releaseDate: "2021-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 72, // New ID
    title: "Porsche 718 Boxster Spyder",
    brand: "Porsche",
    category: "Roadster",
    year: 2020,
    description: "Open-top GT4 experience.",
    specs: { engine: "4.0L NA Flat-6", horsepower: "414 HP" },
    releaseDate: "2019-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 73, // New ID
    title: "Porsche 911 Dakar",
    brand: "Porsche",
    category: "Off-Road Sports Car",
    year: 2023,
    description: "Off-road capable 911.",
    specs: { engine: "3.0L Twin-Turbo Flat-6", horsepower: "473 HP" },
    releaseDate: "2022-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: true, gallery: []
  },
  {
    id: 74, // New ID
    title: "Porsche 911 Carrera RS 2.7",
    brand: "Porsche",
    category: "Classic Sports Car",
    year: 1973,
    description: "Legendary lightweight 911.",
    specs: { engine: "2.7L NA Flat-6", horsepower: "210 HP" },
    releaseDate: "1972-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 75, // New ID
    title: "Porsche 911 Speedster (991)",
    brand: "Porsche",
    category: "Limited Edition Roadster",
    year: 2019,
    description: "Open-top, GT3-engined special.",
    specs: { engine: "4.0L NA Flat-6", horsepower: "502 HP" },
    releaseDate: "2019-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 76, // New ID
    title: "Porsche Mission R Concept",
    brand: "Porsche",
    category: "Electric Race Car Concept",
    year: 2021,
    description: "Vision of future customer electric racing.",
    specs: { engine: "Dual Electric Motors", horsepower: "1073 HP (qualifying)" },
    releaseDate: "2021-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 77, // New ID
    title: "Porsche 911 GT1 Strassenversion",
    brand: "Porsche",
    category: "Homologation Special",
    year: 1997,
    description: "Road version of Le Mans winner.",
    specs: { engine: "3.2L Twin-Turbo Flat-6", horsepower: "536 HP" },
    releaseDate: "1996-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 78, // New ID
    title: "Porsche 356 Speedster",
    brand: "Porsche",
    category: "Classic Roadster",
    year: 1954,
    description: "Iconic early Porsche roadster.",
    specs: { engine: "1.6L NA Flat-4", horsepower: "70 HP" },
    releaseDate: "1954-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 79, // New ID
    title: "Porsche 944 Turbo",
    brand: "Porsche",
    category: "Classic Sports Car",
    year: 1986,
    description: "Front-engined, transaxle Porsche.",
    specs: { engine: "2.5L Turbo I4", horsepower: "217 HP" },
    releaseDate: "1985-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 80, // New ID
    title: "Porsche 911 S/T",
    brand: "Porsche",
    category: "Limited Edition",
    year: 2023,
    description: "Lightweight, purist 911 celebrating 60 years.",
    specs: { engine: "4.0L NA Flat-6", horsepower: "518 HP" },
    releaseDate: "2023-08-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  // FERRARI (20+ cars)
  {
    id: 81, // New ID
    title: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    category: "Hypercar",
    year: 2020,
    description: "Ferrari's first plug-in hybrid hypercar, delivering astonishing performance.",
    specs: { engine: "4.0L Twin-Turbo V8 + 3 Electric Motors", horsepower: "986 HP", torque: "590 lb-ft (engine)", acceleration: "0-60 mph in 2.5s", topSpeed: "211 mph", transmission: "8-speed DCT", drivetrain: "AWD" },
    releaseDate: "2019-05-29",
    image: "https://images.unsplash.com/photo-1612949715950-39a399a14375?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1612949715950-39a399a14375?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 82, // New ID
    title: "Ferrari 296 GTB",
    brand: "Ferrari",
    category: "Sports Car",
    year: 2022,
    description: "V6 hybrid supercar, redefining fun to drive.",
    specs: { engine: "3.0L Twin-Turbo V6 Hybrid", horsepower: "819 HP" },
    releaseDate: "2021-06-24",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: true, gallery: []
  },
  {
    id: 83, // New ID
    title: "Ferrari 812 Competizione",
    brand: "Ferrari",
    category: "Supercar",
    year: 2021,
    description: "Hardcore version of the 812 Superfast.",
    specs: { engine: "6.5L NA V12", horsepower: "819 HP" },
    releaseDate: "2021-05-05",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 84, // New ID
    title: "Ferrari F8 Tributo",
    brand: "Ferrari",
    category: "Supercar",
    year: 2020,
    description: "Mid-engined V8 supercar, successor to 488 GTB.",
    specs: { engine: "3.9L Twin-Turbo V8", horsepower: "710 HP" },
    releaseDate: "2019-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 85, // New ID
    title: "Ferrari Roma",
    brand: "Ferrari",
    category: "Grand Tourer",
    year: 2020,
    description: "Elegant V8 GT with 'La Nuova Dolce Vita' styling.",
    specs: { engine: "3.9L Twin-Turbo V8", horsepower: "612 HP" },
    releaseDate: "2019-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 86, // New ID
    title: "Ferrari LaFerrari",
    brand: "Ferrari",
    category: "Hypercar",
    year: 2013,
    description: "Flagship hybrid hypercar, part of 'holy trinity'.",
    specs: { engine: "6.3L V12 Hybrid", horsepower: "950 HP" },
    releaseDate: "2013-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 87, // New ID
    title: "Ferrari Enzo",
    brand: "Ferrari",
    category: "Supercar",
    year: 2002,
    description: "F1-inspired supercar named after the founder.",
    specs: { engine: "6.0L NA V12", horsepower: "651 HP" },
    releaseDate: "2002-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 88, // New ID
    title: "Ferrari F40",
    brand: "Ferrari",
    category: "Classic Supercar",
    year: 1987,
    description: "Raw, twin-turbo V8 legend, last car approved by Enzo.",
    specs: { engine: "2.9L Twin-Turbo V8", horsepower: "471 HP" },
    releaseDate: "1987-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 89, // New ID
    title: "Ferrari F50",
    brand: "Ferrari",
    category: "Supercar",
    year: 1995,
    description: "F1-derived V12 engine, open-top experience.",
    specs: { engine: "4.7L NA V12", horsepower: "513 HP" },
    releaseDate: "1995-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 90, // New ID
    title: "Ferrari 488 Pista",
    brand: "Ferrari",
    category: "Track Supercar",
    year: 2018,
    description: "Hardcore, track-focused 488.",
    specs: { engine: "3.9L Twin-Turbo V8", horsepower: "710 HP" },
    releaseDate: "2018-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 91, // New ID
    title: "Ferrari Portofino M",
    brand: "Ferrari",
    category: "Convertible GT",
    year: 2021,
    description: "Updated Portofino with more power.",
    specs: { engine: "3.9L Twin-Turbo V8", horsepower: "612 HP" },
    releaseDate: "2020-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 92, // New ID
    title: "Ferrari Monza SP1/SP2",
    brand: "Ferrari",
    category: "Icona Series",
    year: 2019,
    description: "Limited-run barchetta based on 812.",
    specs: { engine: "6.5L NA V12", horsepower: "799 HP" },
    releaseDate: "2018-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 93, // New ID
    title: "Ferrari Daytona SP3",
    brand: "Ferrari",
    category: "Icona Series",
    year: 2023,
    description: "Inspired by 1960s Daytona racers, V12 power.",
    specs: { engine: "6.5L NA V12", horsepower: "829 HP" },
    releaseDate: "2021-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 94, // New ID
    title: "Ferrari 250 GTO",
    brand: "Ferrari",
    category: "Classic Race Car",
    year: 1962,
    description: "One of the most valuable cars in the world.",
    specs: { engine: "3.0L NA V12", horsepower: "300 HP" },
    releaseDate: "1962-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 95, // New ID
    title: "Ferrari Testarossa",
    brand: "Ferrari",
    category: "Classic Supercar",
    year: 1984,
    description: "Iconic 80s supercar with side strakes.",
    specs: { engine: "4.9L Flat-12", horsepower: "385 HP" },
    releaseDate: "1984-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 96, // New ID
    title: "Ferrari Purosangue",
    brand: "Ferrari",
    category: "Performance SUV/Crossover",
    year: 2023,
    description: "Ferrari's first four-door, four-seater.",
    specs: { engine: "6.5L NA V12", horsepower: "715 HP" },
    releaseDate: "2022-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: true, gallery: []
  },
  {
    id: 97, // New ID
    title: "Ferrari 458 Italia",
    brand: "Ferrari",
    category: "Supercar",
    year: 2010,
    description: "Last naturally aspirated mid-engined V8 Ferrari.",
    specs: { engine: "4.5L NA V8", horsepower: "562 HP" },
    releaseDate: "2009-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 98, // New ID
    title: "Ferrari GTC4Lusso",
    brand: "Ferrari",
    category: "Shooting Brake GT",
    year: 2016,
    description: "Four-seater, four-wheel drive V12/V8T.",
    specs: { engine: "6.3L NA V12 / 3.9L V8T", horsepower: "680 HP (V12)" },
    releaseDate: "2016-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: false, gallery: []
  },
  {
    id: 99, // New ID
    title: "Ferrari SF90 XX Stradale",
    brand: "Ferrari",
    category: "Track Hypercar",
    year: 2023,
    description: "Track version of SF90, road legal.",
    specs: { engine: "4.0L V8 Hybrid", horsepower: "1016 HP" },
    releaseDate: "2023-06-29",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 100, // New ID
    title: "Ferrari 360 Modena",
    brand: "Ferrari",
    category: "Sports Car",
    year: 1999,
    description: "First Ferrari with all-aluminum chassis.",
    specs: { engine: "3.6L NA V8", horsepower: "395 HP" },
    releaseDate: "1999-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  // LAMBORGHINI (20+ cars)
  {
    id: 101, // New ID
    title: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    category: "Supercar",
    year: 2019,
    description: "The Aventador SVJ, ultimate expression of Lamborghini's V12, Nürburgring record holder.",
    specs: { engine: "6.5L NA V12", horsepower: "759 HP", torque: "531 lb-ft", acceleration: "0-60 mph in 2.8s", topSpeed: "217+ mph", transmission: "7-speed ISR", drivetrain: "AWD" },
    releaseDate: "2018-08-23",
    image: "https://images.unsplash.com/photo-1580972309727-10712502100a?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1580972309727-10712502100a?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 102, // New ID
    title: "Lamborghini Huracán STO",
    brand: "Lamborghini",
    category: "Track Car",
    year: 2021,
    description: "Road-homologated super sports car inspired by racing Huracáns.",
    specs: { engine: "5.2L NA V10", horsepower: "631 HP" },
    releaseDate: "2020-11-18",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 103, // New ID
    title: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    category: "Performance SUV",
    year: 2023,
    description: "Lighter, more powerful Urus.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "657 HP" },
    releaseDate: "2022-08-19",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 104, // New ID
    title: "Lamborghini Sián FKP 37",
    brand: "Lamborghini",
    category: "Hybrid Hypercar",
    year: 2020,
    description: "First Lamborghini hybrid, supercapacitor tech.",
    specs: { engine: "6.5L V12 Hybrid", horsepower: "808 HP" },
    releaseDate: "2019-09-03",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: true, gallery: []
  },
  {
    id: 105, // New ID
    title: "Lamborghini Countach LPI 800-4",
    brand: "Lamborghini",
    category: "Limited Edition Hybrid",
    year: 2022,
    description: "Modern tribute to the iconic Countach.",
    specs: { engine: "6.5L V12 Hybrid", horsepower: "803 HP" },
    releaseDate: "2021-08-13",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: true, gallery: []
  },
  {
    id: 106, // New ID
    title: "Lamborghini Murciélago LP 670-4 SV",
    brand: "Lamborghini",
    category: "Supercar",
    year: 2009,
    description: "Ultimate version of the Murciélago.",
    specs: { engine: "6.5L NA V12", horsepower: "661 HP" },
    releaseDate: "2009-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 107, // New ID
    title: "Lamborghini Diablo SV",
    brand: "Lamborghini",
    category: "Classic Supercar",
    year: 1995,
    description: "Sport Veloce version of the Diablo.",
    specs: { engine: "5.7L NA V12", horsepower: "510 HP" },
    releaseDate: "1995-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 108, // New ID
    title: "Lamborghini Miura P400SV",
    brand: "Lamborghini",
    category: "Classic Supercar",
    year: 1971,
    description: "Often cited as the first supercar.",
    specs: { engine: "3.9L NA V12", horsepower: "380 HP" },
    releaseDate: "1971-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 109, // New ID
    title: "Lamborghini Gallardo LP 570-4 Superleggera",
    brand: "Lamborghini",
    category: "Supercar",
    year: 2010,
    description: "Lightweight, track-focused Gallardo.",
    specs: { engine: "5.2L NA V10", horsepower: "562 HP" },
    releaseDate: "2010-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 110, // New ID
    title: "Lamborghini Centenario",
    brand: "Lamborghini",
    category: "Limited Edition Hypercar",
    year: 2016,
    description: "Built to celebrate Ferruccio Lamborghini's 100th birthday.",
    specs: { engine: "6.5L NA V12", horsepower: "759 HP" },
    releaseDate: "2016-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 111, // New ID
    title: "Lamborghini Reventón",
    brand: "Lamborghini",
    category: "Limited Edition Supercar",
    year: 2008,
    description: "Fighter jet inspired design, very rare.",
    specs: { engine: "6.5L NA V12", horsepower: "641 HP" },
    releaseDate: "2007-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: true, gallery: []
  },
  {
    id: 112, // New ID
    title: "Lamborghini Veneno",
    brand: "Lamborghini",
    category: "Limited Edition Hypercar",
    year: 2013,
    description: "Extreme aerodynamics, ultra-rare.",
    specs: { engine: "6.5L NA V12", horsepower: "740 HP" },
    releaseDate: "2013-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 113, // New ID
    title: "Lamborghini Huracán Tecnica",
    brand: "Lamborghini",
    category: "Supercar",
    year: 2023,
    description: "Best of Huracán EVO RWD and STO.",
    specs: { engine: "5.2L NA V10", horsepower: "631 HP" },
    releaseDate: "2022-04-12",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 114, // New ID
    title: "Lamborghini Essenza SCV12",
    brand: "Lamborghini",
    category: "Track-Only Hypercar",
    year: 2020,
    description: "Track-only hypercar with over 830hp.",
    specs: { engine: "6.5L NA V12", horsepower: "819+ HP" },
    releaseDate: "2020-07-29",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 115, // New ID
    title: "Lamborghini Revuelto",
    brand: "Lamborghini",
    category: "Hybrid Hypercar",
    year: 2024,
    description: "Aventador successor, new V12 hybrid flagship.",
    specs: { engine: "6.5L V12 Hybrid", horsepower: "1001 HP" },
    releaseDate: "2023-03-29",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 116, // New ID
    title: "Lamborghini LM002",
    brand: "Lamborghini",
    category: "Classic SUV",
    year: 1986,
    description: "'Rambo Lambo', V12 powered off-roader.",
    specs: { engine: "5.2L V12 (Countach)", horsepower: "444 HP" },
    releaseDate: "1986-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.5, featured: false, gallery: []
  },
  {
    id: 117, // New ID
    title: "Lamborghini Huracán Sterrato",
    brand: "Lamborghini",
    category: "Off-Road Supercar",
    year: 2023,
    description: "Rally-inspired, all-terrain Huracán.",
    specs: { engine: "5.2L NA V10", horsepower: "602 HP" },
    releaseDate: "2022-11-30",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: true, gallery: []
  },
  {
    id: 118, // New ID
    title: "Lamborghini Aventador Ultimae",
    brand: "Lamborghini",
    category: "Supercar",
    year: 2022,
    description: "Final iteration of the naturally aspirated V12 Aventador.",
    specs: { engine: "6.5L NA V12", horsepower: "769 HP" },
    releaseDate: "2021-07-07",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 119, // New ID
    title: "Lamborghini Sesto Elemento",
    brand: "Lamborghini",
    category: "Track-Only Hypercar",
    year: 2011,
    description: "Ultra-lightweight carbon fiber masterpiece.",
    specs: { engine: "5.2L NA V10", horsepower: "562 HP" },
    releaseDate: "2010-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 120, // New ID
    title: "Lamborghini Huracán EVO Spyder",
    brand: "Lamborghini",
    category: "Convertible Supercar",
    year: 2019,
    description: "Open-top version of the Huracán EVO.",
    specs: { engine: "5.2L NA V10", horsepower: "631 HP" },
    releaseDate: "2019-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  // MCLAREN (20+ cars)
  {
    id: 121, // New ID
    title: "McLaren 765LT",
    brand: "McLaren",
    category: "Supercar",
    year: 2020,
    description: "Lighter, more powerful, and more track-focused version of the 720S.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "755 HP", torque: "590 lb-ft", acceleration: "0-60 mph in 2.7s", topSpeed: "205 mph", transmission: "7-speed SSG", drivetrain: "RWD" },
    releaseDate: "2020-03-03",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 122, // New ID
    title: "McLaren Senna",
    brand: "McLaren",
    category: "Track Hypercar",
    year: 2018,
    description: "Ultimate track car, named after Ayrton Senna.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "789 HP" },
    releaseDate: "2017-12-10",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 123, // New ID
    title: "McLaren P1",
    brand: "McLaren",
    category: "Hypercar",
    year: 2013,
    description: "Hybrid hypercar, part of the 'holy trinity'.",
    specs: { engine: "3.8L Twin-Turbo V8 Hybrid", horsepower: "903 HP" },
    releaseDate: "2013-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 124, // New ID
    title: "McLaren Artura",
    brand: "McLaren",
    category: "Hybrid Supercar",
    year: 2022,
    description: "McLaren's first series-production V6 hybrid.",
    specs: { engine: "3.0L Twin-Turbo V6 Hybrid", horsepower: "671 HP" },
    releaseDate: "2021-02-17",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 125, // New ID
    title: "McLaren GT",
    brand: "McLaren",
    category: "Grand Tourer",
    year: 2019,
    description: "McLaren's take on a practical grand tourer.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "612 HP" },
    releaseDate: "2019-05-15",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 126, // New ID
    title: "McLaren F1",
    brand: "McLaren",
    category: "Classic Hypercar",
    year: 1992,
    description: "Legendary three-seater, fastest car for over a decade.",
    specs: { engine: "6.1L BMW V12", horsepower: "618 HP" },
    releaseDate: "1992-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 127, // New ID
    title: "McLaren 720S",
    brand: "McLaren",
    category: "Supercar",
    year: 2017,
    description: "Benchmark supercar with incredible performance.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "710 HP" },
    releaseDate: "2017-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 128, // New ID
    title: "McLaren 600LT",
    brand: "McLaren",
    category: "Sports Series Track Car",
    year: 2018,
    description: "Longtail version of the 570S.",
    specs: { engine: "3.8L Twin-Turbo V8", horsepower: "592 HP" },
    releaseDate: "2018-06-28",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 129, // New ID
    title: "McLaren Elva",
    brand: "McLaren",
    category: "Ultimate Series Roadster",
    year: 2020,
    description: "Open-cockpit roadster, no windscreen (optional).",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "804 HP" },
    releaseDate: "2019-11-13",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: true, gallery: []
  },
  {
    id: 130, // New ID
    title: "McLaren Speedtail",
    brand: "McLaren",
    category: "Hyper-GT",
    year: 2020,
    description: "Three-seater hybrid, McLaren's fastest car.",
    specs: { engine: "4.0L Twin-Turbo V8 Hybrid", horsepower: "1036 HP" },
    releaseDate: "2018-10-26",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 131, // New ID
    title: "McLaren Sabre",
    brand: "McLaren",
    category: "MSO Bespoke Hypercar",
    year: 2021,
    description: "US-only, MSO custom commission.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "824 HP" },
    releaseDate: "2020-12-22",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 132, // New ID
    title: "McLaren 570S",
    brand: "McLaren",
    category: "Sports Series",
    year: 2015,
    description: "Entry-level (for McLaren) sports car.",
    specs: { engine: "3.8L Twin-Turbo V8", horsepower: "562 HP" },
    releaseDate: "2015-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 133, // New ID
    title: "McLaren 675LT",
    brand: "McLaren",
    category: "Super Series Track Car",
    year: 2015,
    description: "Longtail version of the 650S.",
    specs: { engine: "3.8L Twin-Turbo V8", horsepower: "666 HP" },
    releaseDate: "2015-02-25",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 134, // New ID
    title: "McLaren P1 GTR",
    brand: "McLaren",
    category: "Track-Only Hypercar",
    year: 2015,
    description: "Track version of the P1.",
    specs: { engine: "3.8L Twin-Turbo V8 Hybrid", horsepower: "986 HP" },
    releaseDate: "2015-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 135, // New ID
    title: "McLaren Senna GTR",
    brand: "McLaren",
    category: "Track-Only Hypercar",
    year: 2019,
    description: "Even more extreme track version of Senna.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "814 HP" },
    releaseDate: "2019-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 136, // New ID
    title: "McLaren MP4-12C",
    brand: "McLaren",
    category: "Supercar",
    year: 2011,
    description: "First production car wholly designed by McLaren since F1.",
    specs: { engine: "3.8L Twin-Turbo V8", horsepower: "592 HP" },
    releaseDate: "2011-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 137, // New ID
    title: "McLaren Solus GT",
    brand: "McLaren",
    category: "Track-Only Hypercar",
    year: 2023,
    description: "Single-seater, V10-powered, from Gran Turismo concept.",
    specs: { engine: "5.2L NA V10", horsepower: "829 HP" },
    releaseDate: "2022-08-19",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 138, // New ID
    title: "McLaren 750S",
    brand: "McLaren",
    category: "Supercar",
    year: 2023,
    description: "Successor to 720S, lighter and more powerful.",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "740 HP" },
    releaseDate: "2023-04-25",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 139, // New ID
    title: "McLaren M6GT",
    brand: "McLaren",
    category: "Classic Prototype",
    year: 1969,
    description: "Road car project by Bruce McLaren.",
    specs: { engine: "Chevrolet V8", horsepower: "Various" },
    releaseDate: "1969-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.5, featured: false, gallery: []
  },
  {
    id: 140, // New ID
    title: "McLaren 620R",
    brand: "McLaren",
    category: "Road-Legal Race Car",
    year: 2020,
    description: "Road version of 570S GT4 racer.",
    specs: { engine: "3.8L Twin-Turbo V8", horsepower: "611 HP" },
    releaseDate: "2019-12-09",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  // ASTON MARTIN (20+ cars)
  {
    id: 141, // New ID
    title: "Aston Martin Valkyrie",
    brand: "Aston Martin",
    category: "Hypercar",
    year: 2022,
    description: "Developed with Red Bull Racing, an F1-inspired hypercar for the road.",
    specs: { engine: "6.5L NA V12 Hybrid (Cosworth)", horsepower: "1160 HP", torque: "664 lb-ft", acceleration: "0-60 mph <2.5s", topSpeed: "250 mph", transmission: "7-speed Ricardo", drivetrain: "RWD" },
    releaseDate: "2021-07-15",
    image: "https://images.unsplash.com/photo-1511919884226-c37f667f0664?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1511919884226-c37f667f0664?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 142, // New ID
    title: "Aston Martin Valhalla",
    brand: "Aston Martin",
    category: "Hybrid Supercar",
    year: 2024,
    description: "Mid-engined hybrid supercar, 'Son of Valkyrie'.",
    specs: { engine: "4.0L Twin-Turbo V8 Hybrid (AMG)", horsepower: "937 HP" },
    releaseDate: "2023-01-01", // Anticipated production
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 143, // New ID
    title: "Aston Martin DBS Superleggera",
    brand: "Aston Martin",
    category: "Super GT",
    year: 2018,
    description: "Flagship Super GT with twin-turbo V12.",
    specs: { engine: "5.2L Twin-Turbo V12", horsepower: "715 HP" },
    releaseDate: "2018-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 144, // New ID
    title: "Aston Martin DB11 AMR",
    brand: "Aston Martin",
    category: "Grand Tourer",
    year: 2018,
    description: "Performance version of the DB11 V12.",
    specs: { engine: "5.2L Twin-Turbo V12", horsepower: "630 HP" },
    releaseDate: "2018-05-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 145, // New ID
    title: "Aston Martin Vantage F1 Edition",
    brand: "Aston Martin",
    category: "Sports Car",
    year: 2021,
    description: "Inspired by F1 safety car, more power and aero.",
    specs: { engine: "4.0L Twin-Turbo V8 (AMG)", horsepower: "528 HP" },
    releaseDate: "2021-03-22",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 146, // New ID
    title: "Aston Martin DBX707",
    brand: "Aston Martin",
    category: "Performance SUV",
    year: 2022,
    description: "World's most powerful luxury SUV (at launch).",
    specs: { engine: "4.0L Twin-Turbo V8 (AMG)", horsepower: "697 HP (707PS)" },
    releaseDate: "2022-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: true, gallery: []
  },
  {
    id: 147, // New ID
    title: "Aston Martin One-77",
    brand: "Aston Martin",
    category: "Hypercar",
    year: 2009,
    description: "Ultra-exclusive, naturally aspirated V12 hypercar.",
    specs: { engine: "7.3L NA V12 (Cosworth)", horsepower: "750 HP" },
    releaseDate: "2009-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 148, // New ID
    title: "Aston Martin Vulcan",
    brand: "Aston Martin",
    category: "Track-Only Hypercar",
    year: 2015,
    description: "Track-only monster with a massive V12.",
    specs: { engine: "7.0L NA V12", horsepower: "820 HP" },
    releaseDate: "2015-02-25",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: true, gallery: []
  },
  {
    id: 149, // New ID
    title: "Aston Martin DB5",
    brand: "Aston Martin",
    category: "Classic GT",
    year: 1963,
    description: "James Bond's iconic car.",
    specs: { engine: "4.0L I6", horsepower: "282 HP" },
    releaseDate: "1963-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 150, // New ID
    title: "Aston Martin Victor",
    brand: "Aston Martin",
    category: "Bespoke Supercar",
    year: 2020,
    description: "One-off, manual V12 based on One-77.",
    specs: { engine: "7.3L NA V12 (Cosworth)", horsepower: "836 HP" },
    releaseDate: "2020-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 151, // New ID
    title: "Aston Martin V12 Speedster",
    brand: "Aston Martin",
    category: "Limited Edition Roadster",
    year: 2021,
    description: "Open-cockpit, twin-turbo V12 barchetta.",
    specs: { engine: "5.2L Twin-Turbo V12", horsepower: "690 HP" },
    releaseDate: "2020-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 152, // New ID
    title: "Aston Martin Rapide AMR",
    brand: "Aston Martin",
    category: "Performance Sedan",
    year: 2018,
    description: "Sportiest version of the Rapide four-door.",
    specs: { engine: "6.0L NA V12", horsepower: "595 HP" },
    releaseDate: "2018-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 153, // New ID
    title: "Aston Martin Lagonda Taraf",
    brand: "Aston Martin",
    category: "Ultra-Luxury Sedan",
    year: 2015,
    description: "Extremely exclusive Lagonda sedan.",
    specs: { engine: "6.0L NA V12", horsepower: "533 HP" },
    releaseDate: "2014-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 154, // New ID
    title: "Aston Martin DB4 GT Zagato",
    brand: "Aston Martin",
    category: "Classic Race Car",
    year: 1960,
    description: "Lightweight, Zagato-bodied DB4.",
    specs: { engine: "3.7L I6", horsepower: "314 HP" },
    releaseDate: "1960-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 155, // New ID
    title: "Aston Martin Vantage V600 Le Mans",
    brand: "Aston Martin",
    category: "Classic Supercar",
    year: 1999,
    description: "Brutal twin-supercharged V8 monster.",
    specs: { engine: "5.3L Twin-Supercharged V8", horsepower: "600 HP" },
    releaseDate: "1999-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 156, // New ID
    title: "Aston Martin Valkyrie AMR Pro",
    brand: "Aston Martin",
    category: "Track-Only Hypercar",
    year: 2022,
    description: "Unrestrained track version of Valkyrie.",
    specs: { engine: "6.5L NA V12 (Cosworth)", horsepower: "1000+ HP" },
    releaseDate: "2021-06-28",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 157, // New ID
    title: "Aston Martin DB12",
    brand: "Aston Martin",
    category: "Super Tourer",
    year: 2023,
    description: "Successor to DB11, claimed 'world's first Super Tourer'.",
    specs: { engine: "4.0L Twin-Turbo V8 (AMG)", horsepower: "671 HP" },
    releaseDate: "2023-05-24",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: true, gallery: []
  },
  {
    id: 158, // New ID
    title: "Aston Martin Bulldog",
    brand: "Aston Martin",
    category: "Concept Supercar",
    year: 1979,
    description: "Wedge-shaped concept, recently restored to 200mph.",
    specs: { engine: "5.3L Twin-Turbo V8", horsepower: "600 HP (target)" },
    releaseDate: "1979-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.0, featured: false, gallery: []
  },
  {
    id: 159, // New ID
    title: "Aston Martin CC100 Speedster",
    brand: "Aston Martin",
    category: "Concept Roadster",
    year: 2013,
    description: "Centenary celebration concept.",
    specs: { engine: "6.0L NA V12", horsepower: "500+ HP" },
    releaseDate: "2013-05-19",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 160, // New ID
    title: "Aston Martin Vanquish Zagato Shooting Brake",
    brand: "Aston Martin",
    category: "Limited Edition Wagon",
    year: 2018,
    description: "Ultra-rare Zagato-bodied wagon.",
    specs: { engine: "5.9L NA V12", horsepower: "592 HP" },
    releaseDate: "2017-08-15",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: true, gallery: []
  },
  // BUGATTI (20+ cars)
  {
    id: 161, // New ID
    title: "Bugatti Chiron Super Sport 300+",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2021,
    description: "The first production car to break the 300 mph barrier (achieved 304.773 mph).",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1578 HP", torque: "1180 lb-ft", acceleration: "0-60 mph in 2.3s", topSpeed: "304 mph (limited for production)", transmission: "7-speed DSG", drivetrain: "AWD" },
    releaseDate: "2019-09-02",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 162, // New ID
    title: "Bugatti Veyron 16.4 Super Sport",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2010,
    description: "Former world's fastest production car.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1184 HP" },
    releaseDate: "2010-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 163, // New ID
    title: "Bugatti Chiron Pur Sport",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2020,
    description: "Handling-focused Chiron variant.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2020-03-03",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 164, // New ID
    title: "Bugatti Divo",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2020,
    description: "Track-focused, limited-run Chiron-based model.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2018-08-24",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 165, // New ID
    title: "Bugatti Centodieci",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2022,
    description: "Tribute to EB110, highly exclusive.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1578 HP" },
    releaseDate: "2019-08-16",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 166, // New ID
    title: "Bugatti La Voiture Noire",
    brand: "Bugatti",
    category: "One-Off Hypercar",
    year: 2019,
    description: "World's most expensive new car (at time of sale).",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2019-03-05",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 167, // New ID
    title: "Bugatti Bolide",
    brand: "Bugatti",
    category: "Track-Only Hypercar",
    year: 2024,
    description: "Extreme track machine, W16's swansong.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1825 HP (race fuel)" },
    releaseDate: "2020-10-28",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 168, // New ID
    title: "Bugatti EB110 Super Sport",
    brand: "Bugatti",
    category: "Classic Supercar",
    year: 1992,
    description: "90s Bugatti icon, quad-turbo V12.",
    specs: { engine: "3.5L Quad-Turbo V12", horsepower: "603 HP" },
    releaseDate: "1992-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 169, // New ID
    title: "Bugatti Chiron Sport",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2018,
    description: "Slightly lighter, more agile Chiron.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2018-03-06",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 170, // New ID
    title: "Bugatti Veyron Grand Sport Vitesse",
    brand: "Bugatti",
    category: "Convertible Hypercar",
    year: 2012,
    description: "Fastest open-top car at the time.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1184 HP" },
    releaseDate: "2012-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 171, // New ID
    title: "Bugatti Chiron Noire",
    brand: "Bugatti",
    category: "Special Edition Hypercar",
    year: 2020,
    description: "Special edition Chiron with blacked-out theme.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2019-12-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 172, // New ID
    title: "Bugatti Type 57SC Atlantic",
    brand: "Bugatti",
    category: "Classic Masterpiece",
    year: 1936,
    description: "One of the most beautiful and valuable cars ever.",
    specs: { engine: "3.3L Supercharged I8", horsepower: "~200 HP" },
    releaseDate: "1936-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 173, // New ID
    title: "Bugatti Chiron Sport 110 Ans Bugatti",
    brand: "Bugatti",
    category: "Anniversary Edition",
    year: 2019,
    description: "Celebrating 110 years of Bugatti.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2019-02-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 174, // New ID
    title: "Bugatti Veyron Pur Sang",
    brand: "Bugatti",
    category: "Limited Edition Veyron",
    year: 2007,
    description: "Exposed aluminum and carbon fiber body.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "987 HP" },
    releaseDate: "2007-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 175, // New ID
    title: "Bugatti Mistral",
    brand: "Bugatti",
    category: "Roadster Hypercar",
    year: 2024,
    description: "Last W16 roadster from Bugatti.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1578 HP" },
    releaseDate: "2022-08-19",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 176, // New ID
    title: "Bugatti Galibier 16C Concept",
    brand: "Bugatti",
    category: "Luxury Sedan Concept",
    year: 2009,
    description: "Concept for a Bugatti sedan.",
    specs: { engine: "8.0L Supercharged W16", horsepower: "800-1000 HP (est)" },
    releaseDate: "2009-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.5, featured: false, gallery: []
  },
  {
    id: 177, // New ID
    title: "Bugatti Chiron Hermès Edition",
    brand: "Bugatti",
    category: "One-Off Bespoke",
    year: 2019,
    description: "Collaboration with Hermès for Manny Khoshbin.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2019-12-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 178, // New ID
    title: "Bugatti Veyron Sang Noir",
    brand: "Bugatti",
    category: "Limited Edition Veyron",
    year: 2008,
    description: "Blacked-out special edition.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "987 HP" },
    releaseDate: "2008-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 179, // New ID
    title: "Bugatti Chiron Profilée",
    brand: "Bugatti",
    category: "One-Off Hypercar",
    year: 2022,
    description: "Unique Chiron between Sport and Pur Sport.",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1479 HP" },
    releaseDate: "2022-12-21",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 180, // New ID
    title: "Bugatti EB118 Concept",
    brand: "Bugatti",
    category: "Concept Coupe",
    year: 1998,
    description: "Early VW-era Bugatti concept by Giugiaro.",
    specs: { engine: "6.3L W18", horsepower: "555 HP" },
    releaseDate: "1998-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.0, featured: false, gallery: []
  },
  // KOENIGSEGG (20+ cars)
  {
    id: 181, // New ID
    title: "Koenigsegg Jesko Absolut",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2022,
    description: "Designed to be the fastest Koenigsegg ever, targeting speeds over 310 mph.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1600 HP (E85)", torque: "1106 lb-ft", acceleration: "N/A (top speed focus)", topSpeed: "310+ mph (theoretical)", transmission: "9-speed LST", drivetrain: "RWD" },
    releaseDate: "2020-03-03",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 182, // New ID
    title: "Koenigsegg Gemera",
    brand: "Koenigsegg",
    category: "Mega-GT",
    year: 2024,
    description: "World's first 'Mega-GT', four seats, hybrid.",
    specs: { engine: "2.0L Twin-Turbo I3 Hybrid (TFG) / V8 Option", horsepower: "1700 HP (TFG) / 2300 HP (V8)" },
    releaseDate: "2020-03-03",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 183, // New ID
    title: "Koenigsegg Regera",
    brand: "Koenigsegg",
    category: "Hybrid Hypercar",
    year: 2016,
    description: "Luxury hypercar with Direct Drive system.",
    specs: { engine: "5.0L Twin-Turbo V8 Hybrid", horsepower: "1500 HP" },
    releaseDate: "2015-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 184, // New ID
    title: "Koenigsegg Agera RS",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2015,
    description: "Former world's fastest production car (277.9 mph).",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1160 HP (can be 1MW)" },
    releaseDate: "2015-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 185, // New ID
    title: "Koenigsegg One:1",
    brand: "Koenigsegg",
    category: "Megacar",
    year: 2014,
    description: "First production car with 1:1 power-to-weight ratio (PS to kg).",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1360 PS (1MW)" },
    releaseDate: "2014-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 186, // New ID
    title: "Koenigsegg CCXR Trevita",
    brand: "Koenigsegg",
    category: "Limited Edition Hypercar",
    year: 2009,
    description: "Diamond weave carbon fiber, only 2 made.",
    specs: { engine: "4.8L Twin-Supercharged V8", horsepower: "1018 HP" },
    releaseDate: "2009-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 187, // New ID
    title: "Koenigsegg Jesko Attack",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2022,
    description: "High-downforce version of the Jesko.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1600 HP (E85)" },
    releaseDate: "2019-03-05",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: false, gallery: []
  },
  {
    id: 188, // New ID
    title: "Koenigsegg CC8S",
    brand: "Koenigsegg",
    category: "Classic Supercar",
    year: 2002,
    description: "First production Koenigsegg.",
    specs: { engine: "4.7L Supercharged Ford V8", horsepower: "655 HP" },
    releaseDate: "2002-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 189, // New ID
    title: "Koenigsegg CCR",
    brand: "Koenigsegg",
    category: "Supercar",
    year: 2004,
    description: "Briefly held world's fastest production car title.",
    specs: { engine: "4.7L Twin-Supercharged V8", horsepower: "806 HP" },
    releaseDate: "2004-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 190, // New ID
    title: "Koenigsegg Agera Final Edition 'Thor'",
    brand: "Koenigsegg",
    category: "Limited Edition Hypercar",
    year: 2018,
    description: "One of two final Ageras.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1360 HP (1MW)" },
    releaseDate: "2018-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 191, // New ID
    title: "Koenigsegg Agera Final Edition 'Vader'",
    brand: "Koenigsegg",
    category: "Limited Edition Hypercar",
    year: 2018,
    description: "Second of two final Ageras.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1360 HP (1MW)" },
    releaseDate: "2018-07-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 192, // New ID
    title: "Koenigsegg CCGT",
    brand: "Koenigsegg",
    category: "Race Car Prototype",
    year: 2007,
    description: "GT1 race car that never raced due to rule changes.",
    specs: { engine: "5.0L NA V8", horsepower: "~600 HP" },
    releaseDate: "2007-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 193, // New ID
    title: "Koenigsegg Quant Concept",
    brand: "Koenigsegg",
    category: "Electric Concept",
    year: 2009,
    description: "Early electric concept collaboration.",
    specs: { engine: "Electric Motors (NLV Quant)", horsepower: "512 HP (target)" },
    releaseDate: "2009-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.0, featured: false, gallery: []
  },
  {
    id: 194, // New ID
    title: "Koenigsegg Agera R",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2011,
    description: "Flex-fuel version of Agera, could run on E85.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1140 HP (E85)" },
    releaseDate: "2011-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 195, // New ID
    title: "Koenigsegg Agera S",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2012,
    description: "Agera for markets without E85, 1030hp on premium unleaded.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1030 HP" },
    releaseDate: "2012-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 196, // New ID
    title: "Koenigsegg CCXR Edition",
    brand: "Koenigsegg",
    category: "Limited Edition Hypercar",
    year: 2008,
    description: "More track-focused CCXR.",
    specs: { engine: "4.8L Twin-Supercharged V8", horsepower: "1018 HP" },
    releaseDate: "2008-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 197, // New ID
    title: "Koenigsegg CC850",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2024,
    description: "Tribute to CC8S with manual/auto TWMPAFMPC gearbox.",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1385 HP (E85)" },
    releaseDate: "2022-08-19",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 198, // New ID - Hypothetical
    title: "Koenigsegg Legera Concept",
    brand: "Koenigsegg",
    category: "Entry Level Hypercar Concept",
    year: 2025,
    description: "A hypothetical 'smaller' Koenigsegg.",
    specs: { engine: "V6 Hybrid", horsepower: "800 HP (est)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 199, // New ID - Hypothetical
    title: "Koenigsegg Ghost",
    brand: "Koenigsegg",
    category: "Luxury EV Concept",
    year: 2026,
    description: "A hypothetical Koenigsegg EV sedan.",
    specs: { engine: "Electric", horsepower: "1200 HP (est)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 200, // New ID - Hypothetical
    title: "Koenigsegg Utagera",
    brand: "Koenigsegg",
    category: "Off-Road Hyper-SUV",
    year: 2027,
    description: "A hypothetical Koenigsegg performance SUV.",
    specs: { engine: "Hybrid V8", horsepower: "1500 HP (est)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  // RIMAC (20+ cars)
  {
    id: 201, // New ID
    title: "Rimac Nevera",
    brand: "Rimac",
    category: "Electric Hypercar",
    year: 2022,
    description: "Record-breaking all-electric hypercar pushing performance boundaries.",
    specs: { engine: "Four electric motors", horsepower: "1914 HP", torque: "1740 lb-ft", acceleration: "0-60 mph in 1.85s", topSpeed: "258 mph", transmission: "Single-speed (F&R)", drivetrain: "AWD" },
    releaseDate: "2021-06-01",
    image: "https://images.unsplash.com/photo-1633655072331-e8ad59b01d44?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1633655072331-e8ad59b01d44?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 202, // New ID
    title: "Rimac C_Two (Concept)",
    brand: "Rimac",
    category: "Electric Hypercar Concept",
    year: 2018,
    description: "Concept predecessor to Nevera, showcasing advanced electric powertrain tech.",
    specs: { engine: "Four electric motors", horsepower: "1888 HP", torque: "1696 lb-ft", acceleration: "0-60 mph in 1.85s (claimed)", topSpeed: "258 mph (claimed)", transmission: "Single-speed", drivetrain: "AWD" },
    releaseDate: "2018-03-06",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 203, // New ID
    title: "Rimac Concept_One",
    brand: "Rimac",
    category: "Electric Supercar",
    year: 2013,
    description: "Rimac's first production car, one of the earliest electric supercars.",
    specs: { engine: "Four electric motors", horsepower: "1224 HP" },
    releaseDate: "2013-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 204, // New ID
    title: "Rimac Nevera Time Attack Edition",
    brand: "Rimac",
    category: "Limited Edition Hypercar",
    year: 2023,
    description: "Special edition celebrating Nurburgring record.",
    specs: { horsepower: "1914 HP" },
    releaseDate: "2023-08-18",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 205, // New ID - Tech partner
    title: "Pininfarina Battista (Powered by Rimac)",
    brand: "Rimac",
    category: "Technology Partner",
    year: 2021,
    description: "Battista uses Rimac powertrain technology.",
    specs: { horsepower: "1900 HP" },
    releaseDate: "2020-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 206, // New ID - Prototype
    title: "Rimac Volar-e (Applus+ IDIADA)",
    brand: "Rimac",
    category: "Prototype",
    year: 2013,
    description: "Early prototype showcasing Rimac tech for Applus+ IDIADA.",
    specs: { horsepower: "1000 HP (approx)" },
    releaseDate: "2013-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 207, // New ID - Sister company
    title: "Rimac Greyp G12S E-Bike (Sister Company)",
    brand: "Rimac",
    category: "E-Mobility",
    year: 2015,
    description: "High-performance e-bike from sister company Greyp.",
    specs: { topSpeed: "70 km/h" },
    releaseDate: "2015-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.0, featured: false, gallery: []
  },
  {
    id: 208, // New ID - Future Tech
    title: "Rimac Autonomous Driving Platform (Concept)",
    brand: "Rimac",
    category: "Future Tech",
    year: 2025,
    description: "Conceptual autonomous driving platform.",
    specs: { level: "Level 5 (target)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 209, // New ID - Battery Technology
    title: "Rimac Energy Storage Solutions",
    brand: "Rimac",
    category: "Battery Technology",
    year: 2020,
    description: "High-performance battery systems for OEMs.",
    specs: { capacity: "Various" },
    releaseDate: "2020-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 210, // New ID - Hypothetical
    title: "Rimac Nevera Safety Car (Hypothetical)",
    brand: "Rimac",
    category: "Motorsport Concept",
    year: 2024,
    description: "Hypothetical Nevera as a safety car.",
    specs: { horsepower: "1914 HP" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 211, // New ID - Future Concept
    title: "Rimac C_Three (Future Concept)",
    brand: "Rimac",
    category: "Future Hypercar",
    year: 2028,
    description: "Hypothetical next-gen Rimac hypercar.",
    specs: { horsepower: "2500 HP (target)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 212, // New ID - Off-Road Concept
    title: "Rimac All-Terrain EV Concept",
    brand: "Rimac",
    category: "Off-Road Concept",
    year: 2026,
    description: "Conceptual Rimac electric off-roader.",
    specs: { horsepower: "1500 HP (target)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 213, // New ID - Track Car Concept
    title: "Rimac Single-Seater Track Car (Concept)",
    brand: "Rimac",
    category: "Track Car Concept",
    year: 2027,
    description: "Hypothetical lightweight EV track car.",
    specs: { horsepower: "1000 HP (target)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 214, // New ID - Component Supplier
    title: "Rimac Powertrain for Aston Martin Valkyrie (KERS)",
    brand: "Rimac",
    category: "Component Supplier",
    year: 2021,
    description: "Rimac supplied KERS hybrid system for Valkyrie.",
    specs: { component: "KERS" },
    releaseDate: "2021-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 215, // New ID - Component Supplier
    title: "Rimac Powertrain for Koenigsegg Regera (Battery)",
    brand: "Rimac",
    category: "Component Supplier",
    year: 2016,
    description: "Rimac supplied battery pack for Regera.",
    specs: { component: "Battery Pack" },
    releaseDate: "2016-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.4, featured: false, gallery: []
  },
  {
    id: 216, // New ID - Corporate Milestone
    title: "Bugatti Rimac Company Formation",
    brand: "Rimac",
    category: "Corporate Milestone",
    year: 2021,
    description: "Merger of Bugatti and Rimac Automobili's hypercar division.",
    specs: { event: "Merger" },
    releaseDate: "2021-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 217, // New ID - Hypothetical GT
    title: "Rimac Nevera Long Range Cruiser (Hypothetical)",
    brand: "Rimac",
    category: "GT Concept",
    year: 2025,
    description: "A more GT-focused Nevera variant.",
    specs: { range: "500 miles (target)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 218, // New ID - Hypothetical Flying Car
    title: "Rimac Flying Car Concept (Hypothetical)",
    brand: "Rimac",
    category: "Future Mobility",
    year: 2030,
    description: "Hypothetical VTOL personal aircraft.",
    specs: { propulsion: "Electric Ducted Fans" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.5, featured: false, gallery: []
  },
  {
    id: 219, // New ID
    title: "Rimac Concept_S (Track Version of Concept_One)",
    brand: "Rimac",
    category: "Track Car",
    year: 2016,
    description: "More powerful, track-focused version of Concept_One.",
    specs: { horsepower: "1384 HP" },
    releaseDate: "2016-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 220, // New ID - Hypothetical Convertible
    title: "Rimac Nevera Convertible (Hypothetical)",
    brand: "Rimac",
    category: "Convertible Hypercar",
    year: 2026,
    description: "Open-top version of the Nevera.",
    specs: { horsepower: "1914 HP" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  // PAGANI (20+ cars)
  {
    id: 221, // New ID
    title: "Pagani Utopia",
    brand: "Pagani",
    category: "Hypercar",
    year: 2023,
    description: "Successor to the Huayra, focus on lightness and V12 power, manual option.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "852 HP", torque: "811 lb-ft", transmission: "7-speed Manual/Automated Manual", drivetrain: "RWD" },
    releaseDate: "2022-09-12",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 222, // New ID
    title: "Pagani Huayra BC Roadster",
    brand: "Pagani",
    category: "Hypercar Roadster",
    year: 2019,
    description: "Open-top version of the hardcore Huayra BC.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "791 HP" },
    releaseDate: "2019-07-31",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 223, // New ID
    title: "Pagani Zonda Cinque Roadster",
    brand: "Pagani",
    category: "Limited Edition Hypercar",
    year: 2009,
    description: "Roadster version of the Zonda Cinque, only 5 made.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "669 HP" },
    releaseDate: "2009-06-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 224, // New ID
    title: "Pagani Zonda R",
    brand: "Pagani",
    category: "Track-Only Hypercar",
    year: 2009,
    description: "Ultimate track Zonda, not road legal.",
    specs: { engine: "6.0L NA V12 (AMG GT1 engine)", horsepower: "740 HP" },
    releaseDate: "2007-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 225, // New ID
    title: "Pagani Huayra Imola",
    brand: "Pagani",
    category: "Limited Edition Hypercar",
    year: 2020,
    description: "Track-focused Huayra, only 5 made.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "827 HP" },
    releaseDate: "2020-02-13",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 226, // New ID
    title: "Pagani Zonda F",
    brand: "Pagani",
    category: "Supercar",
    year: 2005,
    description: "Dedicated to Juan Manuel Fangio.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "594 HP" },
    releaseDate: "2005-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 227, // New ID
    title: "Pagani Huayra",
    brand: "Pagani",
    category: "Hypercar",
    year: 2011,
    description: "Successor to Zonda, active aerodynamics.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "720 HP" },
    releaseDate: "2011-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.6, featured: false, gallery: []
  },
  {
    id: 228, // New ID
    title: "Pagani Zonda C12 S 7.3",
    brand: "Pagani",
    category: "Supercar",
    year: 2002,
    description: "Updated Zonda with larger 7.3L engine.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "547 HP" },
    releaseDate: "2002-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: false, gallery: []
  },
  {
    id: 229, // New ID
    title: "Pagani Zonda Tricolore",
    brand: "Pagani",
    category: "Limited Edition Hypercar",
    year: 2010,
    description: "Tribute to Italian aerobatic team, 3 made.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "661 HP" },
    releaseDate: "2010-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 230, // New ID
    title: "Pagani Huayra BC",
    brand: "Pagani",
    category: "Hypercar",
    year: 2016,
    description: "Lighter, more powerful Huayra named after Benny Caiola.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "745 HP" },
    releaseDate: "2016-02-18",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 231, // New ID - One-off example
    title: "Pagani Zonda 760RS",
    brand: "Pagani",
    category: "One-Off Hypercar",
    year: 2012,
    description: "One-off Zonda for a Chilean customer.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "750 HP" },
    releaseDate: "2012-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 232, // New ID
    title: "Pagani Huayra Roadster",
    brand: "Pagani",
    category: "Hypercar Roadster",
    year: 2017,
    description: "Open-top Huayra, lighter than coupe.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "754 HP" },
    releaseDate: "2017-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 233, // New ID
    title: "Pagani Zonda HP Barchetta",
    brand: "Pagani",
    category: "Limited Edition Hypercar",
    year: 2017,
    description: "Horacio Pagani's personal spec, 3 made.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "789 HP" },
    releaseDate: "2017-08-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 234, // New ID
    title: "Pagani Zonda Revolucion",
    brand: "Pagani",
    category: "Track-Only Hypercar",
    year: 2013,
    description: "Final version of Zonda R.",
    specs: { engine: "6.0L NA V12 (AMG)", horsepower: "789 HP" },
    releaseDate: "2013-06-04",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 235, // New ID
    title: "Pagani Huayra R",
    brand: "Pagani",
    category: "Track-Only Hypercar",
    year: 2021,
    description: "Naturally aspirated V12 track monster.",
    specs: { engine: "6.0L NA V12 (HWA)", horsepower: "838 HP" },
    releaseDate: "2021-03-18",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 10.0, featured: true, gallery: []
  },
  {
    id: 236, // New ID
    title: "Pagani Zonda C12",
    brand: "Pagani",
    category: "Supercar",
    year: 1999,
    description: "The first Pagani production car.",
    specs: { engine: "6.0L NA V12 (Mercedes)", horsepower: "389 HP" },
    releaseDate: "1999-03-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 237, // New ID
    title: "Pagani Codalunga",
    brand: "Pagani",
    category: "Limited Edition Longtail",
    year: 2022,
    description: "Longtail Huayra, inspired by 60s Le Mans racers, 5 made.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "829 HP" },
    releaseDate: "2022-06-16",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 238, // New ID
    title: "Pagani Zonda Uno (One-Off)",
    brand: "Pagani",
    category: "One-Off Hypercar",
    year: 2010,
    description: "One-off for a member of Qatari royal family.",
    specs: { engine: "7.3L NA V12 (AMG)", horsepower: "690 HP" },
    releaseDate: "2010-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 239, // New ID
    title: "Pagani Huayra Dinastia (Limited Edition)",
    brand: "Pagani",
    category: "Limited Edition Hypercar",
    year: 2016,
    description: "3 units for Chinese market, dragon-themed.",
    specs: { engine: "6.0L Twin-Turbo V12 (AMG)", horsepower: "720 HP" },
    releaseDate: "2016-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.7, featured: false, gallery: []
  },
  {
    id: 240, // New ID
    title: "Pagani Zonda GR (Race Car)",
    brand: "Pagani",
    category: "Race Car",
    year: 2003,
    description: "American Le Mans Series race car.",
    specs: { engine: "6.0L NA V12 (AMG)", horsepower: "~600 HP" },
    releaseDate: "2003-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  // LEXUS PERFORMANCE (20+ cars)
  {
    id: 241, // New ID
    title: "Lexus LFA Nürburgring Package",
    brand: "Lexus Performance",
    category: "Supercar",
    year: 2012,
    description: "Track-focused version of the LFA, limited to 50 units.",
    specs: { engine: "4.8L NA V10", horsepower: "563 HP", torque: "354 lb-ft", acceleration: "0-60 mph in 3.6s", topSpeed: "202 mph", transmission: "6-speed ASG", drivetrain: "RWD" },
    releaseDate: "2012-01-01",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1200&q=80",
    rating: 9.9, featured: true, gallery: []
  },
  {
    id: 242, // New ID
    title: "Lexus LFA",
    brand: "Lexus Performance",
    category: "Supercar",
    year: 2011,
    description: "Legendary V10 supercar with incredible sound.",
    specs: { engine: "4.8L NA V10", horsepower: "552 HP" },
    releaseDate: "2010-12-15",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: true, gallery: []
  },
  {
    id: 243, // New ID
    title: "Lexus RC F Track Edition",
    brand: "Lexus Performance",
    category: "Performance Coupe",
    year: 2020,
    description: "Lighter, more focused RC F.",
    specs: { engine: "5.0L NA V8", horsepower: "472 HP" },
    releaseDate: "2019-01-14",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.2, featured: false, gallery: []
  },
  {
    id: 244, // New ID
    title: "Lexus GS F",
    brand: "Lexus Performance",
    category: "Performance Sedan",
    year: 2016,
    description: "Naturally aspirated V8 sports sedan.",
    specs: { engine: "5.0L NA V8", horsepower: "467 HP" },
    releaseDate: "2015-01-13",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 245, // New ID
    title: "Lexus IS F",
    brand: "Lexus Performance",
    category: "Performance Sedan",
    year: 2008,
    description: "First 'F' model from Lexus.",
    specs: { engine: "5.0L NA V8", horsepower: "416 HP" },
    releaseDate: "2007-01-09",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 246, // New ID
    title: "Lexus LC 500 Performance Package",
    brand: "Lexus Performance",
    category: "Grand Tourer",
    year: 2018,
    description: "Luxury GT with V8 and handling upgrades.",
    specs: { engine: "5.0L NA V8", horsepower: "471 HP" },
    releaseDate: "2017-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: false, gallery: []
  },
  {
    id: 247, // New ID
    title: "Lexus IS 500 F Sport Performance",
    brand: "Lexus Performance",
    category: "Performance Sedan",
    year: 2022,
    description: "Return of the V8 to the IS sedan.",
    specs: { engine: "5.0L NA V8", horsepower: "472 HP" },
    releaseDate: "2021-02-22",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 248, // New ID
    title: "Lexus RC F Fuji Speedway Edition",
    brand: "Lexus Performance",
    category: "Limited Edition Coupe",
    year: 2021,
    description: "Limited run, carbon fiber clad RC F.",
    specs: { engine: "5.0L NA V8", horsepower: "472 HP" },
    releaseDate: "2020-09-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: true, gallery: []
  },
  {
    id: 249, // New ID
    title: "Lexus LFA AD-X (One-Off)",
    brand: "Lexus Performance",
    category: "One-Off Supercar",
    year: 2012,
    description: "Special LFA development car.",
    specs: { engine: "4.8L NA V10", horsepower: "552+ HP" },
    releaseDate: "2012-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.8, featured: false, gallery: []
  },
  {
    id: 250, // New ID
    title: "Lexus RC F GT3 (Race Car)",
    brand: "Lexus Performance",
    category: "GT3 Race Car",
    year: 2017,
    description: "Customer GT3 racing program car.",
    specs: { engine: "5.4L NA V8", horsepower: "500+ HP (BoP)" },
    releaseDate: "2016-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 251, // New ID
    title: "Lexus Electrified Sport Concept",
    brand: "Lexus Performance",
    category: "Electric Supercar Concept",
    year: 2021,
    description: "Spiritual successor to LFA, all-electric.",
    specs: { acceleration: "0-60 in low 2s (target)" },
    releaseDate: "2021-12-14",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.5, featured: true, gallery: []
  },
  {
    id: 252, // New ID
    title: "Lexus IS F CCS-R (Race Car)",
    brand: "Lexus Performance",
    category: "Race Car",
    year: 2011,
    description: "Pikes Peak and Nurburgring race car.",
    specs: { engine: "5.0L NA V8", horsepower: "416+ HP" },
    releaseDate: "2011-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.9, featured: false, gallery: []
  },
  {
    id: 253, // New ID - Hypothetical
    title: "Lexus LC F (Rumored/Hypothetical)",
    brand: "Lexus Performance",
    category: "Performance GT Concept",
    year: 2025,
    description: "Hypothetical high-performance LC variant.",
    specs: { engine: "Twin-Turbo V8 (est)", horsepower: "600+ HP (est)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.3, featured: false, gallery: []
  },
  {
    id: 254, // New ID
    title: "Lexus RC F Carbon Package",
    brand: "Lexus Performance",
    category: "Performance Coupe",
    year: 2015,
    description: "RC F with carbon fiber roof and wing.",
    specs: { engine: "5.0L NA V8", horsepower: "467 HP" },
    releaseDate: "2014-10-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 255, // New ID - Hypothetical
    title: "Toyota GR Supra (Lexus Tuned - Hypothetical)",
    brand: "Lexus Performance",
    category: "Sports Car Concept",
    year: 2024,
    description: "Hypothetical Supra tuned by Lexus F division.",
    specs: { engine: "3.0L Turbo I6", horsepower: "450 HP (est)" },
    releaseDate: "N/A",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.8, featured: false, gallery: []
  },
  {
    id: 256, // New ID
    title: "Lexus LC Convertible Inspiration Series",
    brand: "Lexus Performance",
    category: "Limited Edition GT",
    year: 2021,
    description: "Special edition LC Convertible.",
    specs: { engine: "5.0L NA V8", horsepower: "471 HP" },
    releaseDate: "2020-08-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.0, featured: false, gallery: []
  },
  {
    id: 257, // New ID - Concept
    title: "Lexus RZ 450e F Sport Performance (Concept)",
    brand: "Lexus Performance",
    category: "Electric SUV Concept",
    year: 2023,
    description: "Performance concept of the RZ EV.",
    specs: { engine: "Dual Electric Motors", horsepower: "300+ HP (est)" },
    releaseDate: "2023-01-13",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.7, featured: false, gallery: []
  },
  {
    id: 258, // New ID
    title: "Lexus GS F 10th Anniversary Edition",
    brand: "Lexus Performance",
    category: "Limited Edition Sedan",
    year: 2018,
    description: "Celebrating 10 years of F models.",
    specs: { engine: "5.0L NA V8", horsepower: "467 HP" },
    releaseDate: "2018-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: false, gallery: []
  },
  {
    id: 259, // New ID
    title: "Lexus RC F 10th Anniversary Edition",
    brand: "Lexus Performance",
    category: "Limited Edition Coupe",
    year: 2018,
    description: "Celebrating 10 years of F models.",
    specs: { engine: "5.0L NA V8", horsepower: "467 HP" },
    releaseDate: "2018-01-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 9.1, featured: false, gallery: []
  },
  {
    id: 260, // New ID
    title: "Lexus UX 300e F Sport (Styling)",
    brand: "Lexus Performance",
    category: "Electric Crossover",
    year: 2021,
    description: "Electric UX with F Sport styling cues.",
    specs: { engine: "Electric Motor", horsepower: "201 HP" },
    releaseDate: "2020-11-01",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=60",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    rating: 8.0, featured: false, gallery: []
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
    name: "Porsche",
    cars: mockCars.filter(car => car.brand === "Porsche")
  },
  {
    id: 6,
    name: "Ferrari",
    cars: mockCars.filter(car => car.brand === "Ferrari")
  },
  {
    id: 7,
    name: "Lamborghini",
    cars: mockCars.filter(car => car.brand === "Lamborghini")
  },
  {
    id: 8,
    name: "McLaren",
    cars: mockCars.filter(car => car.brand === "McLaren")
  },
  {
    id: 9,
    name: "Aston Martin",
    cars: mockCars.filter(car => car.brand === "Aston Martin")
  },
  {
    id: 10,
    name: "Bugatti",
    cars: mockCars.filter(car => car.brand === "Bugatti")
  },
  {
    id: 11,
    name: "Koenigsegg",
    cars: mockCars.filter(car => car.brand === "Koenigsegg")
  },
  {
    id: 12,
    name: "Rimac",
    cars: mockCars.filter(car => car.brand === "Rimac")
  },
  {
    id: 13,
    name: "Pagani",
    cars: mockCars.filter(car => car.brand === "Pagani")
  },
  {
    id: 14,
    name: "Lexus Performance",
    cars: mockCars.filter(car => car.brand === "Lexus Performance")
  },
  {
    id: 15,
    name: "Performance Sedans",
    cars: mockCars.filter(car => car.category === "Performance Sedan" || car.category === "Compact Performance Sedan" || car.category === "Luxury Performance Sedan" || car.category === "Electric Performance Sedan")
  },
  {
    id: 16,
    name: "Track Specials",
    cars: mockCars.filter(car => car.category === "Track Special" || car.category.includes("Track Car") || car.category === "Limited Edition" || car.category.includes("Race Car"))
  },
  {
    id: 17,
    name: "Hypercars",
    cars: mockCars.filter(car => car.category === "Hypercar" || car.category === "Megacar" || car.category.includes("Hypercar"))
  },
  {
    id: 18,
    name: "Electric Performance",
    cars: mockCars.filter(car => car.category.toLowerCase().includes("electric"))
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
    (car.description && car.description.toLowerCase().includes(lowercaseQuery)) ||
    (car.year && car.year.toString().includes(lowercaseQuery))
  );
};