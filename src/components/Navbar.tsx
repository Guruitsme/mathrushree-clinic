"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ShieldPlus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, PHONE_PRIMARY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#062133]/95 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Mathrushree Clinic Home">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-teal-500/25">
            <ShieldPlus className="w-6 h-6 text-white" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <ShieldPlus className="absolute w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <span className="block text-base font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              Mathrushree
            </span>
            <span className="block text-[0.6rem] text-teal-300/80 uppercase tracking-[0.2em] font-medium">
              Speciality Clinic & Diagnostics
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-white/70 hover:text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.08] group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full group-hover:w-1/2 transition-all duration-300" />
            </a>
          ))}
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="ml-3 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-400/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden p-2.5 text-white hover:bg-white/10 rounded-xl cursor-pointer transition-colors"
            aria-label="Open navigation menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-b from-[#062133] to-[#0A3150] border-l-white/5 w-80 pt-16"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-1 px-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white hover:bg-white/[0.08] text-lg font-medium px-4 py-3.5 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 px-4">
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3.5 rounded-2xl text-base font-semibold shadow-lg shadow-teal-500/30"
                >
                  <Phone className="w-5 h-5" />
                  Call for Appointment
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
