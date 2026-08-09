import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import { trainingProcess } from "../../data/trainingProcess";

function TrainingProcess() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =================================
            SECTION HEADER
        ================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-700">
            <Sparkles size={14} />

            How We Teach
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Learn. Practice.
            <span className="text-teal-700">
              {" "}Build. Grow.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Our training approach connects classroom learning with
            practical application so students can understand concepts,
            practice their skills and build meaningful projects.
          </p>

        </div>

        {/* =================================
            DESKTOP PROCESS
        ================================== */}

        <div className="relative mt-16 hidden lg:block">

          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-8 h-px bg-slate-200" />

          {/* Active Line */}
          <div className="absolute left-[10%] top-8 h-px w-[80%] bg-teal-200" />

          <div className="relative grid grid-cols-5 gap-6">

            {trainingProcess.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group text-center"
                >

                  {/* Number / Icon */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-teal-700 text-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

                    <Icon size={25} />

                    <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-yellow-400 text-[10px] font-black text-slate-950">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-lg font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* =================================
            MOBILE / TABLET PROCESS
        ================================== */}

        <div className="relative mt-12 lg:hidden">

          {/* Vertical line */}
          <div className="absolute bottom-8 left-6 top-8 w-px bg-teal-100" />

          <div className="space-y-8">

            {trainingProcess.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative flex gap-5"
                >

                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-white bg-teal-700 text-white shadow-md">
                    <Icon size={19} />

                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-[9px] font-black text-slate-950">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <h3 className="font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* =================================
            PRACTICAL LEARNING HIGHLIGHT
        ================================== */}

        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950">

          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-12">

            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-700/20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-teal-400">
                  <CheckCircle2 size={17} />

                  Practical Training
                </div>

                <h3 className="mt-3 max-w-2xl text-2xl font-black text-white sm:text-3xl">
                  Don't Just Learn the Concept.
                  Learn How to Use It.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  From classroom exercises to practical projects,
                  we encourage students to apply what they learn
                  and continuously improve their skills.
                </p>

              </div>

              <Link
                to="/courses"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Start Learning

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}

export default TrainingProcess;