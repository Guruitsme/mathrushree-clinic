"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/gallery-reception.png",
    alt: "Modern reception & waiting area with teal interiors",
    label: "Reception & Waiting Area",
    span: "col-span-2 row-span-2", // hero image — large
  },
  {
    src: "/gallery-consultation.png",
    alt: "Doctor's consultation room with examination bed",
    label: "Consultation Room",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-ortho-room.png",
    alt: "Orthopedic consultation with digital imaging and spine model",
    label: "Orthopedic Consultation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-treatment.png",
    alt: "Treatment and procedure rooms with medical equipment",
    label: "Treatment & Procedure Room",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/gallery-corridor.png",
    alt: "Clinic corridor with doctor name plates and modern lighting",
    label: "Clinic Interior",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-xray.png",
    alt: "Digital X-Ray machine and imaging equipment",
    label: "Digital X-Ray Unit",
    span: "col-span-1 row-span-1",
  },
];

function GalleryCard({
  image,
  index,
  onClick,
}: {
  image: (typeof GALLERY_IMAGES)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${image.span} group relative rounded-2xl overflow-hidden cursor-pointer card-premium min-h-[200px] sm:min-h-[250px]`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${image.label}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-teal-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
          <span className="text-sm sm:text-base font-semibold text-white drop-shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {image.label}
          </span>
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-400/30 transition-colors duration-500" />
    </div>
  );
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof GALLERY_IMAGES;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Nav buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div
        className="relative w-[90vw] h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-white font-semibold text-lg">{img.label}</p>
        <p className="text-slate-400 text-sm mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="py-20 md:py-28 bg-white relative overflow-hidden"
        aria-labelledby="gallery-heading"
      >
        {/* Decorative background */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-40" />

        <div className="container mx-auto px-5 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-bold text-teal-600 uppercase tracking-[0.2em] mb-3">
              Inside Our Clinic
            </span>
            <h2
              id="gallery-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight heading-line"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Clinic Gallery
            </h2>
            <p className="text-base text-teal-700 font-medium mt-6 mb-4">
              ನಮ್ಮ ಕ್ಲಿನಿಕ್ ಗ್ಯಾಲರಿ
            </p>
            <p className="text-base text-slate-500 max-w-xl mx-auto">
              Take a virtual tour of our modern, hygienic, and
              patient-friendly facilities.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] sm:auto-rows-[260px] gap-4">
            {GALLERY_IMAGES.map((image, i) => (
              <GalleryCard
                key={image.src}
                image={image}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + GALLERY_IMAGES.length) %
                GALLERY_IMAGES.length
            )
          }
          onNext={() =>
            setLightboxIndex(
              (lightboxIndex + 1) % GALLERY_IMAGES.length
            )
          }
        />
      )}
    </>
  );
}
