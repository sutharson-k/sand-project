// Placeholder data for the application

export const SAND_TYPES = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: [
    "River Sand", "Concrete Sand", "Pit Sand", "M-Sand", "Fill Sand", 
    "Masonry Sand", "Plaster Sand", "Utility Sand", "Screened Sand"
  ][i % 9] + (i > 8 ? ` Type ${Math.floor(i/9) + 1}` : ""),
  description: "High quality construction grade sand suitable for various building applications. Sourced from certified quarries.",
  image: [
    "/images/sand-river.jpg",
    "/images/sand-concrete.jpg", 
    "/images/sand-pit.jpg",
    "/images/sand-msand.jpg",
    "/images/sand-general.jpg"
  ][i % 5],
  pricePerTon: 45 + (i % 20),
  rating: 4 + (i % 10) / 10
}));

export const DEALERS = [
  { id: 1, name: "RockSolid Aggregates", location: "North Quarry, Zone A", price: 45, rating: 4.8 },
  { id: 2, name: "BuildBase Supplies", location: "Industrial Park, Sector 4", price: 42, rating: 4.5 },
  { id: 3, name: "Premium Earthworks", location: "Riverside Depot", price: 48, rating: 4.9 },
  { id: 4, name: "City Sand Co.", location: "Metro Distribution Center", price: 44, rating: 4.6 },
];

export const TRUCKS = [
  { id: 1, name: "Standard Tipper", capacity: "10 Tons", price: 150, image: "/images/truck-small.jpg" },
  { id: 2, name: "Heavy Duty Dumper", capacity: "20 Tons", price: 250, image: "/images/truck-large.jpg" },
  { id: 3, name: "Multi-Axle Trailer", capacity: "35 Tons", price: 400, image: "/images/truck-large.jpg" },
];
