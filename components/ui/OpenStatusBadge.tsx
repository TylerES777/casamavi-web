"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/hours";

export function OpenStatusBadge({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    setStatus(getOpenStatus());
  }, []);

  return (
    <span
      className={`inline-block transition-opacity duration-500 ${
        status ? "opacity-100" : "opacity-0"
      } ${className}`}
      aria-live="polite"
    >
      {status ?? "·"}
    </span>
  );
}
