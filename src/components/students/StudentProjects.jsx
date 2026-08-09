import {
  Code2,
} from "lucide-react";

import Container from "../common/Container";

function StudentProjects({ projects }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Practical Projects
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              What Our Students Build
            </h2>

          </div>

          <Code2
            size={34}
            className="hidden text-teal-600 sm:block"
          />

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

              <div className="aspect-[16/10] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase tracking-wide text-teal-700">
                  {project.course}
                </span>

                <h3 className="mt-2 text-xl font-black text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default StudentProjects;