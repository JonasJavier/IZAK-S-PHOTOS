// Optimized, web-ready photography (built via scripts/optimize_images.py)
import aboutPhotographer from "../images/optimized/about-photographer.jpg";
import editorialCrimson from "../images/optimized/editorial-crimson.jpg";
import editorialExposure from "../images/optimized/editorial-exposure.jpg";
import editorialMotion from "../images/optimized/editorial-motion.jpg";
import editorialRecord from "../images/optimized/editorial-record.jpg";
import editorialFrequency from "../images/optimized/editorial-frequency.jpg";
import portraitCity from "../images/optimized/portrait-city.jpg";
import portraitLean from "../images/optimized/portrait-lean.jpg";
import portraitShade from "../images/optimized/portrait-shade.jpg";
import portraitSparks from "../images/optimized/portrait-sparks.jpg";
import portraitStillness from "../images/optimized/portrait-stillness.jpg";
import travelBloom from "../images/optimized/travel-bloom.jpg";
import travelFestival from "../images/optimized/travel-festival.jpg";
import travelFlamingos from "../images/optimized/travel-flamingos.jpg";
import travelQuarter from "../images/optimized/travel-quarter.jpg";
import travelSong from "../images/optimized/travel-song.jpg";
import travelStars from "../images/optimized/travel-stars.jpg";
import weddingArch from "../images/optimized/wedding-arch.jpg";
import weddingFirstDance from "../images/optimized/wedding-firstdance.jpg";
import weddingGolden from "../images/optimized/wedding-golden.jpg";
import weddingJoy from "../images/optimized/wedding-joy.jpg";
import weddingVeil from "../images/optimized/wedding-veil.jpg";

// Header nav (Booking lives in the prominent "Reserve" button instead).
export const navItems = [
  { label: { en: "Home", es: "Inicio" }, path: "/" },
  { label: { en: "Gallery", es: "Galería" }, path: "/projects" },
  { label: { en: "About", es: "Sobre mí" }, path: "/about" },
];

export const reserveLabel = { en: "Reserve", es: "Reservar" };

export const categories = [
  { key: "All", label: { en: "All", es: "Todo" } },
  { key: "Portraits", label: { en: "Portraits", es: "Retratos" } },
  { key: "Editorial", label: { en: "Editorial", es: "Editorial" } },
  { key: "Weddings", label: { en: "Weddings", es: "Bodas" } },
  { key: "Travel", label: { en: "Travel", es: "Viajes" } },
];

