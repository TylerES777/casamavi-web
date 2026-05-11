import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validation";

/**
 * POST /api/reservation
 *
 * Stub handler. When Tyler configures Resend (or any email provider),
 * wire it in below where indicated. For now we just validate input and
 * return a fake confirmation ID so the form's success state can be
 * verified end-to-end.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo JSON inválido." },
      { status: 400 },
    );
  }

  const parsed = reservationSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Datos inválidos.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // TODO: send confirmation email via Resend / SMTP
  // await sendReservationEmail(parsed.data);

  const reservationId = `CM-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json(
    { ok: true, reservationId },
    { status: 200 },
  );
}
