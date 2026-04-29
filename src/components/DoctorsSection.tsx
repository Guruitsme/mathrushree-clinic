"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DOCTORS } from "@/lib/data";
import type { Doctor } from "@/lib/types";
import { Award, GraduationCap } from "lucide-react";

function DoctorProfileCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={`doctor-${doctor.id}`}
      className="reveal group rounded-3xl overflow-hidden bg-white border border-slate-100 card-premium"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image with premium overlay */}
      <div className="relative h-80 lg:h-96 overflow-hidden">
        <Image
          src={doctor.image}
          alt={`${doctor.name} — ${doctor.specialty}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Specialty badge */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <Badge className="bg-teal-500/90 backdrop-blur-sm text-white border-none text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            <Award className="w-3.5 h-3.5 mr-1" />
            {doctor.specialty.split("&")[0].trim()}
          </Badge>
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-none text-xs font-medium px-3 py-1.5 rounded-full">
            <GraduationCap className="w-3.5 h-3.5 mr-1" />
            {doctor.specialtyKannada.split("ಮತ್ತು")[0].trim()}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3
          className="text-2xl font-bold text-slate-900 mb-2 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {doctor.name}
        </h3>
        <p className="text-sm text-teal-600 font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-teal-500" />
          {doctor.degrees}
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-5">{doctor.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {doctor.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-teal-50 text-teal-700 hover:bg-teal-100 font-medium text-xs px-3 py-1 rounded-full transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DoctorsSection() {
  return (
    <section
      id="doctors"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      aria-labelledby="doctors-heading"
    >
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-teal-600 uppercase tracking-[0.2em] mb-3">
            Trusted Experts
          </span>
          <h2
            id="doctors-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight heading-line"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet Our Doctors
          </h2>
          <p className="text-base text-teal-700 font-medium mt-6 mb-4">ನಮ್ಮ ವೈದ್ಯರ ಪರಿಚಯ</p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Board-certified specialists with national fellowships, delivering world-class care with a personal touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doctor, i) => (
            <DoctorProfileCard key={doctor.id} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
