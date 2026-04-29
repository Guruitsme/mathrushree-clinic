"use client";

import { useEffect, useRef } from "react";
import { FACILITIES } from "@/lib/data";
import type { Facility } from "@/lib/types";
import {
  ScanLine, TestTubes, HeartPulse, Dumbbell, Syringe, Droplets, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = { ScanLine, TestTubes, HeartPulse, Dumbbell, Syringe, Droplets };

function FacilityCard({ facility, index }: { facility: Facility; index: number }) {
  const Icon = iconMap[facility.icon] ?? HeartPulse;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={`facility-${facility.id}`}
      className="reveal group text-center rounded-2xl bg-white border border-slate-100 p-6 card-premium"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-emerald-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-teal-500/20 transition-all duration-500">
        <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-sm font-bold text-slate-800 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
        {facility.title}
      </h3>
      <p className="text-xs text-slate-400">{facility.description}</p>
    </div>
  );
}

export function FacilitiesGrid() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-white relative" aria-labelledby="facilities-heading">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold text-teal-600 uppercase tracking-[0.2em] mb-3">
            Under One Roof
          </span>
          <h2
            id="facilities-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight heading-line"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Facilities & Services
          </h2>
          <p className="text-base text-teal-700 font-medium mt-6 mb-4">ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಸೇವೆಗಳು</p>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Modern diagnostic equipment and treatment facilities — no referrals needed.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-5">
          {FACILITIES.map((f, i) => (
            <FacilityCard key={f.id} facility={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
