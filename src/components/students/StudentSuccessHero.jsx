import {
  ArrowDown,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

function StudentSuccessHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container>

        <div className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-yellow-300">

              <Sparkles size={14} />

              Student Success

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">

              Real Students.

              <span className="block text-teal-400">
                Real Skills.
              </span>

              Real Experiences.

            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore the learning journeys, practical projects,
              training experiences and achievements of students
              at DevMastersLearningTech.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#student-gallery"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
              >
                Explore Student Stories

                <ArrowDown size={18} />
              </a>

              <a
                href="#student-videos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                <PlayCircle size={18} />

                Watch Experiences
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-2 shadow-2xl">

              <img
                src="/images/students/student-03.jpg"
                alt="Students learning at DevMastersLearningTech"
                className="aspect-4/3 w-full rounded-3xl object-cover"
              />

            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur">

              <p className="text-xs font-semibold text-slate-400">
                Practical Learning
              </p>

              <p className="mt-1 text-sm font-black text-white">
                Learn • Practice • Build

              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default StudentSuccessHero;