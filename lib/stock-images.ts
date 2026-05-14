/**
 * Curated Unsplash stock images used as production placeholders.
 *
 * Photo IDs were verified live (HTTP 200) at the time of commit. When real
 * Casa Mavi photography is ready, swap these URLs out — the components that
 * consume them don't care where the image comes from.
 *
 * Photos are loaded via the Unsplash CDN. We pass `?w=` so the CDN serves an
 * already-sized variant; Next.js Image then performs additional optimisation
 * with the `sizes` attribute we hand it at the component level.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const STOCK = {
  // Full-bleed homepage hero — pizza in stone oven, warm firelight
  hero: unsplash("1513104890138-7c749659a591", 2400),

  // ReservationBlock background — Italian restaurant / bar mood
  reservationBackdrop: unsplash("1414235077428-338989a2e8c0", 2400),

  // About page — horno / kitchen detail
  horno: unsplash("1593504049359-74330189a345", 1400),

  // Featured dishes (homepage)
  dishes: {
    margherita: unsplash("1574071318508-1cdbab80d002", 1200),
    carbonara: unsplash("1612874742237-6526221588e3", 1200),
    lasagna: unsplash("1633436375153-d7045cb93e38", 1200),
  },

  // Gallery — used on /testimonios. Order matches GALLERY_ITEMS in constants.ts.
  gallery: [
    unsplash("1565299624946-b28f40a0ae38", 1000), // pizza
    unsplash("1517248135467-4c7edcad34c4", 1400), // restaurant interior
    unsplash("1551183053-bf91a1d81141", 1000), // pasta
    unsplash("1633504581786-316c8002b1b9", 1000), // italian dish
    unsplash("1604382354936-07c5d9983bd3", 1100), // pizza oven
    unsplash("1571877227200-a0d98ea607e9", 1000), // dessert
    unsplash("1510812431401-41d2bd2722f3", 1100), // wine glass
    unsplash("1571066811602-716837d681de", 1000), // italian food close-up
    unsplash("1414235077428-338989a2e8c0", 1400), // restaurant table
  ],
} as const;
