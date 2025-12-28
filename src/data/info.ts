export const INFO = {
  name: "Taberna Aliaga",
  foundation: 1995,
  manager: "Raúl Aliaga",
  address: {
    street: "Carrer Músico Filiberto Rodrigo, 19",
    postalCode: "46470",
    city: "Catarroja",
    region: "Valencia",
    country: "ES"
  },
  geo: { lat: 39.40716, lng: -0.40517 },
  phones: {
    whatsapp: "+34 624 28 31 31",
    landline: "960 412 588"
  },
  socials: {
    instagram: "https://instagram.com/tabernaliaga"
  },
  email: "restaurantealiagacatarroja@gmail.com",
  hours: {
    lunch: "12:00 - 16:00",
    dinner: "19:30 - 23:30 (excepto Domingos y Lunes noche cerrado)"
  },
  amenities: ["Reservas", "Terraza", "Wifi", "Vinoteca", "Acceso movilidad reducida"],
  story: {
    title: "Sentirse como en casa con el mejor producto de la lonja",
    text: "Fundada en 1995, Taberna Aliaga cuenta con 30 años de trayectoria ofreciendo lo mejor del mar y la tierra. Bajo el liderazgo de Raúl Aliaga desde 2012, fusionamos la esencia de una taberna tradicional con la alta calidad gastronómica. Nos enorgullece nuestra resiliencia y fuerte vínculo con la comunidad de Catarroja, especialmente tras superar juntos momentos difíciles.",
    images: [] 
  },
  menuCategories: {
    lonja: {
      title: "Producto de Lonja",
      items: [
        { name: "Gamba Roja de Dénia", description: "Frescura inigualable del Mediterráneo." },
        { name: "Quisquilla Extra", description: "Sabor delicado y textura suave." },
        { name: "Ostras Gillardeau", description: "La reina de las ostras, calibrada y carnosa." },
        { name: "Navajas gallegas vivas", description: "A la plancha con un toque de limón." }
      ]
    },
    pescados: {
      title: "Pescados (Especialidad)",
      items: [
        { name: "Rodaballo al horno con ajos", description: "Nuestro plato insignia. Piel crujiente y carne jugosa." },
        { name: "Lubina salvaje", description: "A la espalda o a la sal, según disponibilidad." },
        { name: "Lenguado", description: "Fresco y preparado con maestría." }
      ]
    },
    arroces: {
      title: "Arroces Melosos",
      note: "Bajo pedido / encargo",
      items: [
        { name: "Arroz de Sepia y Gamba", description: "Intenso sabor a mar." },
        { name: "Arroz de Pulpo y Alcachofa", description: "Una combinación de texturas única." },
        { name: "Arroz de Codillo con Ajos Tiernos", description: "Melosidad y potencia de sabor." }
      ]
    },
    tapas: {
      title: "Tapas de Autor",
      items: [
        { name: "Alcachofas Aliaga", description: "Hervidas, fritas, con huevo poché y jamón." },
        { name: "Ensaladilla Aliaga", description: "Nuestra versión cremosa con ventresca." },
        { name: "Torrezno de Soria", description: "Crujiente y tierno a la vez." },
        { name: "Esgarraet", description: "Pimiento asado y bacalao, un clásico valenciano." }
      ]
    },
    carnes: {
      title: "Carnes",
      items: [
        { name: "Entrecot de vaca frisona", description: "Madurado 30 días para máxima terneza." }
      ]
    },
    bodega: {
      title: "Bodega y Quesos",
      items: [
        { name: "Tablas de quesos premium", description: "Selección nacional e internacional." },
        { name: "Catas de vino", description: "Eventos exclusivos y maridajes." }
      ]
    }
  }
};
