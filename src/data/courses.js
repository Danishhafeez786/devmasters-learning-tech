import {
  BriefcaseBusiness,
  Code2,
  Palette,
  ShoppingCart,
  Smartphone,
  Server,
} from "lucide-react";

export const courses = [
  {
    id: "full-stack-development",

    title: "Full Stack Development",

    shortTitle: "Full Stack Development",

    category: "development",

    level: "Beginner to Advanced",

    duration: "48 Weeks",

    format: "Practical Training",

    image: "/images/courses/full-stack-development.jpg",

    shortDescription:
      "Learn frontend and backend development and build complete full stack applications.",

    description:
      "Our Full Stack Development course focuses on practical web application development from frontend interfaces to backend APIs and databases. Students learn through guided exercises, practical assignments and real-world projects.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "MongoDB",
      "REST API",
    ],

    benefits: [
      "Build complete web applications",
      "Learn frontend and backend development",
      "Work with databases and APIs",
      "Build practical portfolio projects",
      "Understand modern development workflows",
    ],

    featured: true,

    popular: true,

    objectives: [
      "Understand modern web development fundamentals",
      "Build responsive frontend interfaces",
      "Develop REST APIs",
      "Connect frontend applications with backend services",
      "Work with databases",
      "Build complete full stack applications",
    ],

    curriculum: [
      {
        module: "Module 01",
        title: "Web Development Fundamentals",
        duration: "8 Weeks",
        topics: [
          "Introduction to Web Development",
          "HTML Fundamentals",
          "Semantic HTML",
          "Forms and Validation",
          "CSS Fundamentals",
          "Responsive Design",
        ],
      },

      {
        module: "Module 02",
        title: "JavaScript Development",
        duration: "8 Weeks",
        topics: [
          "JavaScript Fundamentals",
          "Variables and Data Types",
          "Functions",
          "Arrays and Objects",
          "DOM Manipulation",
          "Events",
          "Modern JavaScript",
        ],
      },

      {
        module: "Module 03",
        title: "React Development",
        duration: "10 Weeks",
        topics: [
          "React Fundamentals",
          "Components",
          "Props and State",
          "Hooks",
          "Forms",
          "API Integration",
          "React Router",
        ],
      },

      {
        module: "Module 04",
        title: "Backend Development",
        duration: "10 Weeks",
        topics: [
          "Backend Architecture",
          "Java Fundamentals",
          "Spring Boot",
          "REST APIs",
          "Controllers and Services",
          "Authentication",
        ],
      },

      {
        module: "Module 05",
        title: "Database & Integration",
        duration: "6 Weeks",
        topics: [
          "MongoDB Fundamentals",
          "Database Design",
          "CRUD Operations",
          "Frontend-Backend Integration",
          "Authentication Flow",
        ],
      },

      {
        module: "Module 06",
        title: "Final Project",
        duration: "6 Weeks",
        topics: [
          "Project Planning",
          "Application Development",
          "Testing",
          "Bug Fixing",
          "Deployment Preparation",
          "Project Presentation",
        ],
      },
    ],

    projects: [
      {
        title: "Responsive Business Website",
        description:
          "Build a professional responsive website using modern frontend technologies.",
        image: "/images/projects/business-website.webp",
      },

      {
        title: "Full Stack Management System",
        description:
          "Develop a complete application with frontend, backend, database and authentication.",
        image: "/images/projects/management-system.webp",
      },

      {
        title: "Final Portfolio Project",
        description:
          "Create a complete project that can demonstrate your development skills.",
        image: "/images/projects/final-project.webp",
      },
    ],

    audience: [
      "Students who want to enter software development",
      "Beginners interested in web development",
      "Existing developers who want to expand their skills",
      "Freelancers who want to build web applications",
      "Professionals looking to develop practical technology skills",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Interest in technology and programming",
      "Willingness to practice regularly",
      "No advanced programming experience required",
    ],

    trainingMethod: [
      "Instructor-led practical sessions",
      "Hands-on exercises",
      "Project-based learning",
      "Assignments and practice tasks",
      "Instructor feedback and guidance",
    ],

    certificate: {
      title: "Course Completion Certificate",
      description:
        "Students who successfully complete the required training and course requirements may receive a course completion certificate.",
      image: "/images/institute/certificate.webp",
    },

    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes. The course starts with fundamentals and gradually progresses toward advanced topics.",
      },
      {
        question: "Is the course practical?",
        answer:
          "Yes. The training includes exercises, assignments and practical projects.",
      },
      {
        question: "Will I build projects?",
        answer:
          "Yes. Students work on practical projects throughout the course.",
      },
      {
        question: "Do I need previous programming experience?",
        answer:
          "No advanced programming experience is required. Basic computer knowledge and willingness to learn are recommended.",
      },
    ],
  },

  {
    id: "frontend-development",
    title: "Frontend Development",
    shortTitle: "Frontend",
    description:
      "Build responsive and modern websites and web applications using professional frontend development tools.",
    duration: "24 Weeks",
    level: "Beginner to Professional",
    category: "Development",
    icon: Smartphone,
    image: "/images/courses/frontend-development.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
    featured: true,
  },

  {
    id: "backend-development",
    title: "Backend Development",
    shortTitle: "Backend",
    description:
      "Learn server-side development, APIs, databases and backend architecture through practical projects.",
    duration: "24 Weeks",
    level: "Intermediate",
    category: "Development",
    icon: Server,
    image: "/images/courses/backend-development.jpg",
    technologies: ["Java", "Spring Boot", "REST API", "MongoDB"],
    featured: true,
  },

  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    description:
      "Learn how to design modern, user-friendly interfaces and create professional digital experiences.",
    duration: "12 Weeks",
    level: "Beginner to Professional",
    category: "Design",
    icon: Palette,
    image: "/images/courses/ui-ux-design.jpg",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
    featured: true,
  },

  {
    id: "ebay-virtual-assistant",
    title: "eBay Virtual Assistant",
    shortTitle: "eBay VA",
    description:
      "Learn practical e-commerce skills including product research, listing management, SEO and marketplace operations.",
    duration: "12 Weeks",
    level: "Beginner to Professional",
    category: "E-Commerce",
    icon: ShoppingCart,
    image: "/images/courses/ebay-virtual-assistant.jpg",
    technologies: [
      "Product Hunting",
      "eBay SEO",
      "Listing",
      "Order Management",
    ],
    featured: true,
  },

  {
    id: "canva-digital-skills",
    title: "Canva & Digital Skills",
    shortTitle: "Canva & Digital Skills",
    description:
      "Learn practical graphic design, social media content creation and digital skills using Canva.",
    duration: "12 Weeks",
    level: "Beginner",
    category: "Digital Skills",
    icon: BriefcaseBusiness,
    image: "/images/courses/canva-digital-skills.jpg",
    technologies: [
      "Canva",
      "Social Media",
      "Graphic Design",
      "Content Creation",
    ],
    featured: true,
  },
];

export const courseCategories = [
  {
    id: "development",
    name: "Development",
    description: "Build modern software and web applications.",
  },
  {
    id: "design",
    name: "Design",
    description: "Learn creative and user-focused digital design.",
  },
  {
    id: "digital",
    name: "Digital Skills",
    description: "Develop practical digital and productivity skills.",
  },
  {
    id: "business",
    name: "Business & Professional",
    description: "Build useful professional and business skills.",
  },
];
