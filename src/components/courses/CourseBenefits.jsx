import {
  CheckCircle2,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react";

import Container from "../common/Container";

const benefits = [
  {
    icon: Code2,
    title: "Practical Learning",
    description:
      "Focus on applying concepts through exercises and practical activities.",
  },
  {
    icon: GraduationCap,
    title: "Project-Based Training",
    description:
      "Build projects that help turn learning into practical experience.",
  },
  {
    icon: Users,
    title: "Instructor Guidance",
    description:
      "Get guidance, feedback and support throughout your learning journey.",
  },
  {
    icon: CheckCircle2,
    title: "Skill-Focused Programs",
    description:
      "Learn skills selected around practical technology and professional needs.",
  },
];

function CourseBenefits() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Why Learn With Us
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            More Than Just a Course
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Our goal is to help learners understand, practice
            and apply what they learn.
          </p>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-black text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default CourseBenefits;