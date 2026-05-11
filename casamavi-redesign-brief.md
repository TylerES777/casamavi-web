# Casa Mavi — Website Redesign Brief for Claude Code

> **How to use this file**
> Drop this `.md` file into your Claude Code project folder along with `/assets/logo.png`, `/reference/current/` (screenshots of current site), and any food photography you save. Then tell Claude Code: *"Read casamavi-redesign-brief.md and build the site according to the spec. Ask me clarifying questions before writing code."*

---

## 1. The Business

**Name:** Casa Mavi
**Type:** Trattoria & Pizzería Napolitana (authentic family-run Italian restaurant)
**Location:** Av. de los Boliches, 106 — 29640 Fuengirola, Málaga (Los Boliches neighborhood)
**Founded:** 2015
**Recognition:** TripAdvisor Certificate of Excellence 2017–2025 (9 consecutive years)

**One-line positioning:** Authentic Neapolitan pizza from a stone oven, fresh handmade pasta, and certified gluten-free options — in a warm family-run trattoria in Los Boliches.

**Core differentiators (use these throughout copy):**
- Stone oven (horno de piedra) for Neapolitan pizza
- Fresh pasta imported daily from Italy + made in-house
- DOP cheeses, EVO oils, and ingredients imported directly from Italy
- Certified gluten-free options (+€2)
- Vegan and vegetarian adaptations
- Family-run, family-feel — not corporate

---

## 2. Contact & Operations

| Item | Detail |
|---|---|
| Address | Av. de los Boliches, 106, 29640 Fuengirola, Málaga |
| Phone / WhatsApp | +34 666 69 96 35 |
| Email | reservation@casamavi.es |
| Privacy email | casamavi2015@gmail.com (data protection contact) |
| Owner / Data controller | Scala Giovanni |

**Trattoria (Cocina) Hours:**
- **Winter:** Mon 19:00–22:30 · Tue–Sat 13:00–15:30 / 19:00–22:30 · Sun closed
- **Summer:** Mon 19:30–23:00 · Tue–Sat 13:00–15:30 / 19:30–23:00 · Sun closed

**Pizzería, Postres y Bar (continuous service):**
- Tue–Sat 13:00–22:30 (open all day, no break)

**Social:** Facebook, Instagram, WhatsApp, TikTok (icons only — get URLs from current site footer).

**Languages on site:** ES (primary), EN, FR, DE, IT, FI, NO, SV, DA, PL.

---

## 3. Brand Voice & Tone

- **Warm, familial, Italian-rooted.** Not corporate. Not trendy. Confident in tradition.
- Repeated emotional anchors in current copy: *"familia," "auténtico," "tradición," "amor," "corazón," "Italia en Los Boliches."*
- Founder narrative: an Italian family who brought the real cuisine of Italy to the Costa del Sol — every ingredient imported, every recipe traditional.
- Tagline-style lines they use:
  - *"Más que un restaurante, somos una familia italiana en el corazón de Fuengirola."*
  - *"Una pasión que cruzó el Mediterráneo."*
  - *"Tratamos a cada cliente como si fuera un invitado en nuestra propia casa."*

---

## 4. Brand Identity (Current)

**Logo:** Circular badge with mountain/peak imagery, "CASA MAVI" wordmark, and "TRATTORIA PIZZERIA NAPOLETANA" sublabel. Cream/off-white background with brown text. **Save from current site:** right-click the logo on casamavi.es and save as `/assets/logo.png` (it lives at `imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/4ce6f775-ca49-4748-f17b-72cecea04700/publicContain`).

**Current color palette (extracted from screenshots):**
- Cream / warm off-white background: `#F5EDE0` (approx)
- Deep terracotta / burnt orange (CTAs, accents): `#C84B2C` (approx)
- Wine red / burgundy (menu accents, headings): `#8B1F2A` (approx)
- Warm brown / espresso (footer, dark sections): `#3D2818` (approx)
- Olive green (secondary CTA, "open" badges): `#7A8B3F` (approx)
- Mustard / golden yellow (highlights): `#D4A24C` (approx)

**Current typography feel:** Serif headings (looks like a classic Italian editorial serif — Playfair, Cormorant, or similar), sans-serif body. Capitalized small-caps section labels.

**Current photography:** Warm, food-forward, hero shots of Neapolitan pizza, pasta dishes, mural backdrop in hero. **All current photos should be reused** — save them from the live site into `/assets/photos/`.

---

## 5. Site Architecture

Keep the same page structure. Six pages plus the external digital menu link:

1. **Inicio** (Home)
2. **Menú** (full menu with categories)
3. **Sobre Nosotros** (About)
4. **Reservas** (Reservations)
5. **Contacto** (Contact)
6. **Testimonios y Galería** (Testimonials & Gallery)
7. **External link:** "Ver Carta / Digital Menu" → `https://sites.google.com/view/menu-digital-casa-mavi`

**Persistent header CTAs:** "Ver Carta / Digital Menu" (secondary) and "Reservar Mesa" (primary).
**Persistent footer:** Logo + tagline, navigation, contact, hours (winter + summer), social icons, "Reservar Mesa" CTA, legal links (Cancelar Reserva, Política de Privacidad, Términos y Condiciones).

---

## 6. Page-by-Page Content

### 6.1 Inicio (Home)

**Hero**
- Badge: "Certificado de Excelencia TripAdvisor 2017–2025"
- H1: **Pizzería Napolitana en Fuengirola — Casa Mavi**
- Subhead: *Bienvenidos a Casa Mavi, tu Trattoria y Pizzería Napolitana en Fuengirola. Saborea pizzas auténticas al **horno de piedra**, pasta fresca y los mejores sabores de **Italia**. Ofrecemos **opciones sin gluten** y adaptamos nuestros platos para comensales veganos bajo petición.*
- Primary CTA: "Reservar Mesa" — Secondary CTA: "Ver Carta / Digital Menu"
- Quick info strip: phone `+34 666 69 96 35` · address `Av. de los Boliches, 106, Fuengirola`
- Hours block (Trattoria winter/summer + Pizzería continuous)

