import type { Experience, ExperienceCategory } from "@/types/experience";

const destinations = [
  "Montevideo, Uruguay",
  "Punta del Este, Uruguay",
  "Colonia del Sacramento, Uruguay",
  "Bariloche, Argentina",
  "Mendoza, Argentina",
  "Cusco, Peru",
  "Cartagena, Colombia",
  "Rio de Janeiro, Brazil",
  "Santiago, Chile",
  "San Pedro de Atacama, Chile",
] as const;

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const titlePrefixes = [
  "Discovery",
  "Signature",
  "Hidden Gems",
  "Weekend",
  "Sunrise",
  "Premium",
  "Local Flavors",
  "Panoramic",
  "Soulful",
  "Explorer",
] as const;

const descriptionFragments = [
  "guided moments and local recommendations",
  "a balanced itinerary for curious travelers",
  "scenic stops and memorable highlights",
  "small-group activities with flexible pacing",
  "a practical route that covers the essentials",
  "immersive touches inspired by the destination",
  "free time to explore at your own rhythm",
  "carefully selected experiences for first-time visitors",
  "easy logistics and a traveler-friendly schedule",
  "a compact format designed to make the most of each day",
] as const;

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const destination = destinations[index % destinations.length];
  const category = categories[index % categories.length];
  const prefix = titlePrefixes[index % titlePrefixes.length];
  const descriptionFragment =
    descriptionFragments[index % descriptionFragments.length];
  const sequence = index + 1;

  return {
    id: `exp-${String(sequence).padStart(3, "0")}`,
    title: `${prefix} ${category} Experience ${sequence}`,
    description: `Experience ${sequence} in ${destination} blends ${category.toLowerCase()} activities with ${descriptionFragment}.`,
    category,
    destination,
    price: 95 + (index % 10) * 18 + Math.floor(index / 10) * 12,
    rating: Number((3.8 + ((index % 12) * 0.1)).toFixed(1)),
    imageUrl: `https://placehold.co/640x420?text=Experience+${sequence}`,
  };
});

export const experienceCategories = categories;

export const experienceDestinations = [...new Set(experiences.map((item) => item.destination))];
