import { Flame, Wheat, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Sobre Nosotros · Casa Mavi",
  description:
    "Casa Mavi nació en 2015 en Fuengirola con un sueño: traer la auténtica cocina italiana a la Costa del Sol. Una familia italiana en el corazón de Los Boliches.",
};

const MILESTONES = [
  { numeral: "I", value: "2015", label: "Año de fundación" },
  { numeral: "II", value: "2017–2025", label: "Certificado de Excelencia" },
  {
    numeral: "III",
    value: "100%",
    label: "Ingredientes importados desde Italia",
  },
];

const VALUES = [
  {
    numeral: "I",
    title: "Autenticidad",
    body: "No imitamos la cocina italiana, la vivimos. Cada receta sigue la tradición familiar transmitida de generación en generación, respetando los métodos y sabores originales de Italia.",
  },
  {
    numeral: "II",
    title: "Calidad Premium",
    body: "Importamos nuestros ingredientes directamente desde Italia. Desde quesos DOP hasta aceite de oliva virgen extra, seleccionamos solo lo mejor para garantizar el sabor auténtico en cada bocado.",
  },
  {
    numeral: "III",
    title: "Trato Familiar",
    body: "En Casa Mavi no tenemos clientes, tenemos familia. Nos gusta conocer a cada persona que nos visita y hacer que se sienta como en casa, con la calidez y hospitalidad italiana.",
  },
  {
    numeral: "IV",
    title: "Pasión",
    body: "Cada pizza que sale del horno, cada plato de pasta que servimos, lleva el amor y dedicación de un equipo que vive por y para la cocina italiana. Es nuestro arte y nuestra vida.",
  },
];

const TEAM_STATS = [
  { numeral: "I", value: "10+", label: ["Años de", "experiencia"] },
  {
    numeral: "II",
    value: "100%",
    label: ["Equipo formado en", "tradición italiana"],
  },
  { numeral: "III", value: "❤", label: ["Pasión en", "cada plato"] },
];

