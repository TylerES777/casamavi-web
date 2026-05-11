export type DishTag = "veg" | "vegan" | "gf" | "spicy" | "lactose-free";

export type Dish = {
  name: string;
  /** Optional italic clause appended after the main name (Fraunces italic). */
  italic?: string;
  price?: string;
  description?: string;
  tags?: DishTag[];
};

export type MenuSubcategory = {
  id: string;
  name: string;
  notice?: string;
  items: Dish[];
};

export type MenuCategory = {
  id: string;
  name: string;
  italic?: string;
  subtitle?: string;
  notice?: string;
  items?: Dish[];
  subcategories?: MenuSubcategory[];
};

export const TAG_LABELS: Record<DishTag, string> = {
  veg: "Vegetariano",
  vegan: "Vegano",
  gf: "Sin Gluten",
  "lactose-free": "Sin Lactosa",
  spicy: "Picante",
};

export const TAG_SHORT: Record<DishTag, string> = {
  veg: "V",
  vegan: "VG",
  gf: "GF",
  "lactose-free": "SL",
  spicy: "♨",
};

/** Filter pills shown above the menu (per Section 6.2 of the brief). */
export const DIETARY_FILTERS = [
  { id: "vegan", label: "Vegano" },
  { id: "veg", label: "Vegetariano" },
  { id: "gf", label: "Sin Gluten", note: "+€2" },
  { id: "lactose-free", label: "Sin Lactosa", note: "+€2" },
] as const;

export const MENU_NOTICE =
  "Cesta de pan €1,50 · Ingredientes estándar €1,50 · Ingredientes premium €3,00";

export const SUPPORTED_LANGS = [
  { code: "ES", label: "Español", available: true },
  { code: "EN", label: "English", available: false },
  { code: "FR", label: "Français", available: false },
  { code: "DE", label: "Deutsch", available: false },
  { code: "IT", label: "Italiano", available: false },
  { code: "FI", label: "Suomi", available: false },
  { code: "NO", label: "Norsk", available: false },
  { code: "SV", label: "Svenska", available: false },
  { code: "DA", label: "Dansk", available: false },
  { code: "PL", label: "Polski", available: false },
] as const;

