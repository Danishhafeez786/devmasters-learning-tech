import {
  CheckCircle2,
} from "lucide-react";

import Container from "../common/Container";

function CourseOverview({ course }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Overview */}

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Course Overview
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              What This Course Is About
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {course.description}
            </p>

          </div>

          {/* Objectives */}

          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">

            <h3 className="text-xl font-black text-slate-950">
              What You'll Learn
            </h3>

            <div className="mt-6 space-y-4">

              {course.objectives.map((objective) => (
                <div
                  key={objective}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {objective}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default CourseOverview;