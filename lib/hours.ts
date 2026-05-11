type DayCode = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

const WEEKDAY_MAP: Record<string, DayCode> = {
  Mon: "Mon",
  Tue: "Tue",
  Wed: "Wed",
  Thu: "Thu",
  Fri: "Fri",
  Sat: "Sat",
  Sun: "Sun",
};

function getMadridParts(now: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    month: "numeric",
    hour12: false,
  });
  const parts = Object.fromEntries(
    formatter.formatToParts(now).map((p) => [p.type, p.value]),
  );
  const weekday = WEEKDAY_MAP[parts.weekday] ?? "Mon";
  // en-US 24h sometimes returns "24" at midnight — normalize to 0
  const rawHour = parseInt(parts.hour ?? "0", 10);
  const hour = rawHour === 24 ? 0 : rawHour;
  const minute = parseInt(parts.minute ?? "0", 10);
  const month = parseInt(parts.month ?? "1", 10);
  return { weekday, minutes: hour * 60 + minute, month };
}

export function getOpenStatus(now: Date = new Date()): string {
  const { weekday, minutes, month } = getMadridParts(now);
  // Spain summer hours roughly Apr–Oct
  const isSummer = month >= 4 && month <= 10;

  const lunchOpen = 13 * 60;
  const lunchClose = 15 * 60 + 30;
  const eveningOpen = isSummer ? 19 * 60 + 30 : 19 * 60;
  const eveningClose = isSummer ? 23 * 60 : 22 * 60 + 30;
  const eveningOpenLabel = isSummer ? "19:30" : "19:00";
  const eveningCloseLabel = isSummer ? "23:00" : "22:30";

  if (weekday === "Sun") {
    return "Cerrado · Abrimos mañana a las 19:00";
  }

  if (weekday === "Mon") {
    if (minutes < eveningOpen) return `Abrimos hoy a las ${eveningOpenLabel}`;
    if (minutes < eveningClose) return `Abierto hoy hasta ${eveningCloseLabel}`;
    return "Cerrado · Abrimos mañana a las 13:00";
  }

  // Tue–Sat
  if (minutes < lunchOpen) return "Abrimos hoy a las 13:00";
  if (minutes < lunchClose) return "Abierto hoy hasta 15:30";
  if (minutes < eveningOpen) return `Abrimos esta noche a las ${eveningOpenLabel}`;
  if (minutes < eveningClose) return `Abierto hoy hasta ${eveningCloseLabel}`;

  if (weekday === "Sat") return "Cerrado · Volvemos el martes";
  return "Cerrado · Abrimos mañana a las 13:00";
}
