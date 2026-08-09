import {
  ArrowDown,
  BookOpen,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto flex min-h-125 max-w-4xl flex-col items-center justify-center py-20 text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-300">

            <BookOpen size={14} />

            Our Courses

          </div>

          {/* Heading */}

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Skills That
            <span className="text-teal-400">
              {" "}Create Opportunities
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore practical technology, design and professional
            skill courses designed to help you learn, practice and
            build useful real-world skills.
          </p>

          {/* CTA */}

          <a
            href="#all-courses"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Explore Courses

            <ArrowDown size={18} />
          </a>

          {/* Bottom trust points */}

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">

            {[
              "Practical Training",
              "Project-Based Learning",
              "Professional Guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-slate-500"
              >
                <Sparkles
                  size={13}
                  className="text-teal-400"
                />

                {item}
              </div>
            ))}

          </div>

        </div>
      </Container>

    </section>
  );
}

export default CoursesHero;