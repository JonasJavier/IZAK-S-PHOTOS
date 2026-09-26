// Photography lives in src/images: full-size JPEGs in optimized/ (lightbox, hero)
// and 720px WebP previews in thumbs/ (grids and cards). After adding or replacing
// a photo, regenerate the previews with `python scripts/optimize_images.py`.
const fullSize = import.meta.glob("../images/optimized/*.jpg", { eager: true, import: "default" });
const previews = import.meta.glob("../images/thumbs/*.webp", { eager: true, import: "default" });

function image(file) {
  const src = fullSize[`../images/optimized/${file}.jpg`];
  if (!src) throw new Error(`Missing photo: src/images/optimized/${file}.jpg`);
  return src;
}

function preview(file) {
  return previews[`../images/thumbs/${file}.webp`] ?? image(file);
}

// Header nav (Booking lives in the prominent "Reserve" button instead).
export const navItems = [
  { label: { en: "Home", es: "Inicio" }, path: "/" },
  { label: { en: "Gallery", es: "Galería" }, path: "/projects" },
  { label: { en: "About", es: "Sobre mí" }, path: "/about" },
];

export const reserveLabel = { en: "Reserve", es: "Reservar" };

// `key` is the stable value stored on each photo; `slug` is what the URL shows.
export const categories = [
  { key: "All", slug: "all", label: { en: "All", es: "Todo" } },
  { key: "Portraits", slug: "portraits", label: { en: "Portraits", es: "Retratos" } },
  { key: "Editorial", slug: "editorial", label: { en: "Editorial", es: "Editorial" } },
  { key: "Weddings", slug: "weddings", label: { en: "Weddings", es: "Bodas" } },
  { key: "Travel", slug: "travel", label: { en: "Travel", es: "Viajes" } },
];