**"Nuestra Esencia: Sabor Italiano en Los Boliches"** — three-pillar section
- Subhead: *Somos una Trattoria familiar en Fuengirola donde cada plato cuenta una historia de autenticidad, tradición y amor por la cocina napolitana.*
- Pillar 1 — **Pizzas Artesanales:** *Pizzas napolitanas auténticas con masa de larga fermentación y horneadas en nuestro horno de piedra a 450°C.* Bullets: Masa ligera y crujiente · Ingredientes frescos importados · Recetas tradicionales italianas
- Pillar 2 — **Pasta Fresca:** *Pasta fresca elaborada a diario siguiendo las técnicas tradicionales de la nonna. Disponible en versión sin gluten.* Bullets: Pasta fresca hecha a mano · Salsas caseras auténticas · Opciones sin gluten y adaptaciones veganas
- Pillar 3 — **Ambiente Familiar:** *Un rincón acogedor en el corazón de Los Boliches donde cada visita se siente como en casa de la familia italiana.* Bullets: Servicio cálido y personalizado · Decoración italiana tradicional · Perfecto para familias

**"Nuestra Carta"** — featured dishes preview
- Subhead: *Pizzas napolitanas al horno de piedra, pasta fresca artesanal y recetas tradicionales italianas. En Casa Mavi, cada plato es un viaje a Italia sin salir de Fuengirola.*
- CTA: "Ver Bodega Completa"
- Three featured cards with photo:
  - **Pizza Margherita ragù y ricotta** — €11,00 — *Una vuelta de tuerca a la clásica. Salsa de Ragú casero, mozzarella, provola, ricotta fresca y pimienta negra.*
  - **Spaguetti a la Carbonara** — €13,00 — *La verdadera receta romana sin nata. Pasta fresca con crema de huevo, Guanciale crujiente, pimienta negra y Pecorino.*
  - **Lasagna Boloñesa Casera** — €15,00 — *Clásica receta de la nonna. Capas de pasta fresca intercaladas con nuestro Ragú a la Boloñesa de cocción lenta.*

**Dietary notice band**
- *¿Necesitas opciones sin gluten o adaptaciones veganas? En nuestra Trattoria ofrecemos alternativas sin gluten en pizzas y pastas. Además, adaptamos nuestros platos auténticos con verduras frescas y masa original para comensales veganos bajo petición.*
- CTA: "Contáctanos"

**Reservation block (with backdrop image of bar/wine wall)**
- H2: *Reserva tu Mesa en la Mejor Pizzería Napolitana de Fuengirola*
- *Vive una experiencia gastronómica única en nuestra Trattoria. Te esperamos en Los Boliches con los auténticos sabores de Italia, un ambiente cálido y el cariño de siempre.*
- CTAs: "Reservar Ahora" + "+34 666 69 96 35"
- Stats row: **+8** Años de tradición · **4.8/5** Valoración clientes · **100%** Recetas italianas · **2000+** Familias felices

**"Encuéntranos en el Corazón de Fuengirola"** — location section
- *Casa Mavi te espera en Los Boliches, el lugar perfecto para disfrutar de auténticos sabores italianos en un ambiente familiar y acogedor. Ven a visitarnos y déjate envolver por la calidez de Italia.*
- Address card · Hours card · WhatsApp · Phone · Email · Social icons row
- Embedded Google Map (Av. de los Boliches, 106)
- CTAs: "Reservar Mesa" + "Llamar Ahora"

---

### 6.2 Menú

Header: language selector (ES/EN/FR/DE/IT/FI/NO/SV/DA/PL) and dietary filter pills (Vegano · Vegetariano · Sin Gluten +€2 · Sin Lactosa +€2).

Notice line: *Cesta de pan 1.50€ · Ingredientes estándar 1.50€ · Ingredientes premium 3.00€*

**Category tabs:** Entrantes · Niños · Pastas · Pizzas · Especiales · Segundos · Postres · Meriendas · Bebidas

#### Entrantes
| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Ensalada Caprese con Burrata | €13 | Tomates Cherry dulces, Burrata DOP cremosa y albahaca fresca. La mejor opción saludable para empezar tu comida. | Veg, GF |
| Burrata Frita con Pistacho | €15 | Burrata DOP de 125g envuelta en masa de pizza y frita al momento. Servida sobre pesto de pistacho y mortadela italiana. Nuestro entrante más famoso y delicioso. | — |
| Caprese Mozzarella di Bufala DOP | €15 | Tomate Cherry con albahaca fresca, Aceite Virgen Extra y Mozzarella de Búfala DOP de 250g. Calidad de producto. | Veg, GF |
| Provolone Italiano al Horno | €10 | Medallón de queso Provolone fundido al horno con especias. Ideal para compartir y mojar nuestro pan casero. | Veg, GF |
| Bruschetta a la Sorrentina | €11 | Pan tostado con tomate fresco, mozzarella fresca, orégano y Aceite Virgen Extra. Simple y fresco. | Veg |
| Pan de Ajo con Queso | €7,50 | Pan pizza casero horneado con mozzarella, emmental, pimienta y especias. El acompañante perfecto. | Veg |
| Pan de Gorgonzola y Cebolla | €8,50 | Pan pizza gourmet con queso Gorgonzola DOP, cebolla fresca y pimienta negra. Sabor intenso para abrir el apetito. | Veg |
| Camembert al Horno | €14 | Con guarnición de salsa de trufa negra italiana, miel y pimienta. | Veg, GF |
| Provola a la Pizzaiola | €13 | Auténtica Provola (Mozzarella Ahumada) fundida al horno en nuestra salsa de tomate San Marzano, con orégano, un toque de aceite EVO y pimienta negra. Servido burbujeante, ideal para mojar pan. | Veg, GF |

