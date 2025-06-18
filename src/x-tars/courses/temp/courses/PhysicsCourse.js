export const physicsCourse = {
    id: 2,
    title: "Physics",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=faces",
    lessons: 12,
    students: 542,
    level: "Intermediate",
    rating: 4.9,
    modules: [
      {
        id: 1,
        title: "Mechanics",
        description: "Understanding motion, forces, and energy in physical systems",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=faces",
        lessons: 8,
        duration: "120 min",
        status: "success",
        navigationPath: "/courses/physics/mechanics"
      },
      {
        id: 2,
        title: "Thermodynamics",
        description: "Learn about heat, temperature, and energy transfer",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop&crop=faces",
        lessons: 6,
        duration: "90 min",
        status: "in-progress",
        navigationPath: "/courses/physics/thermodynamics"
      },
      {
        id: 3,
        title: "Electricity & Magnetism",
        description: "Explore electromagnetic forces and field theory",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&crop=faces",
        lessons: 10,
        duration: "150 min",
        status: "pending",
        navigationPath: "/courses/physics/electromagnetism"
      },
      {
        id: 4,
        title: "Quantum Physics",
        description: "Introduction to quantum mechanics and wave-particle duality",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop&crop=faces",
        lessons: 12,
        duration: "180 min",
        status: "pending",
        navigationPath: "/courses/physics/quantum-physics"
      },
      {
        id: 5,
        title: "Optics",
        description: "Study of light, reflection, refraction, and optical instruments",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=faces",
        lessons: 5,
        duration: "75 min",
        status: "pending",
        navigationPath: "/courses/physics/optics"
      }
    ]
  };