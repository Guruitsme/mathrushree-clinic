/**
 * Mock data for Mathrushree Speciality Clinic.
 * Replace with headless CMS fetch calls (e.g., Sanity, Strapi) later.
 */
import type { Doctor, Service, Facility, ContactInfo, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Specialties", href: "#specialties" },
  { label: "Facilities", href: "#facilities" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-gopi",
    name: "Dr. Gopi H. T.",
    degrees: "MBBS, MS (Ortho), DNB (Ortho), FIJR",
    specialty: "Orthopedics & Joint Replacement",
    specialtyKannada: "ಮೂಳೆ ಮತ್ತು ಕೀಲು ತಜ್ಞರು",
    description:
      "A highly skilled Orthopedic Surgeon with advanced fellowship in Joint Replacement (FIJR). Specializes in total knee & hip replacements, arthroscopy, sports injuries, complex fracture management, and PRP therapy. Known for patient-centered care and precision surgical outcomes.",
    image: "/dr-gopi.png",
    tags: ["Joint Replacement", "Arthroscopy", "Fracture Care", "Sports Medicine", "PRP Therapy"],
  },
  {
    id: "dr-manasa",
    name: "Dr. Manasa C.",
    degrees: "MBBS, MD (Pediatrics) — Pediatric Neurology",
    specialty: "Pediatrics & Neonatology",
    specialtyKannada: "ಮಕ್ಕಳ ತಜ್ಞರು ಮತ್ತು ನವಜಾತ ಶಿಶು ತಜ್ಞರು",
    description:
      "An expert Pediatrician with specialized training in Pediatric Neurology. Provides comprehensive care from newborn screening to adolescent health — including vaccinations, developmental assessment, epilepsy management, and childhood behavioral disorders.",
    image: "/dr-manasa.png",
    tags: ["Pediatric Neurology", "Neonatology", "Vaccinations", "Growth Assessment", "Epilepsy Care"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "ortho",
    title: "Bone & Joint Specialist",
    titleKannada: "ಮೂಳೆ ಮತ್ತು ಕೀಲು ರೋಗ ತಜ್ಞರು",
    description:
      "Complete musculoskeletal care — fractures, arthritis, ligament injuries, spinal disorders, and chronic joint pain treated by experienced orthopedic specialists.",
    icon: "Bone",
  },
  {
    id: "joint-replacement",
    title: "Joint Replacement & Arthroscopy",
    titleKannada: "ಕೃತಕ ಕೀಲು ಬದಲಾವಣೆ ಮತ್ತು ಆರ್ಥ್ರೋಸ್ಕೋಪಿ",
    description:
      "State-of-the-art total knee & hip replacement surgeries with rapid recovery protocols. Minimally invasive arthroscopic procedures for faster healing.",
    icon: "Wrench",
  },
  {
    id: "pediatrics",
    title: "Neonatology & Pediatrics",
    titleKannada: "ನವಜಾತ ಶಿಶು ತಜ್ಞರು ಮತ್ತು ಮಕ್ಕಳ ವೈದ್ಯರು",
    description:
      "Expert newborn care, childhood illness treatment, vaccination programs, growth monitoring, and pediatric neurology consultations — your child's health, our priority.",
    icon: "Baby",
  },
  {
    id: "general-physician",
    title: "General Physician",
    titleKannada: "ಜನರಲ್ ಫಿಸಿಷಿಯನ್",
    description:
      "Comprehensive primary care — fever, infections, diabetes management, blood pressure control, thyroid care, and preventive health screenings for all ages.",
    icon: "Stethoscope",
  },
];

export const FACILITIES: Facility[] = [
  { id: "xray", title: "Digital X-Ray", description: "HD imaging, instant results", icon: "ScanLine" },
  { id: "lab", title: "Lab Tests", description: "Blood, Stool & Urine analysis", icon: "TestTubes" },
  { id: "ecg", title: "ECG & Pharmacy", description: "In-house cardiac & meds", icon: "HeartPulse" },
  { id: "physio", title: "Physiotherapy", description: "Expert rehab & recovery", icon: "Dumbbell" },
  { id: "diabetes", title: "Diabetes & BP", description: "Chronic disease care", icon: "Syringe" },
  { id: "prp", title: "PRP Treatment", description: "Advanced joint therapy", icon: "Droplets" },
];

export const CONTACT_INFO: ContactInfo = {
  phone: [
    { label: "Landline", number: "08221-469571" },
    { label: "Mobile", number: "9353030665" },
  ],
  hours: [
    { days: "Mon – Sat", time: "9:00 AM – 9:00 PM" },
    { days: "Sunday", time: "Emergency Only" },
  ],
  address: "Mathrushree Speciality Clinic & Diagnostics, Mysuru, Karnataka, India",
  emergencyNumber: "9353030665",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.5!2d76.672998!3d12.1068121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf437197fe3ac7%3A0x2ba07ac668c1d74f!2sMathrushree%20speciality%20clinic%20and%20diagnostics!5e0!3m2!1sen!2sin",
};

export const CLINIC_NAME = "Mathrushree Speciality Clinic & Diagnostics";
export const CLINIC_NAME_KANNADA = "ಮಾತೃಶ್ರೀ ಸ್ಪೆಷಾಲಿಟಿ ಕ್ಲಿನಿಕ್ ಮತ್ತು ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್";
export const PHONE_PRIMARY = "9353030665";