#### Niños (hasta 12 años)
| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Macarrones Tomate y Parmesano | €9,50 | Refresco incluido: Agua, Coca Cola, Fanta, Sprite, Nestea, Zumos de fruta. Aquarius no incluido. | Veg |
| Mini Pizza Margherita | €9,50 | Refresco incluido: Agua, Coca Cola, Fanta, Sprite, Nestea, Zumos de fruta. Aquarius no incluido. | Veg |

#### Pastas — "Primeros Platos"
Subhead: *Pasta fresca importada directamente de Italia*

| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Spaghetti Carbonara Auténtica | €13 | La verdadera receta romana sin nata. Pasta fresca con crema de huevo, Guanciale crujiente, pimienta negra y Pecorino Romano. | — |
| Paccheri alla Genovese Napoletana | €16 | El secreto mejor guardado de Nápoles. Grandes tubos de pasta con ragú tradicional de ternera y cebollas, cocinado a fuego muy lento durante horas. La carne se deshace sola. Pura alma italiana. | — |
| Lasaña Boloñesa Casera | €16 | Clásica receta de la nonna. Capas de pasta fresca con Ragú a la Boloñesa de cocción lenta y bechamel suave. | — |
| Lasaña Napolitana | €16 | La joya de los domingos en Nápoles. Sin bechamel: ricotta auténtica y un ragú de carne estofado a fuego muy lento durante horas. Irresistible. | — |
| Tagliatelle / Raviolone Carne Brasata | €16 | Pasta fresca con receta auténtica de Ragú Bolognese casero o rellena de carne brasata (estofada). Tradición pura. | — |
| Ravioli / Gnocchi al Pesto Genovese | €12 | Pasta rellena bañada en nuestro pesto de albahaca fresca machacada a mano. Opción vegetariana fresca y aromática. | Veg |
| Ravioli / Gnocchi con Salsa de Calabaza | €12 | Pasta fresca con una suave crema de calabaza, almendra garapiñada y queso de cabra. Un contraste dulce-salado espectacular. | Veg |
| Ravioli / Gnocchi con Gorgonzola | €12 | Pasta fresca con nuestra salsa de Gorgonzola DOP casera y nueces crujientes. Cremosa e intensa. | Veg |
| Gnocchi a la Sorrentina | €12 | Ñoquis de patata horneados con salsa de tomate San Marzano, Provola ahumada fundida y Parmigiano. Un viaje al sur de Italia. | Veg |
| Raviolone de Mozzarella di Bufala y Ricotta | €13 | Servido con salsa de tomate cherry del Vesuvio y pesto casero de albahaca fresca. | Veg |
| Pappardelle con Boletus y Setas | €16 | Cintas de pasta larga con cremosa salsa de Boletus y setas de temporada, con Queso Pecorino y pimienta. Plato gourmet de alta demanda. | Veg |
| Paccheri con Ragú de Pulpo | €17 | Pasta Paccheri napolitana con un intenso ragú de pulpo fresco. Fusión perfecta de cocina italiana y costa. | GF |
| Plato Especial del Día | €18 | Consultar al personal. | — |

#### Meriendas — "Saladas y dulces · Tarde 15:30–19:00"
| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Salmón Ahumado, Aguacate y Salvia | €9 | Focaccia artesana de masa madre con crema de aguacate maduro y salmón ahumado premium. Toque de lima fresca y salvia crujiente. | GF |
| Porchetta, Provola e Friarielli | €9 | Focaccia artesana con porchetta de Ariccia asada con hierbas, provola affumicata y friarielli salteados con ajo y guindilla. | — |
| Prosciutto Crudo, Fiordilatte, Cherry y Rúcula | €9 | Focaccia artesanal con Fiordilatte, Prosciutto Crudo de Parma, tomates cherry dulces y rúcula fresca con aceite EVO. | — |
| Focaccia de Crema de Pistacho y Oreo | €9 | Focaccia artesanal con crema de pistacho siciliano y trozos crujientes de galleta Oreo. | Veg |
| Focaccia de Nutella y Kinder Bueno | €9 | Focaccia artesanal con Nutella fundida, trozos de Kinder Bueno y lluvia de avellanas tostadas picadas. | Veg |

#### Pizze e Calzoni
Subhead: *Masa artesanal · Horno de piedra tradicional*

| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Pizza Marinara | €7 | Salsa de tomate, rodajas de ajo fresco, orégano y aceite EVO. Simple, histórica y 100% vegana. | Vegan, GF |
| Pizza Prosciutto Cotto e Mozzarella | €8 | Salsa de tomate, mozzarella, Jamón Cocido Italiano, orégano y Parmigiano. | — |
| Pizza Jamón Serrano | €10 | Mozzarella, Jamón Serrano fresco, Parmigiano y Aceite de Oliva EVO. Con o sin tomate. | — |
| Pizza 5 Quesos | €10 | Mozzarella, Gorgonzola, Emmental, Provola y Parmigiano. El paraíso de los amantes del queso. Con o sin tomate. | Veg |
| Pizza Piccante (Diavola) | €11 | Salsa de tomate, mozzarella, pimiento y auténtico Salame Picante Italiano. Elige tu nivel de picante. | Spicy |
| Pizza Boloñesa | €13 | Salsa de tomate, nuestra salsa Boloñesa casera de carne, mozzarella y Parmigiano. | — |
| Pizza Atún y Cebolla | €12 | Cebolla roja, atún, mozzarella, aceite de ajo y Parmigiano. Con o sin tomate. | — |
| Pizza Salmón | €13 | Salsa de tomate, ajo, perejil, mozzarella y salmón ahumado de calidad. | — |
| Pizza Bacon | €10 | Salsa de tomate, mozzarella, bacon, pimienta negra y Parmigiano. | — |
| Pizza Vegetariana Fresca | €12 | Salsa de tomate, mozzarella y una selección de verduras de temporada frescas. | Veg |
| Pizza Jamón Cocido y Champiñones | €9,50 | Salsa de tomate, mozzarella, Jamón Cocido Italiano, champiñones y Parmigiano. | — |
| Calzone 5 Quesos | €10 | Salsa de tomate, mozzarella, Gorgonzola, Emmental, Provola y Parmigiano. | Veg |
| Calzone Pan de Ajo | €9 | Sin tomate. Mozzarella, emmental, ajo, pimienta negra y parmesano. | Veg |
| Calzone Jamón y Queso | €9 | Salsa de tomate, mozzarella, Jamón Cocido Italiano y Parmigiano. | — |

