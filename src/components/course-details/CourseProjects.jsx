import Container from "../common/Container";

function CourseProjects({ course }) {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
              Practical Work
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Projects You'll Build
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Turn your learning into practical experience through
              guided projects and assignments.
            </p>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {course.projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >

              <div className="aspect-[16/10] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default CourseProjects;