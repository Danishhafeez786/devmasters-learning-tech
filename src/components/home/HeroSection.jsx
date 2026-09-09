import {
  ArrowRight,
  CheckCircle2,
  Code2,
  GraduationCap,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-teal-700/20 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-100px] h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <Container>
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-300">
              <Sparkles size={15} />

              Practical IT Training
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Learn Practical Skills.

              <span className="mt-2 block text-teal-400">
                Build Your Career.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Master in-demand technology and digital skills through
              practical training, real-world projects, portfolio
              development and career-focused learning at
              DevMastersLearningTech.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-teal-900/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-500"
              >
                Explore Courses

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Apply for Admission
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3">

              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-teal-400"
                />

                Practical Learning
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-teal-400"
                />

                Real Projects
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-teal-400"
                />

                Career Skills
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            {/* Main visual */}
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">

              {/* Temporary image area */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_35%)]" />

                <div className="relative flex flex-col items-center px-8 text-center">

                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <GraduationCap
                      size={48}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
                    DevMastersLearningTech
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    Learn.
                    <span className="text-teal-400">
                      Build.
                    </span>
                    Grow.
                  </h2>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                    Practical training designed to help students
                    build real skills and real projects.
                  </p>
                </div>
              </div>

              {/* Bottom card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <Code2 size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Industry-Focused Training
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Learn skills you can actually use.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Floating Card */}
            <div className="absolute -left-3 top-10 rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <p className="text-xl font-black text-slate-950">
                    7+
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Video Card */}
            <Link
              to="/videos"
              className="absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-xl transition-transform duration-200 hover:-translate-y-1 sm:-right-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white">
                <PlayCircle size={21} />
              </div>

              <div>
                <p className="text-sm font-black text-slate-950">
                  Watch Our Videos
                </p>

                <p className="text-xs text-slate-500">
                  Training & student activities
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;