#### Especiales — "Pizzas Especiales Casa Mavi"
Subhead: *Recetas napolitanas con ingredientes premium importados de Italia*

| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Pizza Margherita — La Única e Inigualable | €9 | Tomate, mozzarella fresca, albahaca fresca, Parmigiano y un hilo de Aceite EVO en crudo. La base de la felicidad italiana. | Veg |
| Pizza Margherita de Ragù y Ricotta | €11 | Salsa de Ragù casero, mozzarella, provola, ricotta fresca y pimienta negra. Cremosa y llena de sabor napolitano. | — |
| Pizza Siciliana — Homenaje al Antiguo Reino | €14 | Salsa de tomate Cherry del Vesubio, berenjenas fritas caseras y Parmigiano. Opción vegetariana mediterránea. | Veg |
| Pizza Bianca (Guanciale) | €14 | Sin tomate. Mozzarella, Provola ahumada, Guanciale DOP crujiente, Parmigiano y pimienta negra. Intensa y cremosa. | — |
| Pizza Mavi — Un Alma Suave | €14 | Base de tomate y mozzarella, tomate cherry en crudo, gotas de pesto de albahaca casero y Parmigiano. Fresca y aromática. | Veg |
| Pizza Terra Mia (Salsiccia e Friarielli) | €14 | Auténtica pizza napolitana blanca (sin tomate). Provola ahumada, salchicha fresca italiana y Friarielli (grelos napolitanos). Sabores intensos y tradicionales. | — |
| Calzone Napolitano (Al Horno o Frito) | €16 | Relleno de ricotta, salame, provola y pimienta. Al horno o en la versión frita (Pizza Fritta), típica de las calles de Nápoles. | — |
| Fagotto del Vesuvio — Pizza Enrollada | €14 | Masa de pizza enrollada con corazón cremoso de Gorgonzola DOP y espinacas frescas. Pimienta negra y Parmigiano. | Veg |
| Pizza Gustosa (Sin tomate) | €16 | Sin tomate. Mozzarella, salchicha italiana, salsa de trufa negra italiana, setas, pimienta negra y Parmigiano. | — |
| Ghiottona — Bordes Rellenos | €16 | Nuestra especialidad estrella. Bordes rellenos de Ricotta y Salame Napoli. Base con Mozzarella, salchicha y verduras de temporada. | — |
| Especial del Día | €17 | Consúltanos para conocer el plato de hoy. | — |

#### Segundos — "Segundos Platos"

| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Codillo Asado al Horno Estilo Italiano | €18 | Codillo con especias y aroma de Vino Marsala (dulce de Sicilia), servido con patatas al horno. | GF |
| Berenjena al Horno Rellena | €14 | Berenjena rellena de su propia carne, picado de ternera y cerdo, provola y salsa de tomate San Marzano. | GF |
| Salchicha Italiana con Provola y Friarielli | €14 | Salchicha a la parrilla con Friarielli (grelos napolitanos) y una loncha de Provola ahumada. | GF |
| Parmigiana di Melanzane alla Napoletana | €18 | Nuestra lasaña sin pasta. Láminas de berenjena doradas, alternadas con ragú de tomate, provola ahumada fundida, albahaca fresca y gratinado crujiente de Parmigiano Reggiano. | Veg, GF |
| Pollo a la Cazadora en Dos Cocciones | €18 | Pollo tierno cocinado dos veces a fuego muy lento con tomate, vino blanco y romero fresco. Carne que se deshace sola, rematada con crujiente de hierbas. | GF |

#### Postres
Subhead: *El dulce final perfecto para tu experiencia italiana*

| Plato | Precio | Descripción | Tags |
|---|---|---|---|
| Tiramisú Casero | €6,50 | Savoiardi empapados en café espresso, huevos pasteurizados, mascarpone fresco y cacao amargo. Elaboración diaria artesanal. | — |
| Cannolo Siciliano | €6,50 | El rey de Sicilia. Tubo de masa crujiente relleno al momento de ricotta de oveja dulce y virutas de chocolate. | — |
| Tarta de Queso Mascarpone | €7 | Cremosa tarta casera de queso. Elige tu topping: Amarena, Café, Amaretto o Pistacho. | Veg |
| Panna Cotta Italiana | €6 | Flan italiano clásico sin huevo. Textura sedosa con salsa de chocolate, caramelo, frutos rojos, fresa o mango. | Veg, GF |
| Babà Napoletano | €7 | Bizcocho tradicional de Nápoles, esponjoso y ligeramente emborrachado en ron. | — |
| Tortino de Chocolate Caliente | €7 | Volcán de chocolate con corazón fundido. Con nata y topping de Nutella. Se sirve caliente. | Veg |
| Helado de Vainilla (2 Bolas) | €6 | Con guarnición de nata y Nutella. | Veg, GF |
| Sorbete de Limón o Pistacho | €5 | Cremoso sorbete de limones típico del sur de Italia. Refrescante y digestivo. | Vegan, GF |
| Sgroppino di Limone | €7 | Sorbete de limón batido con Prosecco Italiano extra dry o variante con Vodka. El final perfecto para una cena copiosa. | — |
| Postre de Temporada o Especial | €8 | Postres caseros típicos de una temporada o un lugar de Italia. Preguntar. | — |

