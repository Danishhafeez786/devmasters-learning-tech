import {
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Rocket,
} from "lucide-react";

import Container from "../common/Container";

function LearningJourney() {
  const steps = [
    {
      icon: BookOpen,
      title: "Learn",
      description:
        "Understand concepts through structured instructor-led training.",
    },
    {
      icon: Lightbulb,
      title: "Practice",
      description:
        "Apply concepts through exercises, assignments and practical tasks.",
    },
    {
      icon: CheckCircle2,
      title: "Build",
      description:
        "Create projects that turn theoretical knowledge into practical skills.",
    },
    {
      icon: Rocket,
      title: "Grow",
      description:
        "Develop confidence and a portfolio that supports your next step.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Student Journey
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Learn. Practice. Build. Grow.
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={22} />
                </div>

                <span className="mt-5 block text-xs font-black text-slate-400">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default LearningJourney;