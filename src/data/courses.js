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
    shortTitle: "Full Stack",
    description:
      "Learn modern frontend and backend development and build complete web applications from start to finish.",
    duration: "48 Weeks",
    level: "Professional",
    category: "Development",
    icon: Code2,
    image: "/images/courses/full-stack-development.jpg",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Tailwind CSS",
      "MongoDB",
    ],
    featured: true,
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
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
    ],
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
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MongoDB",
    ],
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
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
    ],
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