// Full gallery. w/h reserve layout space (no shift). category is a stable key.
export const photos = [
  { id: "stillness", src: portraitStillness, w: 925, h: 1700, category: "Portraits", title: { en: "Stillness", es: "Quietud" }, location: { en: "Studio · B&W", es: "Estudio · B&N" } },
  { id: "sparks", src: portraitSparks, w: 1133, h: 1700, category: "Portraits", title: { en: "Sparks", es: "Chispas" }, location: { en: "Winter Market", es: "Mercado de Invierno" } },
  { id: "city-walk", src: portraitCity, w: 956, h: 1700, category: "Portraits", title: { en: "City Walk", es: "Caminata Urbana" }, location: { en: "Santo Domingo", es: "Santo Domingo" } },
  { id: "shade", src: portraitShade, w: 884, h: 1700, category: "Portraits", title: { en: "Shade", es: "Sombra" }, location: { en: "Old Town", es: "Ciudad Vieja" } },
  { id: "lean", src: portraitLean, w: 880, h: 1700, category: "Portraits", title: { en: "Lean", es: "Reposo" }, location: { en: "Side Street", es: "Callejón" } },

  { id: "red-motion", src: editorialMotion, w: 1133, h: 1700, category: "Editorial", title: { en: "Red Motion", es: "Movimiento Rojo" }, location: { en: "Dance Studio", es: "Estudio de Danza" } },
  { id: "crimson", src: editorialCrimson, w: 1133, h: 1700, category: "Editorial", title: { en: "Crimson", es: "Carmesí" }, location: { en: "Café Editorial", es: "Editorial de Café" } },
  { id: "off-the-record", src: editorialRecord, w: 1133, h: 1700, category: "Editorial", title: { en: "Off the Record", es: "Fuera de Registro" }, location: { en: "Studio Set", es: "Set de Estudio" } },
  { id: "exposure", src: editorialExposure, w: 1360, h: 1700, category: "Editorial", title: { en: "Exposure", es: "Exposición" }, location: { en: "Campaign", es: "Campaña" } },
  { id: "frequency", src: editorialFrequency, w: 1133, h: 1700, category: "Editorial", title: { en: "Frequency", es: "Frecuencia" }, location: { en: "Studio Set", es: "Set de Estudio" } },

  { id: "first-dance", src: weddingFirstDance, w: 1133, h: 1700, category: "Weddings", title: { en: "First Dance", es: "Primer Baile" }, location: { en: "Evening Reception", es: "Recepción Nocturna" } },
  { id: "the-arch", src: weddingArch, w: 1700, h: 1133, category: "Weddings", title: { en: "The Arch", es: "El Arco" }, location: { en: "Garden Ceremony", es: "Ceremonia en Jardín" } },
  { id: "golden-hour", src: weddingGolden, w: 1133, h: 1700, category: "Weddings", title: { en: "Golden Hour", es: "Hora Dorada" }, location: { en: "Reception", es: "Recepción" } },
  { id: "the-veil", src: weddingVeil, w: 1133, h: 1700, category: "Weddings", title: { en: "The Veil", es: "El Velo" }, location: { en: "Ceremony · B&W", es: "Ceremonia · B&N" } },
  { id: "just-married", src: weddingJoy, w: 1133, h: 1700, category: "Weddings", title: { en: "Just Married", es: "Recién Casados" }, location: { en: "Outdoor", es: "Al Aire Libre" } },

  { id: "under-the-stars", src: travelStars, w: 957, h: 1700, category: "Travel", title: { en: "Under the Stars", es: "Bajo las Estrellas" }, location: { en: "Open Country", es: "Campo Abierto" } },
  { id: "flamingo-coast", src: travelFlamingos, w: 955, h: 1700, category: "Travel", title: { en: "Flamingo Coast", es: "Costa de Flamencos" }, location: { en: "Seaside", es: "Junto al Mar" } },
  { id: "old-quarter", src: travelQuarter, w: 957, h: 1700, category: "Travel", title: { en: "Old Quarter", es: "Barrio Antiguo" }, location: { en: "Europe", es: "Europa" } },
  { id: "festival-night", src: travelFestival, w: 1700, h: 1133, category: "Travel", title: { en: "Festival Night", es: "Noche de Festival" }, location: { en: "City Center", es: "Centro de la Ciudad" } },
  { id: "street-song", src: travelSong, w: 1133, h: 1700, category: "Travel", title: { en: "Street Song", es: "Canción de Calle" }, location: { en: "B&W", es: "B&N" } },
  { id: "bloom", src: travelBloom, w: 1700, h: 1281, category: "Travel", title: { en: "Bloom", es: "Floración" }, location: { en: "Spring", es: "Primavera" } },
];

// Curated subset for the homepage editorial showcase (first item is the lead).
export const featured = [
  photos.find((p) => p.id === "red-motion"),
  photos.find((p) => p.id === "first-dance"),
  photos.find((p) => p.id === "stillness"),
  photos.find((p) => p.id === "under-the-stars"),
  photos.find((p) => p.id === "the-arch"),
];

