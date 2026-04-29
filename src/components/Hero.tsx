"use client";

import { useEffect, useRef } from "react";
import { Phone, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { CLINIC_NAME_KANNADA, PHONE_PRIMARY } from "@/lib/data";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Mathrushree Speciality Clinic"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020D18] via-[#062133] to-[#0A3150]" />

      {/* Hero image with premium overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020D18] via-transparent to-[#020D18]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020D18]/80 via-transparent to-transparent" />

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-teal-500/[0.04] animate-float blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-emerald-500/[0.05] animate-float-delayed blur-2xl" />
      <div className="absolute top-1/3 right-[30%] w-48 h-48 rounded-full bg-sky-400/[0.03] animate-float-slow blur-2xl" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Content */}
      <div className="container mx-auto px-5 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto lg:mx-0 animate-fade-in-up">
          {/* Clinic name badge with glow */}
          <div className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full mb-8 animate-pulse-glow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm text-teal-200/90 font-medium tracking-wide">
              {CLINIC_NAME_KANNADA}
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Family&apos;s
            <br />
            <span className="gradient-text">Health Partner</span>
            <br />
            <span className="text-white/90">for Life.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-300/80 mb-8 leading-relaxed max-w-xl">
            Advanced <strong className="text-teal-300">Orthopedics</strong>, compassionate{" "}
            <strong className="text-emerald-300">Pediatrics</strong>, and trusted General Medicine — all under one roof in Mysuru.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Board-Certified Specialists", "10,000+ Happy Patients", "Same-Day Appointments"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-teal-200/70 bg-teal-500/[0.08] border border-teal-500/15 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-[0_8px_32px_rgba(13,148,136,0.4)] hover:shadow-[0_12px_48px_rgba(13,148,136,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Book Appointment Now
            </a>
            <a
              href="#specialties"
              className="group inline-flex items-center justify-center gap-3 glass hover:bg-white/[0.12] text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Explore Our Expertise
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0">
          {[
            { value: 15, suffix: "+", label: "Years Experience", icon: Star },
            { value: 10, suffix: "K+", label: "Patients Treated", icon: CheckCircle2 },
            { value: 4, suffix: "", label: "Specializations", icon: Star },
            { value: 6, suffix: "+", label: "Diagnostic Services", icon: CheckCircle2 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center hover:bg-white/[0.1] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-[0.7rem] text-slate-400 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