#### Bebidas
Bebidas use sub-tabs: **Refrescos · Spritz · Licores · Café · Cervezas · Vinos · Grappas**

**Refrescos**

| Item | Precio |
|---|---|
| Coca-Cola, Fanta, Sprite, Nestea, Schweppes | €2,80 |
| Aquarius | €3,20 |
| Sangría | €8,00 |
| Agua mineral 50cl | €2,80 |
| Agua mineral 1L | €3,80 |
| Agua con gas 50cl | €3,00 |
| Zumos de fruta | €2,30 |

**Licores**

| Item | Precio |
|---|---|
| Ron · Ginebra · Whisky · Vodka | €5 / €7 con refresco |
| Cognac / Brandy | €6 |
| Negroni | €7 |
| Digestivos | €5 |
| Limoncello Casero | €6 |
| Sgroppino Prosecco / Vodka | €6 |
| Campari · Martini | €5 |

**Café**

| Item | Precio |
|---|---|
| Pequeño | €1,60 |
| Grande | €1,90 |
| Tés | €2,00 |
| Café Irlandés | €6,00 |
| Espresso | €1,60 |
| Espresso Doble | €3,00 |
| Americano | €1,80 |
| Cappuccino | €1,90 |
| Caffè Affogato alla Vanilla *(Espresso sobre helado de vainilla)* | €4,30 |
| Caffè Nutella *(Espresso con crema de Nutella)* | €4,30 |
| Caffè Corretto *(Espresso con grappa o licor)* | €4,30 |

**Vinos** — featured by-the-glass cards on top, then bottle list

*By the glass:*

| Vino | Notas | Precio |
|---|---|---|
| Tinto de la Casa | Gusto redondo · todo tipo de platos | €4,50 copa |
| Tinto Reserva | Ideal para carnes y lasañas | €5,50 copa |
| Blanco de la Casa | Fresco y ligero | €4,50 copa |
| Blanco Reserva | Acidez equilibrada · notas frutales | €5,50 copa |
| Rosado de la Casa | Mediterráneo · refrescante | €4,50 copa |
| Rosado Blush | Pinot Nero · seco y redondo | €5,50 copa |

*Bottles:*

| Vino | Precio |
|---|---|
| Aglianico | €32 |
| Taurasi Reserva | €55 |
| Barolo Reserva | €60 |
| Frappato | €40 |
| Valpolicella Ripasso Reserva | €35 |
| Amarone di Valpolicella Reserva | €80 |
| Chianti Reserva | €32 |
| Falanghina | €30 |
| Fiano di Avellino | €30 |
| Greco di Tufo DOCG | €30 |
| Pecorino DOC | €28 |
| Pinot Grigio DOCG | €33 |
| Lambrusco di Grasparossa DOCG | €28 |
| Prosecco DOC | €28 |

**Spritz**

Single line item: *Aperol Spritz · Aperol Lemon · Campari · Ugo · Limoncello · Amaretto · Meloncello · Ron* — **€6,50**

**Cervezas**

| Cerveza | Notas | Precio |
|---|---|---|
| Baladin Nazionale | Blonde Ale italiana 100% · afrutada y especiada, notas cítricas | €4,00 |
| Baladin Sin Gluten | Amarillo intenso · espuma blanca persistente · sin gluten | €4,50 |
| Menabrea Sin Filtrar | Pale Lager · la cervecera más antigua de Italia | €4,00 |
| Menabrea 0.0 | Perfil lager premium sin alcohol | €4,00 |
| Birra Messina Cristalli di Sale | Lager sin filtrar · cristales de sal marina siciliana · 5% | €4,00 |
| Estrella Galicia 0,0 Tostada | Sin alcohol · sabor tostado | €2,80 |
| Estrella Galicia B-Lemon Radler | 60% zumo de limón · 2,2% alcohol | €3,00 |
| Alhambra Reserva 1925 | Extra lager · carácter intenso y complejo | €3,20 |
| Estrella Galicia | Estilo Lager de malta pura · vinculación con la cultura gallega | €2,80 |

**Grappas**

| Grappa | Notas | Precio |
|---|---|---|
| Amarone | Destilada del orujo de Amarone · intensa y profunda | €6 |
| 18 Lune | 18 meses de crianza · redonda y matizada | €8 |
| Berta Composita | Mezcla armoniosa de distintas uvas · suave y elegante | €10 |
| Trentina | Del Trentino · delicada y floral | €10 |
| Giare Amarone | Barricada en roble · compleja y envolvente | €15 |
| Berta Distinta | Expresión refinada de la destilería Berta · carácter único | €15 |

---

### 6.3 Sobre Nosotros

**Hero**
- Badge: "Nuestra Historia"
- H1: *Sobre Nosotros*
- Lead: *Más que un restaurante, somos una familia italiana en el corazón de Fuengirola, compartiendo la auténtica tradición culinaria de Italia desde 2015.*

