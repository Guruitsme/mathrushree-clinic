import { Phone, Clock, MapPin, Ambulance, ExternalLink } from "lucide-react";
import { CONTACT_INFO, PHONE_PRIMARY } from "@/lib/data";

const contactCards = [
  {
    icon: Phone,
    title: "Phone Numbers",
    gradient: "from-teal-500 to-teal-600",
    links: CONTACT_INFO.phone.map((p) => ({
      label: `${p.number} (${p.label})`,
      href: `tel:${p.number.replace(/-/g, "")}`,
    })),
  },
  {
    icon: Clock,
    title: "Working Hours",
    gradient: "from-sky-500 to-blue-600",
    lines: CONTACT_INFO.hours.map((h) => `${h.days}: ${h.time}`),
  },
  {
    icon: MapPin,
    title: "Clinic Address",
    gradient: "from-emerald-500 to-green-600",
    content: CONTACT_INFO.address,
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency",
    gradient: "from-rose-500 to-red-600",
    emergency: CONTACT_INFO.emergencyNumber,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-[#020D18] via-[#062133] to-[#0A3150] text-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight heading-line"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact & Location
          </h2>
          <p className="text-base text-teal-300/70 font-medium mt-6 mb-4">ಸಂಪರ್ಕ ಮತ್ತು ಸ್ಥಳ</p>
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            We&apos;re here for you. Reach us for appointments, emergencies, or any health enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact cards — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="group flex items-start gap-4 glass rounded-2xl p-5 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className={`w-12 h-12 min-w-[3rem] bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{card.title}</h4>
                  {card.links ? (
                    <div className="space-y-1">
                      {card.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-teal-300 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : card.lines ? (
                    <div className="space-y-0.5">
                      {card.lines.map((line) => (
                        <p key={line} className="text-sm text-slate-300">{line}</p>
                      ))}
                    </div>
                  ) : card.emergency ? (
                    <p className="text-sm text-slate-300">
                      Call{" "}
                      <a href={`tel:${card.emergency}`} className="font-bold text-rose-400 hover:text-rose-300 underline underline-offset-2">
                        {card.emergency}
                      </a>
                      {" "}anytime
                    </p>
                  ) : (
                    <p className="text-sm text-slate-300 leading-relaxed">{card.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Map — 3 cols */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 min-h-[350px] bg-white/5 shadow-2xl">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              className="w-full h-full min-h-[350px] lg:min-h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mathrushree Speciality Clinic Location"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>

        {/* Quick action bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-teal-500/30 hover:shadow-teal-400/50 hover:-translate-y-1 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now — {PHONE_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
