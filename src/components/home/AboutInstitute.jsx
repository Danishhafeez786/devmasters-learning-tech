import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";

function AboutInstitute() {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              IMAGE / VISUAL
          ========================== */}

          <div className="relative mx-auto w-full max-w-xl">

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-xl">

              {/* Temporary visual */}
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950">

                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <GraduationCap
                      size={48}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
                    DevMastersLearningTech
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Practical Learning Environment
                  </p>
                </div>
              </div>

              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-md">
                <p className="text-sm font-bold text-white">
                  Learn Through Practice
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Training, projects and practical activities
                  designed around real skills.
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-right-6">
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
          </div>

          {/* =========================
              CONTENT
          ========================== */}

          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              <Sparkles size={14} />

              About Our Institute
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Building Skills Through
              <span className="block text-teal-700">
                Practical Learning
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              DevMastersLearningTech is focused on helping students
              develop practical technology and digital skills through
              structured training, hands-on practice and real-world
              projects.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our approach goes beyond simply teaching theory. We
              encourage students to practice what they learn, build
              projects, develop portfolios and understand how their
              skills can be applied in professional environments.
            </p>

            {/* Key Points */}
            <div className="mt-7 space-y-4">

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-teal-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Practical & Hands-On Training
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Students learn by doing instead of relying
                    only on theory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-teal-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Real-World Project Experience
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Training is connected with practical projects
                    and real development scenarios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-teal-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Career-Focused Learning
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Students develop skills that can support
                    freelancing, employment and professional growth.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-700"
              >
                Learn More About Us

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutInstitute;