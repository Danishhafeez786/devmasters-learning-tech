import {
  CheckCircle2,
} from "lucide-react";

import Container from "../common/Container";

function TrainingMethod({ course }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            How We Teach
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Practical Training Approach
          </h2>

        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">

          {course.trainingMethod.map((method, index) => (
            <div
              key={method}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-sm font-black text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={17}
                  className="text-teal-600"
                />

                <span className="text-sm font-bold text-slate-700">
                  {method}
                </span>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default TrainingMethod;