// Full gallery. w/h reserve layout space (no shift). category is a stable key.
const gallery = [
  { id: "stillness", file: "portrait-stillness", w: 925, h: 1700, category: "Portraits", title: { en: "Stillness", es: "Quietud" }, location: { en: "Studio · B&W", es: "Estudio · B&N" } },
  { id: "soft-gaze", file: "portrait-soft-gaze", w: 735, h: 894, category: "Portraits", title: { en: "Soft Gaze", es: "Mirada Suave" }, location: { en: "Natural Light", es: "Luz Natural" } },
  { id: "freckles", file: "portrait-freckles", w: 700, h: 1083, category: "Portraits", title: { en: "Freckles", es: "Pecas" }, location: { en: "Close Portrait", es: "Retrato Cercano" } },
  { id: "ember", file: "portrait-ember", w: 736, h: 1103, category: "Portraits", title: { en: "Ember", es: "Brasa" }, location: { en: "Low Light", es: "Poca Luz" } },
  { id: "sparks", file: "portrait-sparks", w: 1133, h: 1700, category: "Portraits", title: { en: "Sparks", es: "Chispas" }, location: { en: "Winter Market", es: "Mercado de Invierno" } },
  { id: "sunflowers", file: "portrait-sunflowers", w: 1133, h: 1700, category: "Portraits", title: { en: "Sunflowers", es: "Girasoles" }, location: { en: "Open Field", es: "Campo Abierto" } },
  { id: "redlight", file: "portrait-redlight", w: 954, h: 1700, category: "Portraits", title: { en: "Redlight", es: "Luz Roja" }, location: { en: "Blue Hour", es: "Hora Azul" } },
  { id: "winter-gaze", file: "portrait-winter-gaze", w: 957, h: 1700, category: "Portraits", title: { en: "Winter Gaze", es: "Mirada Invernal" }, location: { en: "Outdoor", es: "Exterior" } },
  { id: "city-walk", file: "portrait-city", w: 956, h: 1700, category: "Portraits", title: { en: "City Walk", es: "Caminata Urbana" }, location: { en: "Santo Domingo", es: "Santo Domingo" } },
  { id: "market-color", file: "portrait-market", w: 986, h: 1700, category: "Portraits", title: { en: "Market Color", es: "Color de Mercado" }, location: { en: "Street Portrait", es: "Retrato de Calle" } },
  { id: "shade", file: "portrait-shade", w: 884, h: 1700, category: "Portraits", title: { en: "Shade", es: "Sombra" }, location: { en: "Old Town", es: "Ciudad Vieja" } },
  { id: "lean", file: "portrait-lean", w: 880, h: 1700, category: "Portraits", title: { en: "Lean", es: "Reposo" }, location: { en: "Side Street", es: "Callejón" } },

  { id: "red-motion", file: "editorial-motion", w: 1133, h: 1700, category: "Editorial", title: { en: "Red Motion", es: "Movimiento Rojo" }, location: { en: "Dance Studio", es: "Estudio de Danza" } },
  { id: "nocturne", file: "editorial-nocturne", w: 1133, h: 1700, category: "Editorial", title: { en: "Nocturne", es: "Nocturno" }, location: { en: "Evening Set", es: "Set Nocturno" } },
  { id: "off-the-record", file: "editorial-record", w: 1133, h: 1700, category: "Editorial", title: { en: "Off the Record", es: "Fuera de Registro" }, location: { en: "Studio Set", es: "Set de Estudio" } },
  { id: "exposure", file: "editorial-exposure", w: 1360, h: 1700, category: "Editorial", title: { en: "Exposure", es: "Exposición" }, location: { en: "Campaign", es: "Campaña" } },
  { id: "frequency", file: "editorial-frequency", w: 1133, h: 1700, category: "Editorial", title: { en: "Frequency", es: "Frecuencia" }, location: { en: "Studio Set", es: "Set de Estudio" } },
  { id: "newsprint", file: "editorial-newsprint", w: 1133, h: 1700, category: "Editorial", title: { en: "Newsprint", es: "Papel Prensa" }, location: { en: "City Steps", es: "Escaleras Urbanas" } },
  { id: "made-in-spain", file: "editorial-made-in-spain", w: 1360, h: 1700, category: "Editorial", title: { en: "Made in Spain", es: "Made in Spain" }, location: { en: "Studio", es: "Estudio" } },
  { id: "mirror-study", file: "editorial-mirror", w: 1126, h: 1700, category: "Editorial", title: { en: "Mirror Study", es: "Estudio de Espejo" }, location: { en: "B&W", es: "B&N" } },
  { id: "swim-light", file: "editorial-swim-light", w: 956, h: 1700, category: "Editorial", title: { en: "Swim Light", es: "Luz Sumergida" }, location: { en: "Water Study", es: "Estudio en Agua" } },

  { id: "first-dance", file: "wedding-firstdance", w: 1133, h: 1700, category: "Weddings", title: { en: "First Dance", es: "Primer Baile" }, location: { en: "Evening Reception", es: "Recepción Nocturna" } },
  { id: "the-arch", file: "wedding-arch", w: 1700, h: 1133, category: "Weddings", title: { en: "The Arch", es: "El Arco" }, location: { en: "Garden Ceremony", es: "Ceremonia en Jardín" } },
  { id: "golden-hour", file: "wedding-golden", w: 1133, h: 1700, category: "Weddings", title: { en: "Golden Hour", es: "Hora Dorada" }, location: { en: "Reception", es: "Recepción" } },
  { id: "the-veil", file: "wedding-veil", w: 1133, h: 1700, category: "Weddings", title: { en: "The Veil", es: "El Velo" }, location: { en: "Ceremony · B&W", es: "Ceremonia · B&N" } },
  { id: "just-married", file: "wedding-joy", w: 1133, h: 1700, category: "Weddings", title: { en: "Just Married", es: "Recién Casados" }, location: { en: "Outdoor", es: "Al Aire Libre" } },
  { id: "vows", file: "wedding-vows", w: 1133, h: 1700, category: "Weddings", title: { en: "Vows", es: "Votos" }, location: { en: "Indoor Ceremony", es: "Ceremonia Interior" } },
  { id: "sunlit-walk", file: "wedding-sunlit-walk", w: 1700, h: 1133, category: "Weddings", title: { en: "Sunlit Walk", es: "Camino de Sol" }, location: { en: "Vineyard", es: "Viñedo" } },
  { id: "firelight", file: "wedding-firelight", w: 1700, h: 1133, category: "Weddings", title: { en: "Firelight", es: "Luz de Fuego" }, location: { en: "Night Portrait", es: "Retrato Nocturno" } },
  { id: "bouquet", file: "wedding-bouquet", w: 1133, h: 1700, category: "Weddings", title: { en: "Bouquet", es: "Ramo" }, location: { en: "Details", es: "Detalles" } },

  { id: "under-the-stars", file: "travel-stars", w: 957, h: 1700, category: "Travel", title: { en: "Under the Stars", es: "Bajo las Estrellas" }, location: { en: "Open Country", es: "Campo Abierto" } },
  { id: "flamingo-coast", file: "travel-flamingos", w: 955, h: 1700, category: "Travel", title: { en: "Flamingo Coast", es: "Costa de Flamencos" }, location: { en: "Seaside", es: "Junto al Mar" } },
  { id: "old-quarter", file: "travel-quarter", w: 957, h: 1700, category: "Travel", title: { en: "Old Quarter", es: "Barrio Antiguo" }, location: { en: "Europe", es: "Europa" } },
  { id: "festival-night", file: "travel-festival", w: 1700, h: 1133, category: "Travel", title: { en: "Festival Night", es: "Noche de Festival" }, location: { en: "City Center", es: "Centro de la Ciudad" } },
  { id: "street-song", file: "travel-song", w: 1133, h: 1700, category: "Travel", title: { en: "Street Song", es: "Canción de Calle" }, location: { en: "B&W", es: "B&N" } },
  { id: "bloom", file: "travel-bloom", w: 1700, h: 1281, category: "Travel", title: { en: "Bloom", es: "Floración" }, location: { en: "Spring", es: "Primavera" } },
  { id: "crowd", file: "travel-crowd", w: 1700, h: 1133, category: "Travel", title: { en: "Crowd", es: "Multitud" }, location: { en: "Street Festival", es: "Festival Callejero" } },
  { id: "highlands", file: "travel-highlands", w: 1700, h: 1133, category: "Travel", title: { en: "Highlands", es: "Tierras Altas" }, location: { en: "Mountain Air", es: "Aire de Montaña" } },
  { id: "hillside", file: "travel-hillside", w: 1133, h: 1700, category: "Travel", title: { en: "Hillside", es: "Ladera" }, location: { en: "Golden Terrain", es: "Terreno Dorado" } },
  { id: "moonrise", file: "travel-moonrise", w: 1360, h: 1700, category: "Travel", title: { en: "Moonrise", es: "Salida de la Luna" }, location: { en: "Evening Sky", es: "Cielo al Atardecer" } },
  { id: "rome-street", file: "travel-rome-street", w: 1127, h: 1700, category: "Travel", title: { en: "Rome Street", es: "Calle de Roma" }, location: { en: "Old City", es: "Ciudad Antigua" } },
  { id: "black-sand", file: "travel-black-sand", w: 1133, h: 1700, category: "Travel", title: { en: "Black Sand", es: "Arena Negra" }, location: { en: "Coast · B&W", es: "Costa · B&N" } },
];