const FEATURES = [
  {
    icon: Flame,
    title: "Horno de Piedra",
    body: "Pizzas napolitanas a 450°C. Corteza ligera, miga aireada, sabor de Nápoles.",
  },
  {
    icon: Wheat,
    title: "100% Ingredientes Italianos",
    body: "Quesos DOP, aceite virgen extra, embutidos y harinas importados directamente desde Italia.",
  },
  {
    icon: Heart,
    title: "Recetas Tradicionales",
    body: "Cada receta es la de la nonna. Sin atajos, sin sustitutos. Tradición intacta.",
  },
  {
    icon: Award,
    title: "Certificado de Excelencia",
    body: "TripAdvisor 2017–2025. 9 años consecutivos reconocidos por nuestros comensales.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-eyebrow text-terracotta block mb-6">
            Nuestra Historia
          </span>
          <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-tight mb-7">
            Sobre <span className="italic font-light">Nosotros</span>
          </h1>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-9">
            Más que un restaurante, somos una familia italiana en el corazón
            de Fuengirola, compartiendo la auténtica tradición culinaria de
            Italia desde 2015.
          </p>
          <Hairline tone="mustard" width={120} />
        </div>
      </section>

      {/* Una Pasión que Cruzó el Mediterráneo */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <PlaceholderImage
              alt="El equipo de Casa Mavi en el horno de piedra"
              aspect="4/5"
              tone="ember"
              label="Foto del equipo · placeholder"
            />
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="text-eyebrow text-mustard block mb-5">
              2015 — el origen
            </span>
            <h2 className="font-serif text-ink text-4xl md:text-[3rem] lg:text-[3.4rem] leading-[1.05] tracking-tight mb-10">
              Una pasión que cruzó el{" "}
              <span className="italic font-light">Mediterráneo</span>
            </h2>

            <div className="space-y-7 text-ink-soft text-[1.02rem] md:text-[1.08rem] leading-[1.75] font-light max-w-2xl">
              <p>
                En 2015, nació Casa Mavi en Fuengirola con un sueño claro:
                traer la auténtica esencia de la cocina italiana a la Costa del
                Sol. No queríamos ser simplemente otro restaurante italiano
                más, queríamos ser{" "}
                <span className="italic text-ink">un pedacito de Italia</span>{" "}
                donde cada comensal pudiera sentir el calor, la tradición y el
                sabor de nuestra tierra natal.
              </p>
              <p>
                Desde el primer día, decidimos que no habría atajos ni
                compromisos. Cada ingrediente se importa cuidadosamente desde
                Italia: la harina para nuestra masa de pizza hasta el aceite
                de oliva virgen extra, pasando por los quesos DOP y los
                embutidos tradicionales. Porque sabemos que la verdadera
                cocina italiana se construye sobre la base de productos
                genuinos y de calidad excepcional.
              </p>
              <p>
                Nuestro horno de piedra es el corazón de nuestra cocina. En
                él, cada pizza se hornea a la temperatura perfecta, alcanzando
                esa combinación mágica de masa crujiente por fuera y suave por
                dentro que caracteriza a las mejores pizzerías napolitanas. Es
                un proceso que requiere maestría, paciencia y, sobre todo,
                amor por lo que hacemos.
              </p>
            </div>

            {/* Milestone strip */}
            <div className="mt-14 pt-12 border-t border-ink/10 grid grid-cols-1 sm:grid-cols-3 gap-y-9 sm:gap-y-0 sm:gap-x-8">
              {MILESTONES.map((m, idx) => (
                <div
                  key={m.numeral}
                  className={`relative ${
                    idx > 0
                      ? "sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-ink/12 sm:pl-8"
                      : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="block text-eyebrow-sm text-mustard/70 mb-3"
                  >
                    {m.numeral}
                  </span>
                  <span className="block font-serif italic text-terracotta text-[2.4rem] md:text-[2.6rem] leading-none font-light mb-3">
                    {m.value}
                  </span>
                  <span className="text-eyebrow-sm text-ink/65 leading-snug block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lo Que Nos Define */}
      <section className="bg-paper-warm/60 border-y border-ink/10 py-28 md:py-36 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-eyebrow text-terracotta block mb-6">
              Lo Que Nos Define
            </span>
            <h2 className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-7">
              Cuatro pilares,{" "}
              <span className="italic font-light">una sola mesa</span>
            </h2>
            <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-9">
              Estos son los pilares sobre los que construimos cada día nuestra
              experiencia culinaria.
            </p>
            <Hairline tone="mustard" width={120} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-x-10 lg:gap-x-12">
            {VALUES.map((value, idx) => (
              <article
                key={value.numeral}
                className={`relative px-1 md:px-2 ${
                  idx > 0
                    ? "md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-6 md:before:bottom-6 md:before:w-px md:before:bg-ink/12 md:pl-8 lg:pl-10"
                    : ""
                } ${idx === 2 ? "md:before:hidden lg:before:block" : ""}`}
              >
                <div
                  aria-hidden="true"
                  className="font-serif italic text-mustard text-[3rem] leading-none mb-6 font-light"
                >
                  {value.numeral}
                </div>
                <h3 className="font-serif text-ink text-[1.65rem] tracking-tight mb-4 italic font-light">
                  {value.title}
                </h3>
                <p className="text-ink-soft text-[0.95rem] leading-[1.7] font-light">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* El Corazón de Casa Mavi — team narrative */}
      <section className="py-28 md:py-36 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-eyebrow text-terracotta block mb-6">
              El Equipo
            </span>
            <h2 className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-8">
              El corazón de{" "}
              <span className="italic font-light">Casa Mavi</span>
            </h2>
            <Hairline tone="mustard" width={120} />
          </div>

          <div className="max-w-3xl mx-auto space-y-7 text-ink-soft text-[1.02rem] md:text-[1.08rem] leading-[1.8] font-light">
            <p>
              Detrás de cada plato que sale de nuestra cocina hay un equipo
              dedicado y apasionado que vive y respira la cocina italiana. No
              somos simplemente empleados trabajando juntos; somos una familia
              unida por el amor a nuestra tierra y a nuestra gastronomía.
            </p>
            <p>
              Nuestros pizzeros y cocineros traen consigo años de experiencia
              y las recetas tradicionales que han sido parte de sus familias
              durante generaciones. Cada masa se amasa con cuidado, cada salsa
              se prepara siguiendo métodos artesanales, y cada plato se
              presenta con el orgullo de quien sabe que está compartiendo algo
              especial.
            </p>
            <p>
              En el salón, nuestro equipo de atención al cliente no solo toma
              pedidos, sino que comparte historias, recomienda platos según
              los gustos de cada comensal y se asegura de que cada visita sea
              memorable. Conocemos a nuestros clientes habituales por su
              nombre y recordamos sus platos favoritos, porque para nosotros,
              eso es lo que significa la verdadera hospitalidad italiana.
            </p>
            <p>
              Trabajamos con una filosofía simple pero profunda:{" "}
              <span className="italic text-ink">
                tratamos a cada cliente como si fuera un invitado en nuestra
                propia casa
              </span>
              . Esa calidez, ese trato cercano y familiar que nos caracteriza
              no es una estrategia de negocio, es simplemente nuestra forma
              de ser. Es la manera italiana de hacer las cosas.
            </p>
          </div>

          {/* Pull quote */}
          <figure className="max-w-3xl mx-auto mt-20 md:mt-24 text-center">
            <Hairline tone="mustard" width={88} className="mb-7" />
            <blockquote className="font-serif italic text-ink text-2xl md:text-[1.85rem] lg:text-[2.05rem] leading-[1.4] font-light">
              “En Casa Mavi, cada miembro del equipo aporta su toque personal,
              su experiencia y su corazón. Juntos, creamos más que comida:
              creamos momentos, recuerdos y la sensación de estar en Italia,
              aunque estemos en el corazón de Fuengirola.”
            </blockquote>
          </figure>

          {/* Team stats */}
          <div className="max-w-4xl mx-auto mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 sm:gap-x-8 lg:gap-x-12">
            {TEAM_STATS.map((s, idx) => (
              <div
                key={s.numeral}
                className={`text-center sm:text-left relative ${
                  idx > 0
                    ? "sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-ink/12 sm:pl-8 lg:pl-12"
                    : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="block text-eyebrow-sm text-mustard/70 mb-3"
                >
                  {s.numeral}
                </span>
                <span className="block font-serif italic text-terracotta text-[2.6rem] md:text-[3rem] leading-none font-light mb-3">
                  {s.value}
                </span>
                <span className="text-eyebrow-sm text-ink/65 leading-[1.5] block">
                  {s.label[0]}
                  <br />
                  {s.label[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Más Que un Restaurante — feature cards over photo */}
      <section className="bg-paper-warm/60 border-y border-ink/10 py-28 md:py-36 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="text-eyebrow text-terracotta block mb-6">
              La Experiencia
            </span>
            <h2 className="font-serif text-ink text-4xl md:text-[3rem] lg:text-[3.4rem] leading-[1.05] tracking-tight mb-10">
              Más que un restaurante,{" "}
              <span className="italic font-light">una experiencia</span>
            </h2>

            <div className="space-y-7 text-ink-soft text-[1rem] md:text-[1.05rem] leading-[1.75] font-light max-w-2xl">
              <p>
                Cuando entras en Casa Mavi, no solo vienes a comer, vienes a
                vivir un pedacito de Italia. El aroma del pan recién horneado,
                el sonido de la masa siendo trabajada, la calidez de nuestro
                saludo… todo está diseñado para transportarte al corazón del
                Mediterráneo.
              </p>
              <p>
                Nuestro horno de piedra es más que una herramienta de cocina;
                es el alma de nuestro restaurante. Alcanza la temperatura
                perfecta para que cada pizza salga con esa corteza crujiente y
                dorada por fuera, y suave y esponjosa por dentro.
              </p>
              <p>
                Desde los quesos DOP — burrata, mozzarella de búfala,
                gorgonzola — hasta nuestro aceite de oliva virgen extra y los
                embutidos tradicionales, cada ingrediente cuenta una historia
                de productores italianos que, como nosotros, se niegan a
                comprometer la calidad.
              </p>
            </div>
          </div>

          {/* Feature grid */}
          <div className="lg:col-span-5">
            <ul className="space-y-7">
              {FEATURES.map((f) => (
                <li
                  key={f.title}
                  className="flex gap-5 pb-7 border-b border-ink/10 last:border-0 last:pb-0"
                >
                  <span className="shrink-0 w-12 h-12 inline-flex items-center justify-center rounded-full border border-ink/15 text-terracotta">
                    <f.icon size={18} strokeWidth={1.4} />
                  </span>
                  <div>
                    <h3 className="font-serif text-ink text-[1.25rem] tracking-tight mb-2">
                      {f.title}
                    </h3>
                    <p className="text-ink-soft text-[0.95rem] leading-[1.7] font-light">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="relative bg-espresso-deep overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 25% 30%, rgba(139, 31, 42, 0.40), transparent 65%),
              radial-gradient(ellipse 60% 50% at 80% 75%, rgba(212, 162, 76, 0.18), transparent 65%),
              linear-gradient(180deg, #2a1810 0%, #1a0a0c 50%, #1f1208 100%)
            `,
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36 text-center">
          <Hairline tone="mustard" width={88} className="mb-7" />
          <span className="text-eyebrow text-mustard block mb-6">
            Una invitación
          </span>
          <h2 className="font-serif text-ivory text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight mb-7">
            Ven a vivir la auténtica{" "}
            <span className="italic font-light">experiencia italiana</span>
          </h2>
          <p className="text-ivory/75 text-base md:text-lg leading-[1.7] font-light max-w-xl mx-auto mb-10">
            Te invitamos a ser parte de nuestra familia. Cada mesa, cada
            plato, cada sonrisa es una oportunidad para compartir nuestra
            pasión por la cocina italiana contigo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button href="/reservas" variant="primary">
              Reservar Mesa
            </Button>
            <Button href="/menu" variant="ghost-light">
              Ver la Carta
            </Button>
          </div>

          <figure className="max-w-2xl mx-auto pt-10 border-t border-ivory/15">
            <blockquote className="font-serif italic text-ivory/90 text-xl md:text-[1.5rem] leading-[1.45] font-light">
              “En Casa Mavi, no solo cocinamos comida italiana. Compartimos
              nuestra alma, nuestra historia y nuestro amor por Italia en cada
              plato que servimos.”
            </blockquote>
            <figcaption className="text-eyebrow-sm text-mustard/80 mt-5">
              — el equipo de Casa Mavi
            </figcaption>
          </figure>

          <p className="mt-12 text-eyebrow-sm text-ivory/55">
            ¿Prefieres llamar?{" "}
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="text-mustard hover:text-ivory border-b border-mustard/40"
            >
              {CONTACT.phone}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