export const MENU: MenuCategory[] = [
  {
    id: "entrantes",
    name: "Entrantes",
    italic: "Para empezar",
    items: [
      {
        name: "Ensalada Caprese",
        italic: "con Burrata",
        price: "€13",
        description:
          "Tomates Cherry dulces, Burrata DOP cremosa y albahaca fresca. La mejor opción saludable para empezar tu comida.",
        tags: ["veg", "gf"],
      },
      {
        name: "Burrata Frita",
        italic: "con Pistacho",
        price: "€15",
        description:
          "Burrata DOP de 125g envuelta en masa de pizza y frita al momento. Servida sobre pesto de pistacho y mortadela italiana. Nuestro entrante más famoso y delicioso.",
      },
      {
        name: "Caprese Mozzarella di Bufala DOP",
        price: "€15",
        description:
          "Tomate Cherry con albahaca fresca, Aceite Virgen Extra y Mozzarella de Búfala DOP de 250g. Calidad de producto.",
        tags: ["veg", "gf"],
      },
      {
        name: "Provolone Italiano",
        italic: "al Horno",
        price: "€10",
        description:
          "Medallón de queso Provolone fundido al horno con especias. Ideal para compartir y mojar nuestro pan casero.",
        tags: ["veg", "gf"],
      },
      {
        name: "Bruschetta",
        italic: "a la Sorrentina",
        price: "€11",
        description:
          "Pan tostado con tomate fresco, mozzarella fresca, orégano y Aceite Virgen Extra. Simple y fresco.",
        tags: ["veg"],
      },
      {
        name: "Pan de Ajo con Queso",
        price: "€7,50",
        description:
          "Pan pizza casero horneado con mozzarella, emmental, pimienta y especias. El acompañante perfecto.",
        tags: ["veg"],
      },
      {
        name: "Pan de Gorgonzola y Cebolla",
        price: "€8,50",
        description:
          "Pan pizza gourmet con queso Gorgonzola DOP, cebolla fresca y pimienta negra. Sabor intenso para abrir el apetito.",
        tags: ["veg"],
      },
      {
        name: "Camembert al Horno",
        price: "€14",
        description:
          "Con guarnición de salsa de trufa negra italiana, miel y pimienta.",
        tags: ["veg", "gf"],
      },
      {
        name: "Provola",
        italic: "a la Pizzaiola",
        price: "€13",
        description:
          "Auténtica Provola (Mozzarella Ahumada) fundida al horno en nuestra salsa de tomate San Marzano, con orégano, un toque de aceite EVO y pimienta negra. Servido burbujeante, ideal para mojar pan.",
        tags: ["veg", "gf"],
      },
    ],
  },
  {
    id: "ninos",
    name: "Niños",
    italic: "Hasta 12 años",
    items: [
      {
        name: "Macarrones Tomate y Parmesano",
        price: "€9,50",
        description:
          "Refresco incluido: Agua, Coca Cola, Fanta, Sprite, Nestea, Zumos de fruta. Aquarius no incluido.",
        tags: ["veg"],
      },
      {
        name: "Mini Pizza Margherita",
        price: "€9,50",
        description:
          "Refresco incluido: Agua, Coca Cola, Fanta, Sprite, Nestea, Zumos de fruta. Aquarius no incluido.",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "pastas",
    name: "Pastas",
    italic: "Primeros Platos",
    subtitle: "Pasta fresca importada directamente de Italia",
    items: [
      {
        name: "Spaghetti Carbonara",
        italic: "Auténtica",
        price: "€13",
        description:
          "La verdadera receta romana sin nata. Pasta fresca con crema de huevo, Guanciale crujiente, pimienta negra y Pecorino Romano.",
      },
      {
        name: "Paccheri",
        italic: "alla Genovese Napoletana",
        price: "€16",
        description:
          "El secreto mejor guardado de Nápoles. Grandes tubos de pasta con ragú tradicional de ternera y cebollas, cocinado a fuego muy lento durante horas. La carne se deshace sola. Pura alma italiana.",
      },
      {
        name: "Lasaña Boloñesa",
        italic: "Casera",
        price: "€16",
        description:
          "Clásica receta de la nonna. Capas de pasta fresca con Ragú a la Boloñesa de cocción lenta y bechamel suave.",
      },
      {
        name: "Lasaña Napolitana",
        price: "€16",
        description:
          "La joya de los domingos en Nápoles. Sin bechamel: ricotta auténtica y un ragú de carne estofado a fuego muy lento durante horas. Irresistible.",
      },
      {
        name: "Tagliatelle / Raviolone",
        italic: "Carne Brasata",
        price: "€16",
        description:
          "Pasta fresca con receta auténtica de Ragú Bolognese casero o rellena de carne brasata (estofada). Tradición pura.",
      },
      {
        name: "Ravioli / Gnocchi",
        italic: "al Pesto Genovese",
        price: "€12",
        description:
          "Pasta rellena bañada en nuestro pesto de albahaca fresca machacada a mano. Opción vegetariana fresca y aromática.",
        tags: ["veg"],
      },
      {
        name: "Ravioli / Gnocchi",
        italic: "con Salsa de Calabaza",
        price: "€12",
        description:
          "Pasta fresca con una suave crema de calabaza, almendra garapiñada y queso de cabra. Un contraste dulce-salado espectacular.",
        tags: ["veg"],
      },
      {
        name: "Ravioli / Gnocchi",
        italic: "con Gorgonzola",
        price: "€12",
        description:
          "Pasta fresca con nuestra salsa de Gorgonzola DOP casera y nueces crujientes. Cremosa e intensa.",
        tags: ["veg"],
      },
      {
        name: "Gnocchi",
        italic: "a la Sorrentina",
        price: "€12",
        description:
          "Ñoquis de patata horneados con salsa de tomate San Marzano, Provola ahumada fundida y Parmigiano. Un viaje al sur de Italia.",
        tags: ["veg"],
      },
      {
        name: "Raviolone",
        italic: "de Mozzarella di Bufala y Ricotta",
        price: "€13",
        description:
          "Servido con salsa de tomate cherry del Vesuvio y pesto casero de albahaca fresca.",
        tags: ["veg"],
      },
      {
        name: "Pappardelle",
        italic: "con Boletus y Setas",
        price: "€16",
        description:
          "Cintas de pasta larga con cremosa salsa de Boletus y setas de temporada, con Queso Pecorino y pimienta. Plato gourmet de alta demanda.",
        tags: ["veg"],
      },
      {
        name: "Paccheri",
        italic: "con Ragú de Pulpo",
        price: "€17",
        description:
          "Pasta Paccheri napolitana con un intenso ragú de pulpo fresco. Fusión perfecta de cocina italiana y costa.",
        tags: ["gf"],
      },
      {
        name: "Plato Especial del Día",
        price: "€18",
        description: "Consultar al personal.",
      },
    ],
  },
  {
    id: "meriendas",
    name: "Meriendas",
    italic: "Saladas y dulces",
    subtitle: "Servidas por la tarde · 15:30 – 19:00",
    items: [
      {
        name: "Salmón Ahumado, Aguacate y Salvia",
        price: "€9",
        description:
          "Focaccia artesana de masa madre con crema de aguacate maduro y salmón ahumado premium. Toque de lima fresca y salvia crujiente.",
        tags: ["gf"],
      },
      {
        name: "Porchetta, Provola e Friarielli",
        price: "€9",
        description:
          "Focaccia artesana con porchetta de Ariccia asada con hierbas, provola affumicata y friarielli salteados con ajo y guindilla.",
      },
      {
        name: "Prosciutto Crudo, Fiordilatte, Cherry y Rúcula",
        price: "€9",
        description:
          "Focaccia artesanal con Fiordilatte, Prosciutto Crudo de Parma, tomates cherry dulces y rúcula fresca con aceite EVO.",
      },
      {
        name: "Focaccia",
        italic: "de Crema de Pistacho y Oreo",
        price: "€9",
        description:
          "Focaccia artesanal con crema de pistacho siciliano y trozos crujientes de galleta Oreo.",
        tags: ["veg"],
      },
      {
        name: "Focaccia",
        italic: "de Nutella y Kinder Bueno",
        price: "€9",
        description:
          "Focaccia artesanal con Nutella fundida, trozos de Kinder Bueno y lluvia de avellanas tostadas picadas.",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizze e Calzoni",
    italic: "Horno de piedra",
    subtitle: "Masa artesanal · Horno de piedra tradicional a 450°C",
    items: [
      {
        name: "Pizza Marinara",
        price: "€7",
        description:
          "Salsa de tomate, rodajas de ajo fresco, orégano y aceite EVO. Simple, histórica y 100% vegana.",
        tags: ["vegan", "gf"],
      },
      {
        name: "Pizza Prosciutto Cotto e Mozzarella",
        price: "€8",
        description:
          "Salsa de tomate, mozzarella, Jamón Cocido Italiano, orégano y Parmigiano.",
      },
      {
        name: "Pizza Jamón Serrano",
        price: "€10",
        description:
          "Mozzarella, Jamón Serrano fresco, Parmigiano y Aceite de Oliva EVO. Con o sin tomate.",
      },
      {
        name: "Pizza 5 Quesos",
        price: "€10",
        description:
          "Mozzarella, Gorgonzola, Emmental, Provola y Parmigiano. El paraíso de los amantes del queso. Con o sin tomate.",
        tags: ["veg"],
      },
      {
        name: "Pizza Piccante",
        italic: "Diavola",
        price: "€11",
        description:
          "Salsa de tomate, mozzarella, pimiento y auténtico Salame Picante Italiano. Elige tu nivel de picante.",
        tags: ["spicy"],
      },
      {
        name: "Pizza Boloñesa",
        price: "€13",
        description:
          "Salsa de tomate, nuestra salsa Boloñesa casera de carne, mozzarella y Parmigiano.",
      },
      {
        name: "Pizza Atún y Cebolla",
        price: "€12",
        description:
          "Cebolla roja, atún, mozzarella, aceite de ajo y Parmigiano. Con o sin tomate.",
      },
      {
        name: "Pizza Salmón",
        price: "€13",
        description:
          "Salsa de tomate, ajo, perejil, mozzarella y salmón ahumado de calidad.",
      },
      {
        name: "Pizza Bacon",
        price: "€10",
        description:
          "Salsa de tomate, mozzarella, bacon, pimienta negra y Parmigiano.",
      },
      {
        name: "Pizza Vegetariana Fresca",
        price: "€12",
        description:
          "Salsa de tomate, mozzarella y una selección de verduras de temporada frescas.",
        tags: ["veg"],
      },
      {
        name: "Pizza Jamón Cocido y Champiñones",
        price: "€9,50",
        description:
          "Salsa de tomate, mozzarella, Jamón Cocido Italiano, champiñones y Parmigiano.",
      },
      {
        name: "Calzone 5 Quesos",
        price: "€10",
        description:
          "Salsa de tomate, mozzarella, Gorgonzola, Emmental, Provola y Parmigiano.",
        tags: ["veg"],
      },
      {
        name: "Calzone Pan de Ajo",
        price: "€9",
        description:
          "Sin tomate. Mozzarella, emmental, ajo, pimienta negra y parmesano.",
        tags: ["veg"],
      },
      {
        name: "Calzone Jamón y Queso",
        price: "€9",
        description:
          "Salsa de tomate, mozzarella, Jamón Cocido Italiano y Parmigiano.",
      },
    ],
  },
  {
    id: "especiales",
    name: "Especiales",
    italic: "Pizzas Especiales Casa Mavi",
    subtitle: "Recetas napolitanas con ingredientes premium importados de Italia",
    items: [
      {
        name: "Pizza Margherita",
        italic: "La Única e Inigualable",
        price: "€9",
        description:
          "Tomate, mozzarella fresca, albahaca fresca, Parmigiano y un hilo de Aceite EVO en crudo. La base de la felicidad italiana.",
        tags: ["veg"],
      },
      {
        name: "Pizza Margherita",
        italic: "de Ragù y Ricotta",
        price: "€11",
        description:
          "Salsa de Ragù casero, mozzarella, provola, ricotta fresca y pimienta negra. Cremosa y llena de sabor napolitano.",
      },
      {
        name: "Pizza Siciliana",
        italic: "Homenaje al Antiguo Reino",
        price: "€14",
        description:
          "Salsa de tomate Cherry del Vesubio, berenjenas fritas caseras y Parmigiano. Opción vegetariana mediterránea.",
        tags: ["veg"],
      },
      {
        name: "Pizza Bianca",
        italic: "Guanciale",
        price: "€14",
        description:
          "Sin tomate. Mozzarella, Provola ahumada, Guanciale DOP crujiente, Parmigiano y pimienta negra. Intensa y cremosa.",
      },
      {
        name: "Pizza Mavi",
        italic: "Un Alma Suave",
        price: "€14",
        description:
          "Base de tomate y mozzarella, tomate cherry en crudo, gotas de pesto de albahaca casero y Parmigiano. Fresca y aromática.",
        tags: ["veg"],
      },
      {
        name: "Pizza Terra Mia",
        italic: "Salsiccia e Friarielli",
        price: "€14",
        description:
          "Auténtica pizza napolitana blanca (sin tomate). Provola ahumada, salchicha fresca italiana y Friarielli (grelos napolitanos). Sabores intensos y tradicionales.",
      },
      {
        name: "Calzone Napolitano",
        italic: "Al Horno o Frito",
        price: "€16",
        description:
          "Relleno de ricotta, salame, provola y pimienta. Al horno o en la versión frita (Pizza Fritta), típica de las calles de Nápoles.",
      },
      {
        name: "Fagotto del Vesuvio",
        italic: "Pizza Enrollada",
        price: "€14",
        description:
          "Masa de pizza enrollada con corazón cremoso de Gorgonzola DOP y espinacas frescas. Pimienta negra y Parmigiano.",
        tags: ["veg"],
      },
      {
        name: "Pizza Gustosa",
        italic: "Sin tomate",
        price: "€16",
        description:
          "Sin tomate. Mozzarella, salchicha italiana, salsa de trufa negra italiana, setas, pimienta negra y Parmigiano.",
      },
      {
        name: "Ghiottona",
        italic: "Bordes Rellenos",
        price: "€16",
        description:
          "Nuestra especialidad estrella. Bordes rellenos de Ricotta y Salame Napoli. Base con Mozzarella, salchicha y verduras de temporada.",
      },
      {
        name: "Especial del Día",
        price: "€17",
        description: "Consúltanos para conocer el plato de hoy.",
      },
    ],
  },
  {
    id: "segundos",
    name: "Segundos",
    italic: "Segundos Platos",
    items: [
      {
        name: "Codillo Asado al Horno",
        italic: "Estilo Italiano",
        price: "€18",
        description:
          "Codillo con especias y aroma de Vino Marsala (dulce de Sicilia), servido con patatas al horno.",
        tags: ["gf"],
      },
      {
        name: "Berenjena al Horno Rellena",
        price: "€14",
        description:
          "Berenjena rellena de su propia carne, picado de ternera y cerdo, provola y salsa de tomate San Marzano.",
        tags: ["gf"],
      },
      {
        name: "Salchicha Italiana",
        italic: "con Provola y Friarielli",
        price: "€14",
        description:
          "Salchicha a la parrilla con Friarielli (grelos napolitanos) y una loncha de Provola ahumada.",
        tags: ["gf"],
      },
      {
        name: "Parmigiana",
        italic: "di Melanzane alla Napoletana",
        price: "€18",
        description:
          "Nuestra lasaña sin pasta. Láminas de berenjena doradas, alternadas con ragú de tomate, provola ahumada fundida, albahaca fresca y gratinado crujiente de Parmigiano Reggiano.",
        tags: ["veg", "gf"],
      },
      {
        name: "Pollo a la Cazadora",
        italic: "en Dos Cocciones",
        price: "€18",
        description:
          "Pollo tierno cocinado dos veces a fuego muy lento con tomate, vino blanco y romero fresco. Carne que se deshace sola, rematada con crujiente de hierbas.",
        tags: ["gf"],
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    italic: "Dolci",
    subtitle: "El dulce final perfecto para tu experiencia italiana",
    items: [
      {
        name: "Tiramisú",
        italic: "Casero",
        price: "€6,50",
        description:
          "Savoiardi empapados en café espresso, huevos pasteurizados, mascarpone fresco y cacao amargo. Elaboración diaria artesanal.",
      },
      {
        name: "Cannolo",
        italic: "Siciliano",
        price: "€6,50",
        description:
          "El rey de Sicilia. Tubo de masa crujiente relleno al momento de ricotta de oveja dulce y virutas de chocolate.",
      },
      {
        name: "Tarta de Queso Mascarpone",
        price: "€7",
        description:
          "Cremosa tarta casera de queso. Elige tu topping: Amarena, Café, Amaretto o Pistacho.",
        tags: ["veg"],
      },
      {
        name: "Panna Cotta",
        italic: "Italiana",
        price: "€6",
        description:
          "Flan italiano clásico sin huevo. Textura sedosa con salsa de chocolate, caramelo, frutos rojos, fresa o mango.",
        tags: ["veg", "gf"],
      },
      {
        name: "Babà",
        italic: "Napoletano",
        price: "€7",
        description:
          "Bizcocho tradicional de Nápoles, esponjoso y ligeramente emborrachado en ron.",
      },
      {
        name: "Tortino de Chocolate Caliente",
        price: "€7",
        description:
          "Volcán de chocolate con corazón fundido. Con nata y topping de Nutella. Se sirve caliente.",
        tags: ["veg"],
      },
      {
        name: "Helado de Vainilla",
        italic: "2 bolas",
        price: "€6",
        description: "Con guarnición de nata y Nutella.",
        tags: ["veg", "gf"],
      },
      {
        name: "Sorbete de Limón o Pistacho",
        price: "€5",
        description:
          "Cremoso sorbete de limones típico del sur de Italia. Refrescante y digestivo.",
        tags: ["vegan", "gf"],
      },
      {
        name: "Sgroppino",
        italic: "di Limone",
        price: "€7",
        description:
          "Sorbete de limón batido con Prosecco Italiano extra dry o variante con Vodka. El final perfecto para una cena copiosa.",
      },
      {
        name: "Postre de Temporada o Especial",
        price: "€8",
        description:
          "Postres caseros típicos de una temporada o un lugar de Italia. Preguntar.",
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    italic: "Para acompañar",
    subcategories: [
      {
        id: "refrescos",
        name: "Refrescos",
        items: [
          { name: "Coca-Cola, Fanta, Sprite, Nestea, Schweppes", price: "€2,80" },
          { name: "Aquarius", price: "€3,20" },
          { name: "Sangría", price: "€8,00" },
          { name: "Agua mineral 50cl", price: "€2,80" },
          { name: "Agua mineral 1L", price: "€3,80" },
          { name: "Agua con gas 50cl", price: "€3,00" },
          { name: "Zumos de fruta", price: "€2,30" },
        ],
      },
      {
        id: "spritz",
        name: "Spritz",
        notice:
          "Aperol Spritz · Aperol Lemon · Campari · Ugo · Limoncello · Amaretto · Meloncello · Ron",
        items: [{ name: "Cualquier variedad", price: "€6,50" }],
      },
      {
        id: "licores",
        name: "Licores",
        items: [
          { name: "Ron · Ginebra · Whisky · Vodka", price: "€5 / €7 con refresco" },
          { name: "Cognac / Brandy", price: "€6" },
          { name: "Negroni", price: "€7" },
          { name: "Digestivos", price: "€5" },
          { name: "Limoncello Casero", price: "€6" },
          { name: "Sgroppino Prosecco / Vodka", price: "€6" },
          { name: "Campari · Martini", price: "€5" },
        ],
      },
      {
        id: "cafe",
        name: "Café",
        items: [
          { name: "Pequeño", price: "€1,60" },
          { name: "Grande", price: "€1,90" },
          { name: "Tés", price: "€2,00" },
          { name: "Café Irlandés", price: "€6,00" },
          { name: "Espresso", price: "€1,60" },
          { name: "Espresso Doble", price: "€3,00" },
          { name: "Americano", price: "€1,80" },
          { name: "Cappuccino", price: "€1,90" },
          {
            name: "Caffè Affogato",
            italic: "alla Vanilla",
            price: "€4,30",
            description: "Espresso sobre helado de vainilla.",
          },
          {
            name: "Caffè Nutella",
            price: "€4,30",
            description: "Espresso con crema de Nutella.",
          },
          {
            name: "Caffè Corretto",
            price: "€4,30",
            description: "Espresso con grappa o licor.",
          },
        ],
      },
      {
        id: "cervezas",
        name: "Cervezas",
        items: [
          {
            name: "Baladin Nazionale",
            price: "€4,00",
            description:
              "Blonde Ale italiana 100% · afrutada y especiada, notas cítricas.",
          },
          {
            name: "Baladin",
            italic: "Sin Gluten",
            price: "€4,50",
            description:
              "Amarillo intenso · espuma blanca persistente · sin gluten.",
            tags: ["gf"],
          },
          {
            name: "Menabrea",
            italic: "Sin Filtrar",
            price: "€4,00",
            description: "Pale Lager · la cervecera más antigua de Italia.",
          },
          {
            name: "Menabrea 0.0",
            price: "€4,00",
            description: "Perfil lager premium sin alcohol.",
          },
          {
            name: "Birra Messina",
            italic: "Cristalli di Sale",
            price: "€4,00",
            description:
              "Lager sin filtrar · cristales de sal marina siciliana · 5%.",
          },
          {
            name: "Estrella Galicia 0,0 Tostada",
            price: "€2,80",
            description: "Sin alcohol · sabor tostado.",
          },
          {
            name: "Estrella Galicia B-Lemon Radler",
            price: "€3,00",
            description: "60% zumo de limón · 2,2% alcohol.",
          },
          {
            name: "Alhambra Reserva 1925",
            price: "€3,20",
            description: "Extra lager · carácter intenso y complejo.",
          },
          {
            name: "Estrella Galicia",
            price: "€2,80",
            description:
              "Estilo Lager de malta pura · vinculación con la cultura gallega.",
          },
        ],
      },
      {
        id: "vinos-copa",
        name: "Vinos · Por copa",
        items: [
          {
            name: "Tinto de la Casa",
            price: "€4,50",
            description: "Gusto redondo · todo tipo de platos.",
          },
          {
            name: "Tinto Reserva",
            price: "€5,50",
            description: "Ideal para carnes y lasañas.",
          },
          {
            name: "Blanco de la Casa",
            price: "€4,50",
            description: "Fresco y ligero.",
          },
          {
            name: "Blanco Reserva",
            price: "€5,50",
            description: "Acidez equilibrada · notas frutales.",
          },
          {
            name: "Rosado de la Casa",
            price: "€4,50",
            description: "Mediterráneo · refrescante.",
          },
          {
            name: "Rosado Blush",
            price: "€5,50",
            description: "Pinot Nero · seco y redondo.",
          },
        ],
      },
      {
        id: "vinos-botella",
        name: "Vinos · Por botella",
        items: [
          { name: "Aglianico", price: "€32" },
          { name: "Taurasi Reserva", price: "€55" },
          { name: "Barolo Reserva", price: "€60" },
          { name: "Frappato", price: "€40" },
          { name: "Valpolicella Ripasso Reserva", price: "€35" },
          { name: "Amarone di Valpolicella Reserva", price: "€80" },
          { name: "Chianti Reserva", price: "€32" },
          { name: "Falanghina", price: "€30" },
          { name: "Fiano di Avellino", price: "€30" },
          { name: "Greco di Tufo DOCG", price: "€30" },
          { name: "Pecorino DOC", price: "€28" },
          { name: "Pinot Grigio DOCG", price: "€33" },
          { name: "Lambrusco di Grasparossa DOCG", price: "€28" },
          { name: "Prosecco DOC", price: "€28" },
        ],
      },
      {
        id: "grappas",
        name: "Grappas",
        items: [
          {
            name: "Amarone",
            price: "€6",
            description: "Destilada del orujo de Amarone · intensa y profunda.",
          },
          {
            name: "18 Lune",
            price: "€8",
            description: "18 meses de crianza · redonda y matizada.",
          },
          {
            name: "Berta Composita",
            price: "€10",
            description: "Mezcla armoniosa de distintas uvas · suave y elegante.",
          },
          {
            name: "Trentina",
            price: "€10",
            description: "Del Trentino · delicada y floral.",
          },
          {
            name: "Giare Amarone",
            price: "€15",
            description: "Barricada en roble · compleja y envolvente.",
          },
          {
            name: "Berta Distinta",
            price: "€15",
            description:
              "Expresión refinada de la destilería Berta · carácter único.",
          },
        ],
      },
    ],
  },
];
