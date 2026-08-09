import {
  Code2,
  Database,
  ShoppingCart,
  Store,
} from "lucide-react";

export const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    shortTitle: "Web Development",
    description:
      "Modern, responsive websites and web applications designed around your business goals and user needs.",
    features: [
      "Responsive Design",
      "Modern Frontend",
      "Business Websites",
    ],
    image: "/images/projects/web-development.jpg",
  },

  {
    id: "full-stack-development",
    icon: Database,
    title: "Full Stack Development",
    shortTitle: "Full Stack",
    description:
      "Complete web application development covering frontend, backend, APIs, databases and application architecture.",
    features: [
      "Frontend & Backend",
      "REST APIs",
      "Database Integration",
    ],
    image: "/images/projects/full-stack-development.jpg",
  },

  {
    id: "ecommerce-solutions",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    description:
      "Practical digital solutions for businesses looking to establish, improve or manage their online selling operations.",
    features: [
      "Online Store Solutions",
      "Product Management",
      "E-Commerce Integration",
    ],
    image: "/images/projects/ecommerce-solutions.jpg",
  },

  {
    id: "business-pos-solutions",
    icon: Store,
    title: "Business & POS Solutions",
    shortTitle: "Business Software",
    description:
      "Business software and POS solutions designed to help organizations manage operations, sales, inventory and daily workflows.",
    features: [
      "POS Systems",
      "Inventory Management",
      "Business Workflows",
    ],
    image: "/images/projects/business-pos.jpg",
  },
];