**"Una Pasión que Cruzó el Mediterráneo"** (with milestone cards)
- *En 2015, nació Casa Mavi en Fuengirola con un sueño claro: traer la auténtica esencia de la cocina italiana a la Costa del Sol. No queríamos ser simplemente otro restaurante italiano más, queríamos ser un pedacito de Italia donde cada comensal pudiera sentir el calor, la tradición y el sabor de nuestra tierra natal.*
- *Desde el primer día, decidimos que no habría atajos ni compromisos. Cada ingrediente se importa cuidadosamente desde Italia: la harina para nuestra masa de pizza hasta el aceite de oliva virgen extra, pasando por los quesos DOP y los embutidos tradicionales. Porque sabemos que la verdadera cocina italiana se construye sobre la base de productos genuinos y de calidad excepcional.*
- *Nuestro horno de piedra es el corazón de nuestra cocina. En él, cada pizza se hornea a la temperatura perfecta, alcanzando esa combinación mágica de masa crujiente por fuera y suave por dentro que caracteriza a las mejores pizzerías napolitanas. Es un proceso que requiere maestría, paciencia y, sobre todo, amor por lo que hacemos.*
- Milestone cards: **2015** Año de fundación · **2017–2025** Certificado de Excelencia · **100%** Ingredientes italianos importados directamente desde Italia

**"Lo Que Nos Define"** — four values
- Subhead: *Estos son los pilares sobre los que construimos cada día nuestra experiencia culinaria*
- **Autenticidad:** *No imitamos la cocina italiana, la vivimos. Cada receta sigue la tradición familiar transmitida de generación en generación, respetando los métodos y sabores originales de Italia.*
- **Calidad Premium:** *Importamos nuestros ingredientes directamente desde Italia. Desde quesos DOP hasta aceite de oliva virgen extra, seleccionamos solo lo mejor para garantizar el sabor auténtico en cada bocado.*
- **Trato Familiar:** *En Casa Mavi no tenemos clientes, tenemos familia. Nos gusta conocer a cada persona que nos visita y hacer que se sienta como en casa, con la calidez y hospitalidad italiana.*
- **Pasión:** *Cada pizza que sale del horno, cada plato de pasta que servimos, lleva el amor y dedicación de un equipo que vive por y para la cocina italiana. Es nuestro arte y nuestra vida.*

**"El Corazón de Casa Mavi"** — team narrative
- *Detrás de cada plato que sale de nuestra cocina hay un equipo dedicado y apasionado que vive y respira la cocina italiana. No somos simplemente empleados trabajando juntos; somos una familia unida por el amor a nuestra tierra y a nuestra gastronomía.*
- *Nuestros pizzeros y cocineros traen consigo años de experiencia y las recetas tradicionales que han sido parte de sus familias durante generaciones. Cada masa se amasa con cuidado, cada salsa se prepara siguiendo métodos artesanales, y cada plato se presenta con el orgullo de quien sabe que está compartiendo algo especial.*
- *En el salón, nuestro equipo de atención al cliente no solo toma pedidos, sino que comparte historias, recomienda platos según los gustos de cada comensal y se asegura de que cada visita sea memorable. Conocemos a nuestros clientes habituales por su nombre y recordamos sus platos favoritos, porque para nosotros, eso es lo que significa la verdadera hospitalidad italiana.*
- *Trabajamos con una filosofía simple pero profunda: tratamos a cada cliente como si fuera un invitado en nuestra propia casa. Esa calidez, ese trato cercano y familiar que nos caracteriza no es una estrategia de negocio, es simplemente nuestra forma de ser. Es la manera italiana de hacer las cosas.*
- Pull quote: *"En Casa Mavi, cada miembro del equipo aporta su toque personal, su experiencia y su corazón. Juntos, creamos más que comida: creamos momentos, recuerdos y la sensación de estar en Italia, aunque estemos en el corazón de Fuengirola."*
- Stats: **10+** años de experiencia · **100%** equipo formado en tradición italiana · **❤** pasión en cada plato

**"Más Que un Restaurante, Una Experiencia"**
- *Cuando entras en Casa Mavi, no solo vienes a comer, vienes a vivir un pedacito de Italia. El aroma del pan recién horneado, el sonido de la masa siendo trabajada, la calidez de nuestro saludo… todo está diseñado para transportarte al corazón del Mediterráneo.*
- *Nuestro horno de piedra es más que una herramienta de cocina; es el alma de nuestro restaurante. Alcanza la temperatura perfecta para que cada pizza salga con esa corteza crujiente y dorada por fuera, y suave y esponjosa por dentro. Es el mismo método que se ha usado en Italia durante generaciones, y nosotros lo honramos cada día.*
- *Nuestra pasta fresca importada directamente desde Italia marca la diferencia en cada plato. No es simplemente pasta; es el resultado de maestros artesanos que siguen técnicas tradicionales, usando trigo de la más alta calidad. Cuando pruebas nuestros ravioli, tagliatelle o ñoquis, estás probando siglos de tradición italiana.*
- *Desde los quesos DOP (Denominación de Origen Protegida) como nuestra burrata, mozzarella de búfala y gorgonzola, hasta nuestro aceite de oliva virgen extra y nuestros embutidos tradicionales, cada ingrediente cuenta una historia. Es la historia de productores italianos que, como nosotros, se niegan a comprometer la calidad.*
- Feature cards: **Horno de Piedra** · **100% Ingredientes Italianos** · **Recetas Tradicionales** · **Certificado de Excelencia (TripAdvisor 2017–2025)**

**Final CTA band**
- H2: *Ven a Vivir la Auténtica Experiencia Italiana*
- *Te invitamos a ser parte de nuestra familia. Cada mesa, cada plato, cada sonrisa es una oportunidad para compartir nuestra pasión por la cocina italiana contigo.*
- CTAs: Reservar Mesa · Ver Bodega · Reservar
- Pull quote: *"En Casa Mavi, no solo cocinamos comida italiana. Compartimos nuestra alma, nuestra historia y nuestro amor por Italia en cada plato que servimos."* — el equipo de Casa Mavi

---

### 6.4 Reservas

