import {
  BookOpen,
  CheckCircle2,
  Code2,
  TrendingUp,
} from "lucide-react";

import Container from "../common/Container";

import { aboutPageData } from "../../data/about";

const icons = [
  BookOpen,
  Code2,
  CheckCircle2,
  TrendingUp,
];

function TrainingPhilosophy() {
  const { philosophy } = aboutPageData;

  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
            Our Training Philosophy
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {philosophy.title}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            {philosophy.description}
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {philosophy.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                  <Icon size={22} />
                </div>

                <div className="mt-5">

                  <span className="text-xs font-bold text-teal-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default TrainingPhilosophy;