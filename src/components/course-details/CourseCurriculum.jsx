import {
  CheckCircle2,
  ChevronDown,
  Clock3,
} from "lucide-react";

import Container from "../common/Container";

function CourseCurriculum({ course }) {
  return (
    <section
      id="curriculum"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Course Curriculum
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Your Learning Roadmap
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A structured learning path that moves from fundamentals
            toward practical application and project development.
          </p>

        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">

          {course.curriculum.map((module, index) => (
            <details
              key={module.module}
              open={index === 0}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                      {module.module}
                    </p>

                    <h3 className="mt-1 text-base font-black text-slate-950 sm:text-lg">
                      {module.title}
                    </h3>

                  </div>

                </div>

                <ChevronDown
                  size={20}
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                />

              </summary>

              <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">

                <div className="mb-5 flex items-center gap-2 text-xs font-bold text-slate-500">

                  <Clock3 size={14} />

                  {module.duration}

                </div>

                <div className="grid gap-3 sm:grid-cols-2">

                  {module.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-start gap-2"
                    >

                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-teal-600"
                      />

                      <span className="text-sm leading-6 text-slate-600">
                        {topic}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </details>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default CourseCurriculum;