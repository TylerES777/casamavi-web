/**
 * Compute available reservation time slots for a given date.
 * Service hours per the brief — see Section 2 / 6.4.
 */

const LUNCH = ["13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30"];
const EVENING_SUMMER = [
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
];
const EVENING_WINTER = [
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
];

export type TimeBlock = { label: string; slots: string[] };

export function getTimeBlocks(isoDate: string): TimeBlock[] {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return [];
  const [y, m, d] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  const weekday = date.getUTCDay(); // 0 = Sunday, 1 = Monday, ...
  const month = m ?? 1;
  const isSummer = month >= 4 && month <= 10;
  const evening = isSummer ? EVENING_SUMMER : EVENING_WINTER;

  if (weekday === 0) return []; // Sunday closed
  if (weekday === 1)
    return [{ label: "Cena", slots: evening }]; // Monday evening only
  return [
    { label: "Comida", slots: LUNCH },
    { label: "Cena", slots: evening },
  ];
}

/**
 * Returns ISO date string for `today` in Europe/Madrid time, used as the
 * minimum selectable date on the form.
 */
export function todayIsoMadrid(): string {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(new Date());
}
