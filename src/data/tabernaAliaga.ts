export const SITE_DATA = {
  name: "Taberna Aliaga",
  tagline: "Cocina de mercado, tradición y producto de cercanía.",
  address: {
    street: "C/ Músic Filibert Rodrigo, 19",
    city: "Catarroja",
    postalCode: "46470",
    province: "Valencia",
    googleMapsUrl: "https://maps.app.goo.gl/uK5YF3p7gq1j8Z6z7" // Placeholder, should ideally be real if we had it, but will rely on user to update or find it later if needed.
  },
  contact: {
    phoneMobile: "624 28 31 31",
    phoneLandline: "960 412 588",
    phoneDelivery: "961 270 712",
    email: "tabernaaliaga@gmail.com",
    instagram: "https://www.instagram.com/tabernaliaga/"
  },
  openingHours: {
    note: "Horario actualizado post-DANA (Fuente: Instagram)",
    schedule: [
      { day: "Lunes", hours: "Cerrado" },
      { day: "Martes", hours: "Cerrado" },
      { day: "Miércoles", hours: "09:30 – 16:00" },
      { day: "Jueves", hours: "09:30 – 16:00" },
      { day: "Viernes", hours: "09:30 – 16:00, 20:00 – 23:30" },
      { day: "Sábado", hours: "09:30 – 16:00, 20:00 – 23:30" },
      { day: "Domingo", hours: "09:30 – 16:00" }
    ],
    // For structured data
    structured: [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday", "Thursday", "Sunday"], "opens": "09:30", "closes": "16:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday"], "opens": "09:30", "closes": "23:30" }
    ]
  },
  booking: {
    methods: ["WhatsApp (624 28 31 31)", "Teléfono"],
    policy: "Se recomienda reservar con antelación, especialmente fines de semana."
  },
  menuHighlights: [
    { name: "Ensaladilla Rusa", desc: "La famosa de la casa, con bonito y encurtidos." },
    { name: "Arroz Meloso", desc: "Especialidad de la casa (ej. Bogavante, Senyoret)." },
    { name: "Croquetas de Morcilla y Pera", desc: "Cremosas y con contraste dulce-salado." },
    { name: "Gamba de Dénia", desc: "Producto fresco de lonja." },
    { name: "Entrecôte Vaca Vieja", desc: "Maduración 21 días." }
  ],
  services: {
    delivery: {
      active: true,
      minOrder: 15.00,
      shippingCost: 1.90,
      phone: "961 270 712",
      zones: ["Catarroja", "Albal", "Massanassa", "Alfafar", "Benetússer", "Sedaví", "Paiporta", "Picanya"]
    },
    catering: {
      active: true,
      clients: ["Opticalia", "Ayuntamiento de Catarroja", "BNI Target"]
    }
  },
  reviews: {
    source: "Tripadvisor",
    rating: 4.4,
    count: 134,
    themes: [
      "Materia prima de excelente calidad (especialmente marisco).",
      "Servicio cercano y profesional (menciones frecuentes a Raúl).",
      "Arroces en su punto perfecto.",
      "Ambiente tranquilo y renovado."
    ]
  }
};
