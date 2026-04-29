"use client";

import { useEffect, useRef } from "react";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/lib/types";
import { Bone, Wrench, Baby, Stethoscope, ArrowRight, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Bone, Wrench, Baby, Stethoscope };

const accentColors = [
  { bg: "from-teal-500/20 to-teal-500/5", border: "border-teal-500/20", icon: "from-teal-500 to-teal-600", glow: "shadow-teal-500/20" },
  { bg: "from-sky-500/20 to-sky-500/5", border: "border-sky-500/20", icon: "from-sky-500 to-blue-600", glow: "shadow-sky-500/20" },
  { bg: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/20", icon: "from-emerald-500 to-green-600", glow: "shadow-emerald-500/20" },
  { bg: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/20", icon: "from-amber-500 to-orange-600", glow: "shadow-amber-500/20" },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Stethoscope;
  const color = accentColors[index % accentColors.length];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={`specialty-${service.id}`}
      className="reveal group relative rounded-3xl bg-white border border-slate-100 overflow-hidden card-premium"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.icon} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="p-7 sm:p-8">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color.icon} flex items-center justify-center mb-6 shadow-xl ${color.glow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-1.5 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          {service.title}
        </h3>
        <p className="text-sm text-teal-600 font-semibold mb-3">{service.titleKannada}</p>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>

        {/* Learn more link */}
        <a
          href="#doctors"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors cursor-pointer"
        >
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section
      id="specialties"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      aria-labelledby="specialties-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-teal-600 uppercase tracking-[0.2em] mb-3">
            What We Specialize In
          </span>
          <h2
            id="specialties-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight heading-line"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Specialties
          </h2>
          <p className="text-base text-teal-700 font-medium mt-6 mb-4">ನಮ್ಮ ಸ್ಪೆಷಾಲಿಟಿಗಳು</p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            World-class medical care delivered with warmth and precision. Our board-certified specialists bring decades of combined experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