export const photos = gallery.map((photo) => ({ ...photo, src: image(photo.file), thumb: preview(photo.file) }));

const photoById = (id) => photos.find((photo) => photo.id === id);

// Curated subset for the homepage editorial showcase (first item is the lead).
export const featured = ["red-motion", "first-dance", "stillness", "under-the-stars", "the-arch"].map(photoById);

export const heroSlides = [
  {
    image: image("hero-portrait"),
    position: "center center",
    positionMobile: "72% center",
    kicker: { en: "Portraiture", es: "Retrato" },
    title: { en: "Portraits in quiet light.", es: "Retratos en luz tranquila." },
    text: {
      en: "Refined portrait photography for people who want images with atmosphere, clarity, and intention.",
      es: "Fotografía de retrato cuidada, para quienes buscan imágenes con atmósfera, claridad e intención.",
    },
  },
  {
    image: image("wedding-firstdance"),
    position: "center 42%",
    positionMobile: "center 30%",
    kicker: { en: "Weddings & Elopements", es: "Bodas y Elopements" },
    title: { en: "Stories, quietly told.", es: "Historias contadas en voz baja." },
    text: {
      en: "Documentary coverage that protects the warmth and timing of a day instead of staging it.",
      es: "Cobertura documental que cuida la calidez y el ritmo del día, sin forzar las poses.",
    },
  },
  {
    image: image("editorial-motion"),
    position: "center 32%",
    positionMobile: "center 22%",
    kicker: { en: "Editorial & Movement", es: "Editorial y Movimiento" },
    title: { en: "Made to move.", es: "Hecho para moverse." },
    text: {
      en: "Bold editorial work for dancers, artists, and brands that need images with real energy.",
      es: "Trabajo editorial atrevido para bailarines, artistas y marcas que necesitan imágenes con energía real.",
    },
  },
  {
    image: image("travel-flamingos"),
    position: "center 80%",
    positionMobile: "center center",
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
    image: preview("portrait-sparks"),
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
    image: preview("editorial-exposure"),
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
    image: preview("wedding-arch"),
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
    image: preview("portrait-sparks"),
    project: { en: "Portrait Session", es: "Sesión de Retrato" },
    quote: {
      en: "Izak made the whole experience feel easy and genuine. The photos are more beautiful than I imagined.",
      es: "Izak hizo que toda la experiencia se sintiera fácil y genuina. Las fotos son más hermosas de lo que imaginé.",
    },
  },
  {
    name: "Amanda & James",
    image: preview("wedding-firstdance"),
    project: { en: "Wedding Day", es: "Día de Boda" },
    quote: {
      en: "He caught the exact feeling of the evening. Nothing felt staged, but every image looks intentional.",
      es: "Capturó la sensación exacta de la noche. Nada se sintió posado, pero cada imagen se ve intencional.",
    },
  },
  {
    name: "Elena R.",
    image: preview("editorial-frequency"),
    project: { en: "Brand Editorial", es: "Editorial de Marca" },
    quote: {
      en: "The final gallery gave my brand the confidence and refinement I was missing.",
      es: "La galería final le dio a mi marca la confianza y el refinamiento que me faltaban.",
    },
  },
];

export const about = {
  // A frame from the portfolio (not a photo of Izak); the caption says so.
  image: image("portrait-winter-gaze"),
  imageTitle: { en: "Winter Gaze", es: "Mirada Invernal" },
  portrait: preview("editorial-nocturne"),
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
    en: "I started photographing to slow time down — to keep the gestures, light, and small in-between moments that pass too quickly to notice. Years later, that is still the whole job.",
    es: "Empecé a fotografiar para frenar el tiempo: conservar los gestos, la luz y los pequeños momentos intermedios que pasan demasiado rápido. Años después, ese sigue siendo todo el trabajo.",
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
