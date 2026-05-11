"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cancelSchema, type CancelInput } from "@/lib/validation";

const inputBase =
  "w-full bg-paper border border-ink/15 px-4 py-3 font-serif text-ink text-base focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta/20 transition-colors";

export function CancelForm() {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CancelInput>({
    resolver: zodResolver(cancelSchema),
    defaultValues: { reservationId: "", email: "" },
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async () => {
    // Stub — when reservation backend is wired in, hit /api/reservation/cancel
    await new Promise((r) => setTimeout(r, 600));
    setDone(true);
    reset();
  });

  if (done) {
    return (
      <div className="text-center py-10">
        <CheckCircle2
          className="mx-auto text-olive mb-5"
          size={36}
          strokeWidth={1.3}
        />
        <p className="font-serif italic text-ink text-lg font-light mb-5">
          Hemos recibido tu solicitud de cancelación. Te enviaremos un email
          de confirmación en breve.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="text-eyebrow-sm text-terracotta hover:text-terracotta-deep border-b border-terracotta/40 pb-1"
        >
          Cancelar otra reserva
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="reservationId"
          className="text-eyebrow-sm text-ink/65 block mb-2.5"
        >
          ID de Reserva
        </label>
        <input
          id="reservationId"
          type="text"
          className={inputBase}
          placeholder="CM-XXXXXX"
          {...register("reservationId")}
        />
        {errors.reservationId && (
          <p className="mt-2 text-[0.78rem] text-terracotta-deep font-light">
            {errors.reservationId.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="cancel-email"
          className="text-eyebrow-sm text-ink/65 block mb-2.5"
        >
          Email de Confirmación
        </label>
        <input
          id="cancel-email"
          type="email"
          inputMode="email"
          className={inputBase}
          placeholder="tucorreo@ejemplo.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-2 text-[0.78rem] text-terracotta-deep font-light">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.78rem] tracking-[0.22em] uppercase font-medium border border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory transition-colors disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={14} className="animate-spin" />}
        Cancelar Reserva
      </button>

      <p className="text-[0.85rem] text-ink-muted italic font-serif font-light">
        Solo podrás cancelar tu reserva si el email coincide con el
        registrado. Recibirás una confirmación por correo electrónico.
      </p>
    </form>
  );
}
