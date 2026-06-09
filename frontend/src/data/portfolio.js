// Optimized, web-ready photography (built via scripts/optimize_images.py)
import aboutPhotographer from "../images/optimized/about-photographer.jpg";
import heroPortrait from "../images/optimized/hero-portrait.jpg";
import editorialCrimson from "../images/optimized/editorial-crimson.jpg";
import editorialExposure from "../images/optimized/editorial-exposure.jpg";
import editorialMotion from "../images/optimized/editorial-motion.jpg";
import editorialNocturne from "../images/optimized/editorial-nocturne.jpg";
import editorialRecord from "../images/optimized/editorial-record.jpg";
import editorialFrequency from "../images/optimized/editorial-frequency.jpg";
import editorialNewsprint from "../images/optimized/editorial-newsprint.jpg";
import editorialMadeInSpain from "../images/optimized/editorial-made-in-spain.jpg";
import editorialMirror from "../images/optimized/editorial-mirror.jpg";
import editorialCoverStory from "../images/optimized/editorial-cover-story.jpg";
import editorialSwimLight from "../images/optimized/editorial-swim-light.jpg";
import portraitCity from "../images/optimized/portrait-city.jpg";
import portraitEmber from "../images/optimized/portrait-ember.jpg";
import portraitFreckles from "../images/optimized/portrait-freckles.jpg";
import portraitLean from "../images/optimized/portrait-lean.jpg";
import portraitMarket from "../images/optimized/portrait-market.jpg";
import portraitRedlight from "../images/optimized/portrait-redlight.jpg";
import portraitShade from "../images/optimized/portrait-shade.jpg";
import portraitSoftGaze from "../images/optimized/portrait-soft-gaze.jpg";
import portraitSparks from "../images/optimized/portrait-sparks.jpg";
import portraitStillness from "../images/optimized/portrait-stillness.jpg";
import portraitSunflowers from "../images/optimized/portrait-sunflowers.jpg";
import portraitWinterGaze from "../images/optimized/portrait-winter-gaze.jpg";
import travelBloom from "../images/optimized/travel-bloom.jpg";
import travelBlackSand from "../images/optimized/travel-black-sand.jpg";
import travelCrowd from "../images/optimized/travel-crowd.jpg";
import travelFestival from "../images/optimized/travel-festival.jpg";
import travelFlamingos from "../images/optimized/travel-flamingos.jpg";
import travelHighlands from "../images/optimized/travel-highlands.jpg";
import travelHillside from "../images/optimized/travel-hillside.jpg";
import travelQuarter from "../images/optimized/travel-quarter.jpg";
import travelRomeStreet from "../images/optimized/travel-rome-street.jpg";
import travelSong from "../images/optimized/travel-song.jpg";
import travelStars from "../images/optimized/travel-stars.jpg";
import travelWaterfall from "../images/optimized/travel-waterfall.jpg";
import weddingArch from "../images/optimized/wedding-arch.jpg";
import weddingBouquet from "../images/optimized/wedding-bouquet.jpg";
import weddingFirelight from "../images/optimized/wedding-firelight.jpg";
import weddingFirstDance from "../images/optimized/wedding-firstdance.jpg";
import weddingGolden from "../images/optimized/wedding-golden.jpg";
import weddingJoy from "../images/optimized/wedding-joy.jpg";
import weddingSunlitWalk from "../images/optimized/wedding-sunlit-walk.jpg";
import weddingVeil from "../images/optimized/wedding-veil.jpg";
import weddingVows from "../images/optimized/wedding-vows.jpg";

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
  { id: "stillness", src: portraitStillness, w: 925, h: 1700, category: "Portraits", title: { en: "Stillness", es: "Quietud" }, location: { en: "Studio ? B&W", es: "Estudio ? B&N" } },
  { id: "soft-gaze", src: portraitSoftGaze, w: 735, h: 894, category: "Portraits", title: { en: "Soft Gaze", es: "Mirada Suave" }, location: { en: "Natural Light", es: "Luz Natural" } },
  { id: "freckles", src: portraitFreckles, w: 700, h: 1083, category: "Portraits", title: { en: "Freckles", es: "Pecas" }, location: { en: "Close Portrait", es: "Retrato Cercano" } },
  { id: "ember", src: portraitEmber, w: 736, h: 1103, category: "Portraits", title: { en: "Ember", es: "Brasa" }, location: { en: "Low Light", es: "Poca Luz" } },
  { id: "sparks", src: portraitSparks, w: 1133, h: 1700, category: "Portraits", title: { en: "Sparks", es: "Chispas" }, location: { en: "Winter Market", es: "Mercado de Invierno" } },
  { id: "sunflowers", src: portraitSunflowers, w: 1133, h: 1700, category: "Portraits", title: { en: "Sunflowers", es: "Girasoles" }, location: { en: "Open Field", es: "Campo Abierto" } },
  { id: "redlight", src: portraitRedlight, w: 954, h: 1700, category: "Portraits", title: { en: "Redlight", es: "Luz Roja" }, location: { en: "Blue Hour", es: "Hora Azul" } },
  { id: "winter-gaze", src: portraitWinterGaze, w: 957, h: 1700, category: "Portraits", title: { en: "Winter Gaze", es: "Mirada Invernal" }, location: { en: "Outdoor", es: "Exterior" } },
  { id: "city-walk", src: portraitCity, w: 956, h: 1700, category: "Portraits", title: { en: "City Walk", es: "Caminata Urbana" }, location: { en: "Santo Domingo", es: "Santo Domingo" } },
  { id: "market-color", src: portraitMarket, w: 986, h: 1700, category: "Portraits", title: { en: "Market Color", es: "Color de Mercado" }, location: { en: "Street Portrait", es: "Retrato de Calle" } },
  { id: "shade", src: portraitShade, w: 884, h: 1700, category: "Portraits", title: { en: "Shade", es: "Sombra" }, location: { en: "Old Town", es: "Ciudad Vieja" } },
  { id: "lean", src: portraitLean, w: 880, h: 1700, category: "Portraits", title: { en: "Lean", es: "Reposo" }, location: { en: "Side Street", es: "Callej?n" } },

  { id: "red-motion", src: editorialMotion, w: 1133, h: 1700, category: "Editorial", title: { en: "Red Motion", es: "Movimiento Rojo" }, location: { en: "Dance Studio", es: "Estudio de Danza" } },
  { id: "crimson", src: editorialCrimson, w: 1133, h: 1700, category: "Editorial", title: { en: "Crimson", es: "Carmes?" }, location: { en: "Caf? Editorial", es: "Editorial de Caf?" } },
  { id: "nocturne", src: editorialNocturne, w: 1133, h: 1700, category: "Editorial", title: { en: "Nocturne", es: "Nocturno" }, location: { en: "Evening Set", es: "Set Nocturno" } },
  { id: "off-the-record", src: editorialRecord, w: 1133, h: 1700, category: "Editorial", title: { en: "Off the Record", es: "Fuera de Registro" }, location: { en: "Studio Set", es: "Set de Estudio" } },
  { id: "exposure", src: editorialExposure, w: 1360, h: 1700, category: "Editorial", title: { en: "Exposure", es: "Exposici?n" }, location: { en: "Campaign", es: "Campa?a" } },
  { id: "frequency", src: editorialFrequency, w: 1133, h: 1700, category: "Editorial", title: { en: "Frequency", es: "Frecuencia" }, location: { en: "Studio Set", es: "Set de Estudio" } },
  { id: "newsprint", src: editorialNewsprint, w: 1133, h: 1700, category: "Editorial", title: { en: "Newsprint", es: "Papel Prensa" }, location: { en: "City Steps", es: "Escaleras Urbanas" } },
  { id: "made-in-spain", src: editorialMadeInSpain, w: 1360, h: 1700, category: "Editorial", title: { en: "Made in Spain", es: "Made in Spain" }, location: { en: "Studio", es: "Estudio" } },
  { id: "mirror-study", src: editorialMirror, w: 1126, h: 1700, category: "Editorial", title: { en: "Mirror Study", es: "Estudio de Espejo" }, location: { en: "B&W", es: "B&N" } },
  { id: "cover-story", src: editorialCoverStory, w: 1133, h: 1700, category: "Editorial", title: { en: "Cover Story", es: "Historia de Portada" }, location: { en: "Product Editorial", es: "Editorial de Producto" } },
  { id: "swim-light", src: editorialSwimLight, w: 956, h: 1700, category: "Editorial", title: { en: "Swim Light", es: "Luz Sumergida" }, location: { en: "Water Study", es: "Estudio en Agua" } },

  { id: "first-dance", src: weddingFirstDance, w: 1133, h: 1700, category: "Weddings", title: { en: "First Dance", es: "Primer Baile" }, location: { en: "Evening Reception", es: "Recepci?n Nocturna" } },
  { id: "the-arch", src: weddingArch, w: 1700, h: 1133, category: "Weddings", title: { en: "The Arch", es: "El Arco" }, location: { en: "Garden Ceremony", es: "Ceremonia en Jard?n" } },
  { id: "golden-hour", src: weddingGolden, w: 1133, h: 1700, category: "Weddings", title: { en: "Golden Hour", es: "Hora Dorada" }, location: { en: "Reception", es: "Recepci?n" } },
  { id: "the-veil", src: weddingVeil, w: 1133, h: 1700, category: "Weddings", title: { en: "The Veil", es: "El Velo" }, location: { en: "Ceremony ? B&W", es: "Ceremonia ? B&N" } },
  { id: "just-married", src: weddingJoy, w: 1133, h: 1700, category: "Weddings", title: { en: "Just Married", es: "Reci?n Casados" }, location: { en: "Outdoor", es: "Al Aire Libre" } },
  { id: "vows", src: weddingVows, w: 1133, h: 1700, category: "Weddings", title: { en: "Vows", es: "Votos" }, location: { en: "Indoor Ceremony", es: "Ceremonia Interior" } },
  { id: "sunlit-walk", src: weddingSunlitWalk, w: 1700, h: 1133, category: "Weddings", title: { en: "Sunlit Walk", es: "Camino de Sol" }, location: { en: "Vineyard", es: "Vi?edo" } },
  { id: "firelight", src: weddingFirelight, w: 1700, h: 1133, category: "Weddings", title: { en: "Firelight", es: "Luz de Fuego" }, location: { en: "Night Portrait", es: "Retrato Nocturno" } },
  { id: "bouquet", src: weddingBouquet, w: 1133, h: 1700, category: "Weddings", title: { en: "Bouquet", es: "Ramo" }, location: { en: "Details", es: "Detalles" } },

  { id: "under-the-stars", src: travelStars, w: 957, h: 1700, category: "Travel", title: { en: "Under the Stars", es: "Bajo las Estrellas" }, location: { en: "Open Country", es: "Campo Abierto" } },
  { id: "flamingo-coast", src: travelFlamingos, w: 955, h: 1700, category: "Travel", title: { en: "Flamingo Coast", es: "Costa de Flamencos" }, location: { en: "Seaside", es: "Junto al Mar" } },
  { id: "old-quarter", src: travelQuarter, w: 957, h: 1700, category: "Travel", title: { en: "Old Quarter", es: "Barrio Antiguo" }, location: { en: "Europe", es: "Europa" } },
  { id: "festival-night", src: travelFestival, w: 1700, h: 1133, category: "Travel", title: { en: "Festival Night", es: "Noche de Festival" }, location: { en: "City Center", es: "Centro de la Ciudad" } },
  { id: "street-song", src: travelSong, w: 1133, h: 1700, category: "Travel", title: { en: "Street Song", es: "Canci?n de Calle" }, location: { en: "B&W", es: "B&N" } },
  { id: "bloom", src: travelBloom, w: 1700, h: 1281, category: "Travel", title: { en: "Bloom", es: "Floraci?n" }, location: { en: "Spring", es: "Primavera" } },
  { id: "crowd", src: travelCrowd, w: 1700, h: 1133, category: "Travel", title: { en: "Crowd", es: "Multitud" }, location: { en: "Street Festival", es: "Festival Callejero" } },
  { id: "highlands", src: travelHighlands, w: 1700, h: 1133, category: "Travel", title: { en: "Highlands", es: "Tierras Altas" }, location: { en: "Mountain Air", es: "Aire de Monta?a" } },
  { id: "hillside", src: travelHillside, w: 1133, h: 1700, category: "Travel", title: { en: "Hillside", es: "Ladera" }, location: { en: "Golden Terrain", es: "Terreno Dorado" } },
  { id: "waterfall", src: travelWaterfall, w: 1360, h: 1700, category: "Travel", title: { en: "Waterfall", es: "Cascada" }, location: { en: "Cavern Light", es: "Luz de Caverna" } },
  { id: "rome-street", src: travelRomeStreet, w: 1127, h: 1700, category: "Travel", title: { en: "Rome Street", es: "Calle de Roma" }, location: { en: "Old City", es: "Ciudad Antigua" } },
  { id: "black-sand", src: travelBlackSand, w: 1133, h: 1700, category: "Travel", title: { en: "Black Sand", es: "Arena Negra" }, location: { en: "Coast ? B&W", es: "Costa ? B&N" } },
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
    image: heroPortrait,
    position: "center center",
    kicker: { en: "Portraiture", es: "Retrato" },
    title: { en: "Portraits in quiet light.", es: "Retratos en luz tranquila." },
    text: {
      en: "Refined portrait photography for people who want images with atmosphere, clarity, and intention.",
      es: "Fotograf?a de retrato refinada para quienes quieren im?genes con atm?sfera, claridad e intenci?n.",
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
