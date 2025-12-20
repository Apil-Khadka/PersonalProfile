export const resume = {
  personalInfo: {
    name: "Apil Khadka",
    role: "Software Engineer (Backend-focused)",
    email: "contact@apilkhadka.com.np",
    phone: "+977 9864782896",
    location: "Patan, Balkumari, Nepal",
    avatar: "https://res.cloudinary.com/dglsdyi9e/image/upload/v1766247919/qpcmhwwohdu77mjf33v1.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/apil-khadka/",
      github: "https://github.com/Apil-Khadka"
    },
    summary: "Highly adaptive Backend Engineer with a strong focus on scalable systems, RESTful API design, and clean architecture. Experienced in building robust backend solutions for financial, healthcare, and event management domains. Passionate about database optimization, distributed systems, and modern backend practices."
  },
  skills: {
    backend: [
      "PHP (Object-Oriented Programming)",
      "Laravel Framework",
      "Spring Boot (Java)",
      "RESTful API Design",
      "MVC Architecture",
      "System Design"
    ],
    database: [
      "MySQL",
      "PostgreSQL",
      "Database Design & Normalization",
      "Query Optimization"
    ],
    infrastructure: [
      "Linux Server Administration",
      "VPS Deployment",
      "Nginx/Apache Configuration",
      "Git & Version Control",
      "CI/CD Pipelines (Basic)",
      "Docker",
      "Kubernetes (Basic)"
    ],
    frontend: [
      "JavaScript (ES6+)",
      "React.js",
      "Vue.js",
      "HTML5 & CSS3",
      "Astro"
    ]
  },
  experience: [
    {
      title: "Full-Stack Developer & DevOps Engineer",
      company: "TEDxNCIT 2026 — Event Management Website",
      period: "Project",
      links: {
        live: "https://tedx.ncit.edu.np/",
        github: "https://github.com/Apil-Khadka/TEDxNCIT_2026"
      },
      description: "Led the refurbishment and deployment of the official event website. Focused on server-side configuration and performance optimization.",
      achievements: [
        "Configured and deployed application to a Linux VPS, managing domain SSL and security.",
        "Refactored legacy codebase for improved maintainability and production readiness.",
        "Optimized server response times and implemented static asset caching."
      ],
      tech: ["Astro", "TypeScript", "Linux VPS", "Nginx"]
    },
    {
      title: "Backend Developer",
      company: "AccProBook — Financial Management System",
      period: "Hackathon Project",
      links: {
        demo: "https://lavapp.helioho.st/",
        github: "https://github.com/Apil-Khadka/AccProBook"
      },
      description: "Architected the core financial transaction engine for a business management platform.",
      achievements: [
        "Designed and implemented a pure PHP MVC framework from scratch to understand core architectural patterns.",
        "Built a complete RESTful API for handling complex transaction types (credits, debits, invoices).",
        "Integrated automated PDF generation for real-time financial reporting."
      ],
      tech: ["Vanilla PHP", "MySQL", "MVC Pattern", "REST API"]
    },
    {
      title: "Laravel Backend API Developer",
      company: "Medimanage — Hospital Management System",
      period: "Project",
      links: {
        github: "https://github.com/Apil-Khadka/Hospital-Management-System"
      },
      description: "Developed a secure and scalable backend API for a comprehensive hospital information system.",
      achievements: [
        "Designed a normalized database schema to handle complex relationships between patients, staff, and medical records.",
        "Implemented role-based authentication (RBAC) and data authorization policies.",
        "Optimized API endpoints to handle concurrent requests efficiently."
      ],
      tech: ["Laravel", "MySQL", "API Security", "Vue.js Integration"]
    },
    {
      title: "Full-Stack Developer",
      company: "CourseManager — Educational Platform",
      period: "Project",
      links: {
        github: "https://github.com/Apil-Khadka/Course-Manager"
      },
      description: "Built a course management platform with assessment capabilities.",
      achievements: [
        "Designed the database schema for hierarchical course content (Courses > Modules > Lessons).",
        "Developed a quiz engine with automated grading and result tracking.",
        "Created a unified API layer to serve the React frontend."
      ],
      tech: ["Laravel", "React.js", "MySQL"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Nepal College of Information Technology (NCIT)",
      period: "2023 – 2028 (Expected)",
      details: "Focus on Software Engineering, Database Systems, and Distributed Computing."
    }
  ],
  projects: [
    {
      title: "Blog Manager",
      tech: ["Java", "Spring Boot", "REST API"],
      description: "A robust backend API for content management with secure authentication and CRUD operations. Explored Spring Boot's dependency injection and security modules.",
      link: "https://github.com/Apil-Khadka/Java_Blog_Manager"
    },
    {
      title: "MedicMitra",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      description: "Multi-language medicine information backend. Designed schemas to support localization (Nepali/Maithali) and efficient data retrieval.",
      link: "https://github.com/Apil-Khadka/MedicMitra_Backend"
    },
    {
      title: "Toura",
      tech: ["Backend Architecture", "API Design"],
      description: "Backend system for a tourist-guide connection platform. Modeled the user interaction flow and booking system state machine.",
      link: "https://gitlab.com/aspiring-creators/toura"
    },
    {
      title: "Random Quotes App",
      tech: ["C++", "Qt", "Desktop App"],
      description: "Desktop application for displaying random quotes, built with the Qt framework to explore C++ GUI development.",
      link: "https://github.com/Apil-Khadka/RandomQuotes-QT"
    },
    {
      title: "Sucardi - Car Game",
      tech: ["Godot", "GDScript", "Game Dev"],
      description: "2D car racing game developed using the Godot engine. Implemented physics-based movement and collision detection.",
      link: "https://github.com/Apil-Khadka/sucardi"
    }
  ]
};