export const heroSlides = [
  {
    image: portraitStillness,
    position: "center 28%",
    kicker: { en: "Portraiture", es: "Retrato" },
    title: { en: "Light, held still.", es: "La luz, detenida." },
    text: {
      en: "Refined portrait photography for people who want images with atmosphere, clarity, and intention.",
      es: "Fotografía de retrato refinada para quienes quieren imágenes con atmósfera, claridad e intención.",
    },
  },
  {
    image: weddingFirstDance,
    position: "center 30%",
    kicker: { en: "Weddings & Elopements", es: "Bodas y Elopements" },
    title: { en: "Stories, quietly told.", es: "Historias contadas en voz baja." },
    text: {
      en: "Documentary coverage that protects the warmth and timing of a day instead of staging it.",
      es: "Cobertura documental que protege la calidez y el ritmo del día, sin posarlo.",
    },
  },
  {
    image: editorialMotion,
    position: "center",
    kicker: { en: "Editorial & Movement", es: "Editorial y Movimiento" },
    title: { en: "Made to move.", es: "Hecho para moverse." },
    text: {
      en: "Bold editorial work for dancers, artists, and brands that need images with real energy.",
      es: "Trabajo editorial audaz para bailarines, artistas y marcas que necesitan imágenes con energía.",
    },
  },
  {
    image: travelFlamingos,
    position: "center 58%",
    kicker: { en: "On Location", es: "En Locación" },
    title: { en: "Drawn to the light.", es: "Atraído por la luz." },
    text: {
      en: "From a quiet coast to the last gold of an evening — the work follows the light wherever it leads.",
      es: "Desde una costa tranquila hasta el último oro de la tarde: el trabajo sigue la luz a donde lleve.",
    },
  },
];

export const studioStats = [
  { value: "8+", label: { en: "Years behind the camera", es: "Años tras la cámara" } },
  { value: "240", label: { en: "Galleries delivered", es: "Galerías entregadas" } },
  { value: "48h", label: { en: "Preview turnaround", es: "Entrega de previews" } },
  { value: "12", label: { en: "Countries photographed", es: "Países fotografiados" } },
];

export const services = [
  {
    number: "01",
    price: "$650",
    image: portraitSparks,
    duration: { en: "2 hours", es: "2 horas" },
    title: { en: "Portrait Session", es: "Sesión de Retrato" },
    summary: {
      en: "Guided portraits for artists, professionals, couples, and anyone ready for images with presence.",
      es: "Retratos guiados para artistas, profesionales, parejas y cualquiera que busque imágenes con presencia.",
    },
    details: {
      en: ["Direction before every frame", "Natural or studio light", "Private proofing gallery"],
      es: ["Dirección en cada toma", "Luz natural o de estudio", "Galería privada de selección"],
    },
  },
  {
    number: "02",
    price: "$1,250",
    image: editorialExposure,
    duration: { en: "Half day", es: "Medio día" },
    title: { en: "Brand Editorial", es: "Editorial de Marca" },
    summary: {
      en: "Campaign-ready visuals for founders, products, press kits, launches, and personal brands.",
      es: "Imágenes listas para campaña: fundadores, productos, press kits, lanzamientos y marcas personales.",
    },
    details: {
      en: ["Creative treatment", "Location planning", "Usage-aware delivery"],
      es: ["Tratamiento creativo", "Planeación de locación", "Entrega según uso"],
    },
  },
  {
    number: "03",
    price: "$1,800",
    image: weddingArch,
    duration: { en: "Full day", es: "Día completo" },
    title: { en: "Wedding & Events", es: "Bodas y Eventos" },
    summary: {
      en: "Discreet documentary coverage that preserves tone, energy, and the moments between moments.",
      es: "Cobertura documental discreta que conserva el tono, la energía y los momentos entre momentos.",
    },
    details: {
      en: ["Two-photographer option", "Low-light expertise", "Fast preview selects"],
      es: ["Opción de dos fotógrafos", "Experiencia en poca luz", "Selección previa rápida"],
    },
  },
];

export const processSteps = [
  {
    number: "01",
    title: { en: "Connect", es: "Conectar" },
    description: {
      en: "We talk through the story, references, location, and what the images need to feel like.",
      es: "Conversamos la historia, referencias, locación y qué deben transmitir las imágenes.",
    },
  },
  {
    number: "02",
    title: { en: "Plan", es: "Planear" },
    description: {
      en: "Mood, wardrobe, timing, and shot priorities become a clear production path.",
      es: "Mood, vestuario, tiempos y prioridades se vuelven un plan de producción claro.",
    },
  },
  {
    number: "03",
    title: { en: "Create", es: "Crear" },
    description: {
      en: "The session stays calm and directed, leaving room for honest moments to happen.",
      es: "La sesión es tranquila y dirigida, dejando espacio para momentos honestos.",
    },
  },
  {
    number: "04",
    title: { en: "Deliver", es: "Entregar" },
    description: {
      en: "Final images are edited with care and delivered in a polished client gallery.",
      es: "Las imágenes finales se editan con cuidado y se entregan en una galería pulida.",
    },
  },
];

