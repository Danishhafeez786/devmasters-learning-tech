import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react";

export const homeStats = [
  {
    id: 1,
    value: 7,
    suffix: "+",
    label: "Years Professional Experience",
    description: "Industry & development experience",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    value: 16,
    suffix: "+",
    label: "Years Teaching Experience",
    description: "Practical technical education",
    icon: GraduationCap,
  },
  {
    id: 3,
    value: 100,
    suffix: "+",
    label: "Students Trained",
    description: "Learning practical digital skills",
    icon: Users,
    isPlaceholder: true,
  },
  {
    id: 4,
    value: 30,
    suffix: "+",
    label: "Practical Projects",
    description: "Real-world learning projects",
    icon: Code2,
    isPlaceholder: true,
  },
];