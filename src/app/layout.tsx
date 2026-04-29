import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mathrushreeclinic.in"),
  title: {
    default: "Mathrushree Speciality Clinic & Diagnostics | Best Orthopedic & Pediatric Care in Mysuru",
    template: "%s | Mathrushree Speciality Clinic",
  },
  description:
    "Trusted Orthopedic & Pediatric specialists in Mysuru. Dr. Gopi H.T. (MBBS, MS, DNB, FIJR — Joint Replacement) & Dr. Manasa C. (MBBS, MD — Pediatric Neurology). Digital X-Ray, Lab Tests, Physiotherapy & more. Call 9353030665.",
  keywords: [
    "Mathrushree Clinic Mysuru",
    "best orthopedic doctor Mysore",
    "pediatrician near me Karnataka",
    "joint replacement surgeon Mysuru",
    "bone specialist Mysore",
    "children doctor Mysuru",
    "digital x-ray Mysore",
    "PRP treatment knee Mysuru",
    "physiotherapy clinic Mysore",
    "Dr Gopi HT orthopedic",
    "Dr Manasa C pediatrics",
    "ಮಾತೃಶ್ರೀ ಕ್ಲಿನಿಕ್ ಮೈಸೂರು",
  ],
  openGraph: {
    title: "Mathrushree Speciality Clinic & Diagnostics — Mysuru",
    description:
      "Expert Orthopedics, Joint Replacement, Pediatrics & Advanced Diagnostics. Trusted by 10,000+ patients.",
    type: "website",
    locale: "en_IN",
    siteName: "Mathrushree Speciality Clinic & Diagnostics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathrushree Speciality Clinic & Diagnostics",
    description: "Expert Orthopedics & Pediatrics in Mysuru, Karnataka.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://mathrushreeclinic.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        {/* JSON-LD Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Mathrushree Speciality Clinic & Diagnostics",
              alternateName: "ಮಾತೃಶ್ರೀ ಸ್ಪೆಷಾಲಿಟಿ ಕ್ಲಿನಿಕ್ ಮತ್ತು ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್",
              telephone: ["+91-8221-469571", "+91-9353030665"],
              medicalSpecialty: ["Orthopedics", "Pediatrics", "GeneralPractice"],
              availableService: [
                "Joint Replacement",
                "Arthroscopy",
                "Pediatric Neurology",
                "Digital X-Ray",
                "Physiotherapy",
                "PRP Treatment",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "21:00",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
