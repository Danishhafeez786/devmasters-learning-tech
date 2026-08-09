import {
  Code2,
} from "lucide-react";

import Container from "../common/Container";

function CourseTechnologies({ course }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <Code2 size={23} />
          </div>

          <span className="mt-5 block text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Tools & Technologies
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            What You'll Work With
          </h2>

        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">

          {course.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm"
            >
              {technology}
            </span>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default CourseTechnologies;