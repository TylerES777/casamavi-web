import { z } from "zod";

export const reservationSchema = z.object({
  nombre: z
    .string()
    .min(2, "Indica tu nombre completo (mínimo 2 caracteres).")
    .max(120, "Nombre demasiado largo."),
  email: z.email("Introduce un email válido."),
  telefono: z
    .string()
    .min(6, "Introduce un teléfono válido.")
    .max(30, "Teléfono demasiado largo.")
    .regex(/^[+\d\s().-]+$/u, "Solo números, espacios y los símbolos + ( ) - ."),
  fecha: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/u, "Selecciona una fecha válida."),
  hora: z
    .string()
    .regex(/^\d{2}:\d{2}$/u, "Selecciona una hora válida."),
  personas: z.coerce
    .number()
    .int("Indica un número entero de comensales.")
    .min(1, "Mínimo 1 comensal.")
    .max(12, "Para más de 8 personas, llámanos directamente."),
  zona: z.string().optional(),
  comentarios: z
    .string()
    .max(800, "Demasiado largo (máx. 800 caracteres).")
    .optional(),
  acepto_privacidad: z.literal(true, {
    message: "Debes aceptar la Política de Privacidad para continuar.",
  }),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const cancelSchema = z.object({
  reservationId: z
    .string()
    .min(4, "Introduce el ID de la reserva.")
    .max(60, "ID inválido."),
  email: z.email("Introduce el email asociado a la reserva."),
});

export type CancelInput = z.infer<typeof cancelSchema>;
