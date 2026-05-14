export const CONTACT = {
  name: "Casa Mavi",
  phone: "+34 666 69 96 35",
  phoneTel: "+34666699635",
  whatsapp: "https://wa.me/34666699635",
  email: "reservation@casamavi.es",
  address: "Av. de los Boliches, 106, 29640 Fuengirola, Málaga",
  addressShort: "Av. de los Boliches, 106 · Fuengirola",
} as const;

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Reservas", href: "/reservas" },
  { label: "Contacto", href: "/contacto" },
  { label: "Testimonios", href: "/testimonios" },
] as const;

export const HOURS = {
  trattoria: {
    winter: {
      label: "Invierno",
      rows: [
        { day: "Lunes", hours: "19:00 – 22:30" },
        { day: "Martes – Sábado", hours: "13:00 – 15:30  ·  19:00 – 22:30" },
        { day: "Domingo", hours: "Cerrado" },
      ],
    },
    summer: {
      label: "Verano",
      rows: [
        { day: "Lunes", hours: "19:30 – 23:00" },
        { day: "Martes – Sábado", hours: "13:00 – 15:30  ·  19:30 – 23:00" },
        { day: "Domingo", hours: "Cerrado" },
      ],
    },
  },
  pizzeria: {
    label: "Servicio continuo",
    rows: [
      { day: "Martes – Sábado", hours: "13:00 – 22:30" },
      { day: "Domingo y Lunes", hours: "Cerrado" },
    ],
  },
} as const;

export const FEATURED_DISHES = [
  {
    numeral: "I",
    name: "Pizza Margherita",
    nameItalic: "ragù y ricotta",
    price: "€11,00",
    description:
      "Una vuelta de tuerca a la clásica. Salsa de Ragú casero, mozzarella, provola, ricotta fresca y pimienta negra.",
    alt: "Pizza Margherita ragù y ricotta — placeholder",
  },
  {
    numeral: "II",
    name: "Spaghetti",
    nameItalic: "a la Carbonara",
    price: "€13,00",
    description:
      "La verdadera receta romana sin nata. Pasta fresca con crema de huevo, Guanciale crujiente, pimienta negra y Pecorino.",
    alt: "Spaghetti a la Carbonara — placeholder",
  },
  {
    numeral: "III",
    name: "Lasagna",
    nameItalic: "Boloñesa Casera",
    price: "€15,00",
    description:
      "Clásica receta de la nonna. Capas de pasta fresca intercaladas con nuestro Ragú a la Boloñesa de cocción lenta.",
    alt: "Lasagna Boloñesa Casera — placeholder",
  },
] as const;

export const STATS = [
  {
    numeral: "I",
    value: "+8",
    label: ["Años de", "tradición"] as const,
  },
  {
    numeral: "II",
    value: "4.8/5",
    label: ["Valoración", "clientes"] as const,
  },
  {
    numeral: "III",
    value: "100%",
    label: ["Recetas", "italianas"] as const,
  },
  {
    numeral: "IV",
    value: "2000+",
    label: ["Familias", "felices"] as const,
  },
] as const;

// Real social URLs, verified against casamavi.es footer.
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/casamavi_fuengirola/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063558024245",
  },
  {
    name: "TripAdvisor",
    href: "https://www.tripadvisor.es/Restaurant_Review-g315915-d8753439",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@casamavinapoliristopizza",
  },
] as const;

export const LEGAL_LINKS = [
  { label: "Cancelar Reserva", href: "/reservas#cancelar" },
  { label: "Política de Privacidad", href: "/legal/privacidad" },
  { label: "Términos y Condiciones", href: "/legal/terminos" },
] as const;

export const TAGLINE =
  "Más que un restaurante, somos una familia italiana en el corazón de Fuengirola.";

// Google Maps embed URL (no API key needed for the simple embed).
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Av.+de+los+Boliches+106,+29640+Fuengirola&output=embed";
export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Av.+de+los+Boliches+106,+29640+Fuengirola,+Málaga";

/**
 * Placeholder testimonials. Replace each entry with a real review pulled from
 * TripAdvisor / Google / the live site before launch. The shape is stable —
 * just swap the strings.
 */
export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Marta R.",
    location: "Madrid",
    date: "Octubre 2025",
    rating: 5,
    source: "TripAdvisor",
    quote:
      "La mejor pizza napolitana fuera de Italia. La masa, los ingredientes, el trato — todo impecable. Salimos como si hubiéramos cenado con una familia italiana de verdad.",
  },
  {
    id: "t2",
    name: "Lars Eriksen",
    location: "Oslo",
    date: "Septiembre 2025",
    rating: 5,
    source: "TripAdvisor",
    quote:
      "We have visited Casa Mavi every winter for three years. The carbonara is the most authentic outside of Rome and Giovanni treats every guest like family. Genuine gem in Los Boliches.",
  },
  {
    id: "t3",
    name: "Carmen L.",
    location: "Fuengirola",
    date: "Agosto 2025",
    rating: 5,
    source: "Google",
    quote:
      "Soy celíaca y pude disfrutar de una pizza napolitana auténtica sin gluten. Imposible distinguirla. Atención exquisita, recetas de la nonna y un horno de piedra que se nota en cada bocado.",
  },
  {
    id: "t4",
    name: "Antonio P.",
    location: "Málaga",
    date: "Julio 2025",
    rating: 5,
    source: "TripAdvisor",
    quote:
      "Los Paccheri alla Genovese se deshacen en la boca. La burrata frita con pistacho es de las cosas más ricas que he comido este año. Volveremos seguro — ya somos familia.",
  },
  {
    id: "t5",
    name: "Sophie Dubois",
    location: "Paris",
    date: "Junio 2025",
    rating: 5,
    source: "Google",
    quote:
      "Une cuisine italienne authentique et un accueil chaleureux. Le tiramisu maison est divin et la pizza Mavi un coup de cœur. Adresse incontournable à Fuengirola.",
  },
  {
    id: "t6",
    name: "Familia García",
    location: "Sevilla",
    date: "Mayo 2025",
    rating: 5,
    source: "TripAdvisor",
    quote:
      "Vinimos con dos niños y nos sentimos como en casa. El menú infantil es generoso, los pizzeros nos enseñaron cómo trabajaban la masa, y los postres son para repetir. Una experiencia familiar de 10.",
  },
] as const;

export const GALLERY_ITEMS = [
  { id: "g1", alt: "Pizza Margherita recién salida del horno de piedra", aspect: "4/5" as const, tone: "ember" as const },
  { id: "g2", alt: "Salón principal de Casa Mavi", aspect: "3/2" as const, tone: "warm" as const },
  { id: "g3", alt: "Pasta fresca elaborada a mano", aspect: "1/1" as const, tone: "warm" as const },
  { id: "g4", alt: "Burrata frita con pesto de pistacho", aspect: "4/5" as const, tone: "ember" as const },
  { id: "g5", alt: "El horno de piedra en plena ebullición", aspect: "3/4" as const, tone: "wine" as const },
  { id: "g6", alt: "Tiramisú casero servido en mesa", aspect: "1/1" as const, tone: "ember" as const },
  { id: "g7", alt: "Bodega de vinos italianos", aspect: "3/4" as const, tone: "wine" as const },
  { id: "g8", alt: "Detalle de la decoración italiana tradicional", aspect: "4/5" as const, tone: "warm" as const },
  { id: "g9", alt: "Mesa puesta para una cena en familia", aspect: "16/10" as const, tone: "warm" as const },
] as const;

export const TRIPADVISOR_URL =
  "https://www.tripadvisor.es/Restaurant_Review-g315915-d8753439";
