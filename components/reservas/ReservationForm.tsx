"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { z } from "zod";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { getTimeBlocks, todayIsoMadrid } from "@/lib/reservation-slots";
import { reservationSchema } from "@/lib/validation";

type FormInput = z.input<typeof reservationSchema>;
type FormOutput = z.output<typeof reservationSchema>;

const ZONES = [
  { value: "", label: "Sin preferencia" },
  { value: "salon", label: "Salón principal" },
  { value: "terraza", label: "Terraza" },
  { value: "junto-horno", label: "Junto al horno" },
];

const PARTY_SIZES = Array.from({ length: 8 }, (_, i) => i + 1);

type SubmitState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; reservationId: string }
  | { kind: "error"; message: string };

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-eyebrow-sm text-ink/65 block mb-2.5"
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-terracotta ml-1">
          ·
        </span>
      )}
    </label>
  );
}

const inputBase =
  "w-full bg-paper border border-ink/15 px-4 py-3 font-serif text-ink text-base focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta/20 transition-colors";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-[0.78rem] text-terracotta-deep font-light">
      {message}
    </p>
  );
}

export function ReservationForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });
  const today = todayIsoMadrid();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "+34 ",
      fecha: "",
      hora: "",
      personas: 2,
      zona: "",
      comentarios: "",
      acepto_privacidad: false as unknown as true,
    },
    mode: "onTouched",
  });

  const selectedDate = watch("fecha");
  const timeBlocks = selectedDate ? getTimeBlocks(selectedDate) : [];

  const onSubmit = handleSubmit(async (data) => {
    setSubmitState({ kind: "loading" });
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok || !body.ok) {
        throw new Error(body?.error ?? "Error al enviar la reserva.");
      }
      setSubmitState({
        kind: "success",
        reservationId: body.reservationId as string,
      });
      reset();
    } catch (err) {
      setSubmitState({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "No hemos podido enviar tu reserva. Inténtalo de nuevo.",
      });
    }
  });

  if (submitState.kind === "success") {
    return (
      <div className="bg-paper border border-olive/35 px-8 py-12 text-center">
        <CheckCircle2
          className="mx-auto text-olive mb-6"
          size={42}
          strokeWidth={1.3}
        />
        <span className="text-eyebrow text-olive block mb-4">
          Reserva enviada
        </span>
        <h3 className="font-serif text-ink text-3xl md:text-[2.2rem] leading-tight italic font-light mb-5">
          ¡Gracias! Te confirmamos en breve.
        </h3>
        <p className="text-ink-soft leading-relaxed max-w-md mx-auto mb-7 font-light">
          Tu solicitud ha sido recibida con el ID{" "}
          <span className="font-serif italic text-terracotta">
            {submitState.reservationId}
          </span>
          . Te enviaremos la confirmación por email en un plazo máximo de 1
          hora.
        </p>
        <Button
          onClick={() => setSubmitState({ kind: "idle" })}
          variant="secondary"
        >
          Hacer otra reserva
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-paper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        {/* Nombre */}
        <div className="md:col-span-2">
          <FieldLabel htmlFor="nombre" required>
            Nombre completo
          </FieldLabel>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.nombre}
            className={inputBase}
            placeholder="Tu nombre"
            {...register("nombre")}
          />
          <FieldError message={errors.nombre?.message} />
        </div>

        {/* Email */}
        <div>
          <FieldLabel htmlFor="email" required>
            Email
          </FieldLabel>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            className={inputBase}
            placeholder="tucorreo@ejemplo.com"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        {/* Teléfono */}
        <div>
          <FieldLabel htmlFor="telefono" required>
            Teléfono
          </FieldLabel>
          <input
            id="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.telefono}
            className={inputBase}
            placeholder="+34 666 69 96 35"
            {...register("telefono")}
          />
          <FieldError message={errors.telefono?.message} />
        </div>

        {/* Fecha */}
        <div>
          <FieldLabel htmlFor="fecha" required>
            Fecha
          </FieldLabel>
          <input
            id="fecha"
            type="date"
            min={today}
            aria-invalid={!!errors.fecha}
            className={inputBase}
            {...register("fecha")}
          />
          <FieldError message={errors.fecha?.message} />
        </div>

        {/* Hora */}
        <div>
          <FieldLabel htmlFor="hora" required>
            Hora
          </FieldLabel>
          <select
            id="hora"
            aria-invalid={!!errors.hora}
            className={`${inputBase} appearance-none cursor-pointer pr-10`}
            disabled={!selectedDate}
            {...register("hora")}
          >
            <option value="">
              {selectedDate ? "Elige una hora" : "Selecciona la fecha primero"}
            </option>
            {timeBlocks.length === 0 && selectedDate && (
              <option value="" disabled>
                Cerrado este día
              </option>
            )}
            {timeBlocks.map((block) => (
              <optgroup key={block.label} label={block.label}>
                {block.slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <FieldError message={errors.hora?.message} />
        </div>

        {/* Personas */}
        <div>
          <FieldLabel htmlFor="personas" required>
            Comensales
          </FieldLabel>
          <select
            id="personas"
            aria-invalid={!!errors.personas}
            className={`${inputBase} appearance-none cursor-pointer pr-10`}
            {...register("personas")}
          >
            {PARTY_SIZES.map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "persona" : "personas"}
              </option>
            ))}
          </select>
          <p className="mt-2 text-[0.78rem] text-ink-muted italic font-serif font-light">
            Para más de 8 personas, por favor llámanos directamente al{" "}
            {CONTACT.phone}.
          </p>
          <FieldError message={errors.personas?.message} />
        </div>

        {/* Zona */}
        <div>
          <FieldLabel htmlFor="zona">Preferencia de zona</FieldLabel>
          <select
            id="zona"
            className={`${inputBase} appearance-none cursor-pointer pr-10`}
            {...register("zona")}
          >
            {ZONES.map((z) => (
              <option key={z.value || "none"} value={z.value}>
                {z.label}
              </option>
            ))}
          </select>
        </div>

        {/* Comentarios */}
        <div className="md:col-span-2">
          <FieldLabel htmlFor="comentarios">
            Comentarios o peticiones especiales
          </FieldLabel>
          <textarea
            id="comentarios"
            rows={4}
            aria-invalid={!!errors.comentarios}
            className={`${inputBase} resize-none`}
            placeholder="Alergias, preferencias de mesa, ocasión especial…"
            {...register("comentarios")}
          />
          <FieldError message={errors.comentarios?.message} />
        </div>

        {/* Privacy consent */}
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              aria-invalid={!!errors.acepto_privacidad}
              className="mt-1 w-4 h-4 accent-terracotta cursor-pointer"
              {...register("acepto_privacidad")}
            />
            <span className="text-[0.92rem] text-ink-soft leading-relaxed font-light group-hover:text-ink transition-colors">
              He leído y acepto la{" "}
              <a
                href="#politica"
                className="text-terracotta hover:text-terracotta-deep border-b border-terracotta/40"
              >
                Política de Privacidad
              </a>{" "}
              y autorizo el tratamiento de mis datos para la gestión de esta
              reserva.
            </span>
          </label>
          <FieldError message={errors.acepto_privacidad?.message as string} />
        </div>
      </div>

      {/* Submit */}
      {submitState.kind === "error" && (
        <p className="mt-8 px-4 py-3 border border-terracotta/30 bg-terracotta/5 text-terracotta-deep font-light">
          {submitState.message}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting || submitState.kind === "loading"}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.78rem] tracking-[0.22em] uppercase font-medium bg-terracotta text-ivory hover:bg-terracotta-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {(isSubmitting || submitState.kind === "loading") && (
            <Loader2 size={14} className="animate-spin" />
          )}
          Enviar Reserva
        </button>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-7 py-3.5 text-[0.78rem] tracking-[0.22em] uppercase font-medium border border-ink/25 text-ink hover:border-terracotta hover:text-terracotta transition-colors"
        >
          Reservar por WhatsApp
        </a>
      </div>

      <p className="mt-7 font-serif italic text-ink-muted text-sm leading-relaxed font-light">
        Recibirás una confirmación por email en breve.
      </p>
    </form>
  );
}
