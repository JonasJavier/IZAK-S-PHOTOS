// Optimized, web-ready photography (built from the originals via scripts/optimize_images.py)
import editorialDark from "../images/optimized/editorial-dark.jpg";
import editorialFur from "../images/optimized/editorial-fur.jpg";
import editorialSuit from "../images/optimized/editorial-suit.jpg";
import eventChampagne from "../images/optimized/event-champagne.jpg";
import izakStudio from "../images/optimized/izak-studio.jpg";
import lifestyleSunflowers from "../images/optimized/lifestyle-sunflowers.jpg";
import portraitFreckles from "../images/optimized/portrait-freckles.jpg";
import portraitGolden from "../images/optimized/portrait-golden.jpg";
import portraitNaturalLight from "../images/optimized/portrait-natural-light.jpg";
import portraitWarm from "../images/optimized/portrait-warm.jpg";
import travelBlooms from "../images/optimized/travel-blooms.jpg";
import travelCave from "../images/optimized/travel-cave.jpg";
import travelCoast from "../images/optimized/travel-coast.jpg";
import travelIceland from "../images/optimized/travel-iceland.jpg";
import travelMoon from "../images/optimized/travel-moon.jpg";
import travelStreet from "../images/optimized/travel-street.jpg";
import weddingDunes from "../images/optimized/wedding-dunes.jpg";
import weddingRings from "../images/optimized/wedding-rings.jpg";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Booking", path: "/booking" },
];

export const categories = ["All", "Portraits", "Editorial", "Weddings", "Travel"];

// The full gallery — width/height let the layout reserve space (no layout shift).
export const photos = [
  { id: "morning-light", src: portraitNaturalLight, w: 735, h: 894, category: "Portraits", title: "Morning Light", location: "Studio · Santo Domingo" },
  { id: "closer", src: portraitFreckles, w: 700, h: 1083, category: "Portraits", title: "Closer", location: "Natural Light" },
  { id: "amber", src: portraitWarm, w: 736, h: 1103, category: "Portraits", title: "Amber", location: "Available Light" },
  { id: "last-light", src: portraitGolden, w: 954, h: 1700, category: "Portraits", title: "Last Light", location: "Golden Hour" },
  { id: "sunflower-field", src: lifestyleSunflowers, w: 1133, h: 1700, category: "Portraits", title: "Sunflower Field", location: "Countryside" },

  { id: "in-shadow", src: editorialDark, w: 1614, h: 974, category: "Editorial", title: "In Shadow", location: "Editorial Study" },
  { id: "wild-collar", src: editorialFur, w: 957, h: 1700, category: "Editorial", title: "Wild Collar", location: "Studio Session" },
  { id: "the-founder", src: editorialSuit, w: 1023, h: 1537, category: "Editorial", title: "The Founder", location: "Brand Campaign" },

  { id: "the-promise", src: weddingRings, w: 1133, h: 1700, category: "Weddings", title: "The Promise", location: "Garden Ceremony" },
  { id: "into-the-dunes", src: weddingDunes, w: 1133, h: 1700, category: "Weddings", title: "Into the Dunes", location: "Elopement" },
  { id: "after-hours", src: eventChampagne, w: 1536, h: 1024, category: "Weddings", title: "After Hours", location: "Private Reception" },

  { id: "old-town", src: travelStreet, w: 1127, h: 1700, category: "Travel", title: "Old Town", location: "Brescia, Italy" },
  { id: "cathedral-of-light", src: travelCave, w: 1133, h: 1700, category: "Travel", title: "Cathedral of Light", location: "Gua Jomblang" },
  { id: "geothermal", src: travelIceland, w: 1700, h: 1133, category: "Travel", title: "Geothermal", location: "Námafjall, Iceland" },
  { id: "moonrise", src: travelMoon, w: 1360, h: 1700, category: "Travel", title: "Moonrise", location: "Open Fields" },
  { id: "coastal-ridge", src: travelCoast, w: 1133, h: 1700, category: "Travel", title: "Coastal Ridge", location: "Pacific Coast" },
  { id: "wildflower", src: travelBlooms, w: 1130, h: 1700, category: "Travel", title: "Wildflower", location: "Late Spring" },
];

