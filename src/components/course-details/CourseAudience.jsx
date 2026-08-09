import {
  CheckCircle2,
  UserRoundCheck,
} from "lucide-react";

import Container from "../common/Container";

function CourseAudience({ course }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Audience */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <UserRoundCheck size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-black text-slate-950">
              Who Should Join?
            </h2>

            <div className="mt-6 space-y-4">

              {course.audience.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Prerequisites */}

          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">

            <h2 className="text-2xl font-black text-slate-950">
              Prerequisites
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Recommended preparation before starting the course.
            </p>

            <div className="mt-6 space-y-4">

              {course.prerequisites.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    {item}
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

export default CourseAudience;