export const resume = {
  personalInfo: {
    name: "Apil Khadka",
    role: "Backend Developer",
    email: "apil@apilkhadka.com.np",
    phone: "+977 9864782896",
    location: "Dhobighat, Lalitpur",
    website: "apilkhadka.com.np",
    avatar: "https://res.cloudinary.com/dglsdyi9e/image/upload/v1766247919/qpcmhwwohdu77mjf33v1.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/apil-khadka/",
      github: "https://github.com/Apil-Khadka",
      instagram: "https://www.instagram.com/apil.me/",
      facebook: "https://www.facebook.com/apil.me",
      blog: "https://blog.apilkhadka.com.np/"
    },
    summary: "Backend-oriented full-stack developer experienced in building secure, scalable systems with Spring Boot and Laravel, complemented by modern frontend frameworks such as React and Vue. Designed and implemented RESTful APIs, role-based authentication, and relational database schemas across 5+ projects. Strong understanding of system design, API security, and Linux server administration.",
    seoSummary: "Backend-focused full-stack developer with expertise in Spring Boot, Laravel, React, and Vue."
  },
  skills: {
    languages: ["Java", "PHP", "JavaScript", "TypeScript", "Kotlin"],
    backend: [
      "Spring Boot",
      "Laravel",
      "RESTful APIs"
    ],
    frontend: [
      "React",
      "Vue",
      "Astro",
      "Next.js",
      "TailwindCSS"
    ],
    database: [
      "PostgreSQL",
      "MySQL",
      "Redis"
    ],
    devops: [
      "Linux",
      "Docker",
      "Git",
      "Nginx",
      "VPS management"
    ],
    cloud: ["Firebase", "Azure basics"]
  },
  experience: [
    {
      title: "Technical Lead",
      company: "TEDxNCIT",
      period: "Aug 2025 - Jan 2026",
      location: "Balkumari, Lalitpur",
      links: {
        live: "https://tedx.ncit.edu.np/",
        github: "https://github.com/Apil-Khadka/TEDxNCIT_2026"
      },
      description: "Led end-to-end development and deployment of the event site serving hundreds.",
      achievements: [
        "Built site with Astro, TypeScript and Tailwind; maintained Linux VPS, Nginx, SSL (Let's Encrypt).",
        "Implemented automated deployment (Git hooks), achieving zero-downtime updates and 95+ Lighthouse scores."
      ],
      tech: ["Astro", "TypeScript", "TailwindCSS", "Linux VPS", "Git"]
    }
  ],
  education: [
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Nepal College of Information Technology (NCIT)",
      location: "Balkumari, Lalitpur",
      period: "2023 – Present"
    }
  ],
  projects: [
    {
      title: "AichoPaicho — Personal Transaction Tracker",
      period: "Sep 2025 – Nov 2025",
      tech: ["Kotlin", "Android", "Firebase", "Firestore"],
      description: "Developing a native Android application for managing personal records and contact-linked entries.",
      achievements: [
        "Designed a system to associate financial and custom records with individual contacts.",
        "Implemented local data storage to support offline-first usage.",
        "Integrated Firebase Authentication for secure user access.",
        "Implemented Firestore synchronization for backup and multi-device data consistency.",
        "Designed data flow enabling seamless synchronization between local storage and cloud backend."
      ],
      links: {
        github: "https://github.com/Aspiring-Creators-Nightingale/AichoPaicho"
      }
    },
    {
      title: "TEDxNCIT 2026 — Event Management Platform",
      period: "Nov 2025 - Jan 2026",
      tech: ["Astro", "TypeScript", "TailwindCSS", "Linux VPS", "Git"],
      description: "Deployed and managed production website built with Astro, TypeScript, and TailwindCSS.",
      achievements: [
        "Configured Linux VPS infrastructure including domain setup, SSL certificates, and basic security hardening.",
        "Refactored codebase for production optimization and performance improvements.",
        "Maintained version control and deployed updates to the live environment."
      ],
      links: {
        live: "https://tedxncit.com/",
        github: "https://github.com/Apil-Khadka"
      }
    },
    {
      title: "Toura — Tourist–Guide Connection Platform",
      period: "2025",
      tech: ["Spring Boot", "PostgreSQL", "React Native", "TypeScript"],
      description: "Designed a two-sided platform enabling tourists to discover and book local guides.",
      achievements: [
        "Built Spring Boot REST API handling authentication, guide profiles, search, and booking workflows.",
        "Implemented JWT-based authentication with role-based access control for tourists and guides.",
        "Designed normalized PostgreSQL schema for users, guides, locations, bookings, and reviews.",
        "Implemented guide search with filtering by location, specialization, ratings, and availability.",
        "Developed feature allowing guides to add tourist attractions and tours with location-based pricing.",
        "Built booking workflow with time-slot validation and conflict prevention.",
        "Developed React Native + TypeScript frontend with separate dashboards for tourists and guides."
      ],
      links: {
        backend: "https://gitlab.com/aspiring-creators/toura",
        frontend: "https://gitlab.com/aspiring-creators/toura_frontend"
      }
    },
    {
      title: "Medimanage — Hospital Operations Management",
      period: "2024",
      tech: ["Laravel", "MySQL", "Vue.js"],
      description: "Developed a hospital management system covering patients, appointments, prescriptions, and billing.",
      achievements: [
        "Built Laravel REST API managing core hospital workflows.",
        "Designed normalized MySQL schema handling complex healthcare relationships.",
        "Implemented role-based access control for administrators, doctors, nurses, and reception staff.",
        "Built appointment scheduling with conflict detection and availability management.",
        "Developed Vue.js frontend with department-specific dashboards and real-time updates."
      ],
      links: {
        backend: "https://github.com/Apil-Khadka/Hospital-Management-System",
        frontend: "https://github.com/Apil-Khadka/Hospital-Management-System-Frontend"
      }
    },
    {
      title: "AccProBook — Business Financial Transaction Management",
      period: "Jun 2024",
      tech: ["PHP", "MySQL", "Custom MVC"],
      description: "Built an accounting platform prototype during a 48-hour hackathon.",
      achievements: [
        "Implemented a custom MVC framework with routing, controllers, and REST-style APIs.",
        "Designed MySQL schema enforcing double-entry bookkeeping validation.",
        "Developed CRUD workflows for companies, customers, invoices, credits, and debits.",
        "Built real-time dashboard for invoice and payment tracking.",
        "Implemented automated PDF financial report generation."
      ],
      links: {
        demo: "https://lavapp.helioho.st/",
        github: "https://github.com/Apil-Khadka/AccProBook"
      }
    },
    {
      title: "CourseManager — Online Learning Platform",
      period: "2024",
      tech: ["Laravel", "React", "MySQL"],
      description: "Built full-stack e-learning platform for structured course delivery.",
      achievements: [
        "Developed Laravel API supporting nested courses and lesson hierarchies.",
        "Implemented quiz engine with automatic scoring and result storage.",
        "Built enrollment system with role-based access control for instructors and students.",
        "Implemented progress tracking across courses and lessons.",
        "Developed React frontend with course catalog, lesson viewer, and interactive quizzes."
      ],
      links: {
        github: "https://github.com/Apil-Khadka/Course-Manager"
      }
    },
    {
      title: "MedicMitra — Multi-language Medicine Information",
      period: "2025",
      tech: ["Spring Boot", "MySQL", "React"],
      description: "Developed medicine information platform supporting multiple languages.",
      achievements: [
        "Built Spring Boot API for multilingual content delivery.",
        "Designed MySQL schema supporting dynamic translations with data consistency.",
        "Implemented search functionality with category-based filtering.",
        "Built React interface with seamless language switching and responsive design."
      ],
      links: {
        backend: "https://github.com/Apil-Khadka/MedicMitra_Backend",
        frontend: "https://github.com/Apil-Khadka/MedicMitra_Frontend"
      }
    },
    {
      title: "Blog Manager — Content Publishing Platform",
      period: "2024",
      tech: ["Spring Boot", "MySQL", "JWT"],
      description: "Built secure blogging platform with role-based content management.",
      achievements: [
        "Developed Spring Boot REST API with JWT authentication and refresh token support.",
        "Implemented CRUD operations for posts, categories, and comments.",
        "Enforced role-based authorization for content publishing and moderation.",
        "Optimized MySQL queries for pagination and efficient content retrieval."
      ],
      links: {
        github: "https://github.com/Apil-Khadka/Java_Blog_Manager"
      }
    }
  ]
};