export const testimonials = [
  {
    name: "Maya L.",
    image: portraitSparks,
    project: { en: "Portrait Session", es: "Sesión de Retrato" },
    quote: {
      en: "Izak made the whole experience feel easy and genuine. The photos are more beautiful than I imagined.",
      es: "Izak hizo que toda la experiencia se sintiera fácil y genuina. Las fotos son más hermosas de lo que imaginé.",
    },
  },
  {
    name: "Amanda & James",
    image: weddingFirstDance,
    project: { en: "Wedding Day", es: "Día de Boda" },
    quote: {
      en: "He caught the exact feeling of the evening. Nothing felt staged, but every image looks intentional.",
      es: "Capturó la sensación exacta de la noche. Nada se sintió posado, pero cada imagen se ve intencional.",
    },
  },
  {
    name: "Elena R.",
    image: editorialCrimson,
    project: { en: "Brand Editorial", es: "Editorial de Marca" },
    quote: {
      en: "The final gallery gave my brand the confidence and refinement I was missing.",
      es: "La galería final le dio a mi marca la confianza y el refinamiento que me faltaban.",
    },
  },
];

export const about = {
  image: aboutPhotographer,
  portrait: editorialCrimson,
  signature: "Izak",
  lede: {
    en: "I photograph people, brands, and places with a quiet, intentional approach — less posing, more presence.",
    es: "Fotografío personas, marcas y lugares con un enfoque tranquilo e intencional: menos pose, más presencia.",
  },
  body: {
    en: "The work is built on natural light, honest connection, and a careful edit. Whether it is a personal portrait, a founder campaign, a wedding day, or a frame found halfway around the world, the goal is the same: images that feel composed without feeling manufactured.",
    es: "El trabajo se construye sobre luz natural, conexión honesta y una edición cuidada. Sea un retrato personal, una campaña de marca, un día de boda o una toma encontrada al otro lado del mundo, la meta es la misma: imágenes que se sienten compuestas sin sentirse fabricadas.",
  },
  intro: {
    en: "I started photographing to slow time down — to keep the gestures, light, and small in-between moments that pass too quickly to notice. A decade later, that is still the whole job.",
    es: "Empecé a fotografiar para frenar el tiempo: conservar los gestos, la luz y los pequeños momentos intermedios que pasan demasiado rápido. Una década después, ese sigue siendo todo el trabajo.",
  },
  location: {
    en: "Based in Santo Domingo, Dominican Republic. Available for selected travel projects worldwide.",
    es: "Con base en Santo Domingo, República Dominicana. Disponible para proyectos de viaje seleccionados en todo el mundo.",
  },
  quote: { en: "Less posing. More presence.", es: "Menos pose. Más presencia." },
  principles: [
    {
      title: { en: "Direction", es: "Dirección" },
      description: {
        en: "Calm, specific guidance so you never have to wonder what to do in front of the camera.",
        es: "Guía tranquila y específica para que nunca tengas que adivinar qué hacer frente a la cámara.",
      },
    },
    {
      title: { en: "Light", es: "Luz" },
      description: {
        en: "Natural light first. Background, movement, and timing are planned around the story.",
        es: "Luz natural primero. Fondo, movimiento y tiempos se planean en torno a la historia.",
      },
    },
    {
      title: { en: "The Edit", es: "La Edición" },
      description: {
        en: "Galleries refined for tone, color, and pacing — built to live across print and screen.",
        es: "Galerías refinadas en tono, color y ritmo, hechas para vivir en impresión y pantalla.",
      },
    },
  ],
};
