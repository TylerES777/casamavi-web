import { Hairline } from "@/components/ui/Hairline";
import { HOURS } from "@/lib/constants";

type ScheduleRow = { day: string; hours: string };

function ScheduleTable({ rows }: { rows: readonly ScheduleRow[] }) {
  return (
    <dl className="space-y-3">
      {rows.map((row) => (
        <div
          key={row.day}
          className="flex justify-between items-baseline gap-6 border-b border-ink/10 pb-3 last:border-b-0"
        >
          <dt className="text-eyebrow-sm text-ink/70 shrink-0">{row.day}</dt>
          <dd className="font-serif text-ink text-base md:text-[1.05rem] tracking-wide text-right">
            {row.hours}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function HoursBlock() {
  return (
    <section
      aria-labelledby="hours-heading"
      className="bg-paper relative py-24 md:py-28 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-eyebrow text-terracotta block mb-5">
            Nuestros Horarios
          </span>
          <h2
            id="hours-heading"
            className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-ink leading-[1.15] mb-6"
          >
            Te esperamos en{" "}
            <span className="italic font-light">Los Boliches</span>
          </h2>
          <Hairline tone="mustard" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Trattoria */}
          <article>
            <header className="mb-8">
              <span className="text-eyebrow-sm text-mustard block mb-2">
                I · Trattoria
              </span>
              <h3 className="font-serif text-2xl md:text-[1.65rem] text-ink italic font-light">
                Cocina · servicio en dos turnos
              </h3>
            </header>

            <div className="space-y-10">
              <div>
                <p className="text-eyebrow-sm text-ink/55 mb-4">
                  {HOURS.trattoria.winter.label}
                </p>
                <ScheduleTable rows={HOURS.trattoria.winter.rows} />
              </div>
              <div>
                <p className="text-eyebrow-sm text-ink/55 mb-4">
                  {HOURS.trattoria.summer.label}
                </p>
                <ScheduleTable rows={HOURS.trattoria.summer.rows} />
              </div>
            </div>
          </article>

          {/* Pizzería */}
          <article>
            <header className="mb-8">
              <span className="text-eyebrow-sm text-mustard block mb-2">
                II · Pizzería · Postres · Bar
              </span>
              <h3 className="font-serif text-2xl md:text-[1.65rem] text-ink italic font-light">
                Servicio continuo, todo el día
              </h3>
            </header>

            <div>
              <p className="text-eyebrow-sm text-ink/55 mb-4">
                {HOURS.pizzeria.label}
              </p>
              <ScheduleTable rows={HOURS.pizzeria.rows} />
            </div>

            <p className="mt-10 text-ink-soft text-sm leading-relaxed italic font-serif">
              Pizza, pasta o dolce a media tarde — entra cuando quieras entre
              las 13:00 y las 22:30, sin reserva.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