**Hero**
- Badge: "Reserva tu Mesa"
- H1: *Reserva Tu Experiencia Italiana*
- Lead: *Asegura tu mesa en Casa Mavi y prepárate para disfrutar de la auténtica cocina italiana en un ambiente familiar y acogedor.*

**Reservation form** — fields:
- Nombre completo *
- Email *
- Teléfono * (with country prefix selector, default +34)
- Fecha *
- Hora * (dropdown — show available times based on date selected)
- Número de personas *
- Preferencia de zona (optional, dropdown)
- Comentarios o peticiones especiales (textarea, e.g. "Alergias, preferencias de mesa, ocasión especial…")
- Privacy consent checkbox: *He leído y acepto la Política de Privacidad y autorizo el tratamiento de mis datos para la gestión de esta reserva.*
- Primary submit: "Enviar Reserva"
- Alt CTA: "Reservar por WhatsApp"
- Confirmation note: *Recibirás una confirmación por email en breve.*

**"Información Importante" sidebar:**
- ✓ **Confirmación:** Te confirmaremos tu reserva en un plazo máximo de 1 hora.
- ⏱ **Puntualidad:** Ofrecemos 15 minutos de cortesía para tu llegada. Pasado ese tiempo, la reserva se cancelará automáticamente.
- 📅 **Anticipación:** Recomendamos reservar con 24h de antelación, especialmente fines de semana.
- 👥 **Grupos grandes:** Para más de 8 personas, por favor llámanos directamente.
- ❌ **Cancelaciones:** Si no puedes asistir, cancela tu reserva usando el ID recibido o tu email.
- ☀ **Domingos:** Permanecemos cerrados los domingos.

**"Cancelar Mi Reserva" panel:**
- Lead: *¿Necesitas cancelar tu reserva? Introduce el ID de reserva que recibiste en tu correo electrónico de confirmación.*
- Fields: ID de Reserva, Email de Confirmación
- Submit: "Cancelar Reserva"
- Note: *Solo podrás cancelar tu reserva si el email coincide con el registrado. Recibirás una confirmación por correo electrónico.*

**Hours card** (same Trattoria + Pizzería structure as homepage)

**WhatsApp direct reservation card:** "¿Prefieres Reservar Directamente?" with green WhatsApp CTA `+34 666 69 96 35`.

**"¿Por Qué Reservar en Casa Mavi?"** — four-card row:
- Horno de Piedra · Ingredientes Italianos · Ambiente Familiar · Certificado de Excelencia

**Closing band:** *Tu Mesa Te Está Esperando — No pierdas la oportunidad de disfrutar de la auténtica cocina italiana. Reserva ahora y vive la experiencia Casa Mavi.*

**Privacy policy** lives below the form (full RGPD content — copy verbatim from current site if Tyler has it; the headings are: 1. Responsable del Tratamiento, 2. Finalidad, 3. Base de Legitimación, 4. Categorías de Datos, 5. Destinatarios, 6. Conservación, 7. Derechos del Usuario).

---

### 6.5 Contacto

**Hero**
- Badge: "Estamos aquí para ti"
- H1: *Contáctanos*
- Lead: *Estamos encantados de atenderte. Reserva tu mesa, haz consultas sobre nuestra bodega o simplemente salúdanos. Te responderemos lo antes posible.*

**Contact info column** (cards):
- **WhatsApp** — *La forma más rápida de reservar tu mesa* — `+34 666 69 96 35` — CTA: "Enviar mensaje"
- **Email** — *Envíanos un correo electrónico* — `reservation@casamavi.es`
- **Teléfono** — *Llámanos directamente* — `+34 666 69 96 35`
- **Dirección** — *Visítanos en:* Av. de los Boliches, 106, 29640 Fuengirola, Málaga
- **Síguenos en Redes Sociales** — Facebook · Instagram · TripAdvisor · TikTok

**Map column:** Embedded Google Maps pinned to Av. de los Boliches, 106 + hours card + reservation suggestion + TripAdvisor certificate badge.

**Closing band:** *¿Listo para disfrutar de auténtica cocina italiana? Reserva tu mesa ahora por WhatsApp y déjate llevar por los sabores tradicionales de Italia en el corazón de Fuengirola.* — CTAs: "Reservar por WhatsApp" + "Formulario de Reserva"

---

### 6.6 Testimonios y Galería

Content not fully captured in screenshots — Tyler should pull testimonial quotes and photos directly from the live site or Casa Mavi's TripAdvisor reviews. Suggest layout:
- Hero with TripAdvisor 2017–2025 badge
- Curated reviews grid (4–8 reviews with rating, name, date, quote)
- Photo gallery (masonry or grid) of dishes, interior, team
- CTA to leave a review on TripAdvisor + reservation CTA

---

## 7. Design Direction (the actual redesign)

The current site is functional but reads as **template-built**: heavy gradient cards, rainbow icon badges, generic "WhatsApp green" CTA buttons, stacked emoji headers, Bootstrap-feel rounded corners. It's not bad — it just doesn't feel like a 10-year-old family trattoria importing burrata from Campania. It feels like any restaurant on Wix.

