"use client";

import { Phone } from "lucide-react";
import { PHONE_PRIMARY } from "@/lib/data";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`tel:${PHONE_PRIMARY}`}
        aria-label="Call Mathrushree Clinic"
        className="group w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(13,148,136,0.5)] hover:shadow-[0_12px_48px_rgba(13,148,136,0.7)] hover:scale-110 transition-all duration-300 animate-bounce-gentle"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-teal-400/30 animate-ping" />
      </a>
    </div>
  );
}
