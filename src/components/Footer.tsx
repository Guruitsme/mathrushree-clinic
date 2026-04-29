import { CLINIC_NAME, CLINIC_NAME_KANNADA, PHONE_PRIMARY } from "@/lib/data";
import { Ambulance, ShieldPlus, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#010A14] border-t border-white/5 py-12" role="contentinfo">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                <ShieldPlus className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="block text-base font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Mathrushree
                </span>
                <span className="block text-[0.6rem] text-teal-400/70 uppercase tracking-widest">
                  Speciality Clinic
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Trusted healthcare partner for Orthopedics, Pediatrics, and Diagnostics in Nanjangud, Karnataka.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Specialties", "Facilities", "Doctors", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Emergency</h4>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition-all"
            >
              <Ambulance className="w-4 h-4" />
              Call: {PHONE_PRIMARY}
            </a>
            <p className="text-xs text-slate-500 mt-3">Available 24/7 for emergencies</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {CLINIC_NAME}. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600">{CLINIC_NAME_KANNADA}</p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
