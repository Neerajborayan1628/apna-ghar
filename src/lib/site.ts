export const SITE = {
  name: "Apna Ghar Care",
  tagline: "Premium Property Management in Tricity",
  phone: "+919988861620",
  phoneRaw: "919988861620",
  email: "care@apnagharcare.in",
  location: "Tricity, India",
  whatsappMessage:
    "Hi 👋 I want to book a service.\n\nPlease help me with:\n1️⃣ Inspection\n2️⃣ Cleaning\n3️⃣ Maintenance",
};

export const waLink = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/visual-highlights", label: "Visual Highlights" },
  { to: "/contact", label: "Contact" },
];