// A curated subset for the homepage "selected work" editorial layout.
export const featured = [
  photos.find((p) => p.id === "in-shadow"),
  photos.find((p) => p.id === "the-promise"),
  photos.find((p) => p.id === "last-light"),
  photos.find((p) => p.id === "cathedral-of-light"),
  photos.find((p) => p.id === "the-founder"),
];

export const heroSlides = [
  {
    kicker: "Portrait · Editorial · Travel",
    title: "Light, held still.",
    text: "Refined portrait, wedding, and editorial photography for people and brands who want images with atmosphere, clarity, and intention.",
    image: editorialDark,
    position: "center right",
  },
  {
    kicker: "Weddings & Elopements",
    title: "Stories, quietly told.",
    text: "Documentary coverage that protects the warmth and timing of a day instead of staging it.",
    image: weddingDunes,
    position: "center 35%",
  },
  {
    kicker: "On Location",
    title: "Drawn to the dramatic.",
    text: "From a beam of cave light to the last gold of an evening — the work follows the light wherever it leads.",
    image: travelCave,
    position: "center",
  },
  {
    kicker: "Portraiture",
    title: "Presence over poses.",
    text: "Calm, specific direction so you never have to guess what to do in front of the camera.",
    image: portraitGolden,
    position: "center 30%",
  },
];

export const studioStats = [
  { value: "8+", label: "Years behind the camera" },
  { value: "240", label: "Galleries delivered" },
  { value: "48h", label: "Preview turnaround" },
  { value: "12", label: "Countries photographed" },
];

export const services = [
  {
    number: "01",
    title: "Portrait Session",
    price: "$650",
    duration: "2 hours",
    image: portraitWarm,
    summary: "Guided portraits for artists, professionals, couples, and anyone ready for images with presence.",
    details: ["Direction before every frame", "Natural or studio light", "Private proofing gallery"],
  },
  {
    number: "02",
    title: "Brand Editorial",
    price: "$1,250",
    duration: "Half day",
    image: editorialSuit,
    summary: "Campaign-ready visuals for founders, products, press kits, launches, and personal brands.",
    details: ["Creative treatment", "Location planning", "Usage-aware delivery"],
  },
  {
    number: "03",
    title: "Wedding & Events",
    price: "$1,800",
    duration: "Full day",
    image: weddingRings,
    summary: "Discreet documentary coverage that preserves tone, energy, and the moments between moments.",
    details: ["Two-photographer option", "Low-light expertise", "Fast preview selects"],
  },
];

export const processSteps = [
  { number: "01", title: "Connect", description: "We talk through the story, references, location, and what the images need to feel like." },
  { number: "02", title: "Plan", description: "Mood, wardrobe, timing, and shot priorities become a clear production path." },
  { number: "03", title: "Create", description: "The session stays calm and directed, leaving room for honest moments to happen." },
  { number: "04", title: "Deliver", description: "Final images are edited with care and delivered in a polished client gallery." },
];

export const testimonials = [
  {
    name: "Maya L.",
    project: "Portrait Session",
    quote: "Izak made the whole experience feel easy and genuine. The photos are more beautiful than I imagined.",
    image: portraitNaturalLight,
  },
  {
    name: "Amanda & James",
    project: "Wedding Day",
    quote: "He caught the exact feeling of the evening. Nothing felt staged, but every image looks intentional.",
    image: weddingDunes,
  },
  {
    name: "Elena R.",
    project: "Brand Editorial",
    quote: "The final gallery gave my brand the confidence and refinement I was missing.",
    image: editorialSuit,
  },
];

export const about = {
  image: izakStudio,
  portrait: portraitFreckles,
  signature: "Izak",
  lede: "I photograph people, brands, and places with a quiet, intentional approach — less posing, more presence.",
  body: "The work is built on natural light, honest connection, and a careful edit. Whether it is a personal portrait, a founder campaign, a wedding day, or a frame found halfway around the world, the goal is the same: images that feel composed without feeling manufactured.",
  intro: "I started photographing to slow time down — to keep the gestures, light, and small in-between moments that pass too quickly to notice. A decade later, that is still the whole job.",
  location: "Based in Santo Domingo, Dominican Republic. Available for selected travel projects worldwide.",
  principles: [
    { title: "Direction", description: "Calm, specific guidance so you never have to wonder what to do in front of the camera." },
    { title: "Light", description: "Natural light first. Background, movement, and timing are planned around the story." },
    { title: "The Edit", description: "Galleries refined for tone, color, and pacing — built to live across print and screen." },
  ],
};
