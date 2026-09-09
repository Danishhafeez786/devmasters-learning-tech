import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  Layers3,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";

function CourseDetailsHero({ course }) {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container>

        <div className="relative py-10 sm:py-14 lg:py-20">

          {/* Back */}

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />

            Back to Courses
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

            {/* Content */}

            <div>

              {course.featured && (
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-yellow-300">

                  <Sparkles size={14} />

                  Featured Course

                </div>
              )}

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {course.shortDescription}
              </p>

              {/* Quick info */}

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                  <Clock3
                    size={17}
                    className="text-teal-400"
                  />

                  {course.duration}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                  <Layers3
                    size={17}
                    className="text-teal-400"
                  />

                  {course.level}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                  <BookOpen
                    size={17}
                    className="text-teal-400"
                  />

                  {course.format}
                </div>

              </div>

              {/* CTA */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
                >
                  Enroll / Ask About Admission

                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10"
                >
                  View Curriculum
                </a>

              </div>

            </div>

            {/* Image */}

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src={course.image}
                alt={course.title}
                className="aspect-[4/3] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default CourseDetailsHero;