**The redesign should feel like an editorial Italian restaurant — confident, warm, food-photography-led, with serious typographic restraint.** Reference points to study before designing (look these up — don't copy):

- **Via Carota** (NYC) — vianyc.com — handwritten warmth, cream + ink palette
- **Don Angie** (NYC) — donangie.com — confident menu-as-art typography
- **Lilia** (NYC) — lilianewyork.com — minimal, photography-forward
- **Estela** — estelanyc.com — restrained editorial layout

**Aesthetic commitment for Casa Mavi:**

- **Editorial trattoria** — not minimalist, not maximalist. *Refined warmth.*
- Cream paper background, deep terracotta + wine accents, espresso typography. **Drop the rainbow gradient cards entirely.**
- **Typography:** pair a distinctive Italian-feel display serif (try **Cormorant Garamond**, **Fraunces**, or **DM Serif Display**) with a quiet humanist sans for body (**Inter Tight**, **DM Sans**, or **Söhne** alternatives). Don't use Inter or Roboto plain — pick something with character. Italic display serif for menu dish names is a great move.
- **Layout:** generous left/right margins, asymmetric hero (text left, large hero photo right OR full-bleed photo with text overlay bottom-left), menu rendered as a *real menu* (price-leader dots, Roman numeral section markers, hand-drawn dividers — not bordered cards in a grid).
- **Photography rule:** every food photo gets room to breathe. One hero photo per section minimum, full-bleed where possible. The current cropped-square photos in cards are killing the food. If a photo is hero-worthy, treat it as hero.
- **Motion:** very restrained. Subtle fade-up on scroll. One signature animated moment on the hero (a slow ken-burns on the mural, or a soft parallax on the pizza photo). No bouncing badges, no carousel auto-rotate, no scroll-triggered confetti.
- **Decorative elements:** a custom hand-drawn divider (small olive branch or scribbled line), small-caps section labels in burnt orange, italic Italian phrases as section pull-quotes. Use real Italian words sparingly as design accents (*"la nonna," "horno di pietra," "buon appetito"*).
- **Buttons:** filled terracotta with ivory text for primary, ghost button with thin terracotta border for secondary. Drop the "WhatsApp green" pill — make it a dark-cream button with the WhatsApp icon and "WhatsApp" in small caps. Functional, not loud.
- **Hours/reservation modules:** these can stay structured but should feel like a printed card — paper texture background, single thin border, well-set type — not a colored card with emoji.

**What to keep from current:**
- The brand colors (cream, terracotta, wine, espresso, mustard) — they're already correct, just deployed badly
- The TripAdvisor 2017–2025 badge (it's earned credibility)
- All photography (reuse, but display larger and better)
- The full content (don't rewrite copy — it's good)
- The 10-language selector
- The dietary filter pills on the menu

**What to drop:**
- Rainbow gradient backgrounds on CTA bands
- Emoji-led section headers (🍕 ❤ 📍 etc. — replace with hand-drawn icons or refined SVG glyphs, or just typography)
- Generic "card with shadow" everywhere — use only when warranted
- Brightly colored circular icon badges (terracotta, lime, blue, purple)
- The bouncing/floating sidebar action buttons

---

## 8. Tech Stack & Build Instructions for Claude Code

**Framework:** Next.js 15 (App Router) + TypeScript
**Styling:** Tailwind CSS v4 with a custom design tokens config (don't use default Tailwind colors — define `bg-paper`, `text-ink`, `bg-terracotta`, `bg-wine`, `bg-espresso`, `bg-mustard`, `bg-olive`)
**Fonts:** Use `next/font/google` for the chosen serif + sans pair. Self-host both for performance.
**Icons:** Lucide React (replace all emoji)
**Animation:** Motion (formerly Framer Motion) — use sparingly per design notes
**Forms:** React Hook Form + Zod validation
**Map:** Embed Google Maps iframe (no API key needed for basic embed)
**Deployment target:** Vercel
**i18n:** Set up `next-intl` with ES as default, scaffold the 10 locale files but only fill ES content (the rest can be filled later)
**Image optimization:** Next.js `<Image>` everywhere
**Forms backend:** Use Resend or a simple `/api/reservation` route that emails `reservation@casamavi.es` (Tyler will configure Resend API key in env vars)

**File structure to build:**
```
/app
  /(site)
    /page.tsx                 → Inicio
    /menu/page.tsx
    /sobre-nosotros/page.tsx
    /reservas/page.tsx
    /contacto/page.tsx
    /testimonios/page.tsx
  /api/reservation/route.ts
/components
  /layout (Header, Footer, LanguageSwitcher)
  /sections (Hero, ThreePillars, FeaturedDishes, ReservationBlock, etc.)
  /ui (Button, Card, MenuItem, HoursCard)
/lib
  /menu-data.ts              → all menu items as typed data
  /constants.ts              → contact info, hours, social links
/content/[locale]/           → translation JSON files
/public/assets               → logo, photos
/styles/globals.css          → design tokens, font setup
```

**Process for Claude Code:**
1. Read this brief fully. Ask clarifying questions if anything is unclear before writing code.
2. Confirm the design direction by mocking up the **Inicio hero + first section only** as a single page first. Tyler reviews. Iterate.
3. Once hero is approved, build the rest of Inicio.
4. Then Menú page (this is the highest-leverage page — it must look like a real menu, not a grid of cards).
5. Then Sobre Nosotros, Reservas, Contacto, Testimonios in that order.
6. Run `next build` and fix all errors. Run Lighthouse and aim for 95+ on performance and accessibility.

---

## 9. Assets Tyler Needs to Provide Before Build

- [ ] `/public/assets/logo.png` (saved from current site)
- [ ] Photography: reuse existing photos from the live site — point Claude Code at casamavi.es and let it pull/reference the existing dish and interior shots
- [ ] Social media URLs (Facebook, Instagram, TripAdvisor, TikTok) — get from current footer
- [ ] Any TripAdvisor reviews to feature on Testimonios page
- [ ] Resend API key (or alternative email service) for the reservation form backend

---

## 10. One-Line Prompt to Hand to Claude Code

> Read `casamavi-redesign-brief.md`. Build Section 6.1 (Inicio hero + Nuestra Esencia three-pillar) only as a first pass so I can review the aesthetic direction before you build the rest. Use the design direction in Section 7 — editorial trattoria, not template restaurant. Stack per Section 8. Ask me anything unclear before writing code.
