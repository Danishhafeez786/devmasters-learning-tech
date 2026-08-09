import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  FolderKanban,
} from "lucide-react";

import Container from "../common/Container";

function WhyEnroll() {

  const benefits = [
    {
      icon: BriefcaseBusiness,
      title: "Practical Skills",
      description:
        "Focus on practical knowledge that students can apply to real projects.",
    },

    {
      icon: FolderKanban,
      title: "Project-Based Learning",
      description:
        "Students practice concepts by working on practical assignments and projects.",
    },

    {
      icon: Award,
      title: "Experienced Training",
      description:
        "Learn through structured training designed around real-world skills.",
    },

    {
      icon: CheckCircle2,
      title: "Career-Focused Learning",
      description:
        "Build confidence, practical experience and a stronger professional portfolio.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            More Than Just A Course
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Our goal is to help students develop practical
            skills that they can continue using beyond the classroom.
          </p>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">

                  <Icon size={22} />

                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
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

export default WhyEnroll;