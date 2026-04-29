/**
 * TypeScript interfaces for clinic domain objects.
 * Designed to be CMS-agnostic — mock data can be swapped for a headless CMS later.
 */

export interface Doctor {
  id: string;
  name: string;
  degrees: string;
  specialty: string;
  specialtyKannada: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  titleKannada: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface ContactInfo {
  phone: { label: string; number: string }[];
  hours: { days: string; time: string }[];
  address: string;
  emergencyNumber: string;
  mapEmbedUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}
