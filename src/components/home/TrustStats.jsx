import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import AnimatedCounter from "../common/AnimatedCounter";

import { homeStats } from "../../data/homeStats";

function TrustStats() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <Container>

        {/* =========================
            INTRO
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            <Sparkles size={14} />

            Learn With Confidence
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Experience That Turns Learning Into Practical Skills
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            At DevMastersLearningTech, we focus on practical
            learning, real projects and skills that students can
            apply beyond the classroom.
          </p>
        </div>

        {/* =========================
            STATISTICS
        ========================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {homeStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
              >

                {/* Decorative background */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal-50 transition-transform duration-300 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={22} />
                </div>

                {/* Number */}
                <div className="relative mt-6 flex items-baseline">
                  <span className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                    <AnimatedCounter value={stat.value} />
                  </span>

                  <span className="ml-1 text-2xl font-black text-teal-700">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="relative mt-2 text-base font-bold text-slate-900">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="relative mt-2 text-sm leading-6 text-slate-500">
                  {stat.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* =========================
            TRUST STRIP
        ========================== */}

        <div className="mt-10 rounded-2xl border border-teal-100 bg-teal-50/70 p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal-700 shadow-sm">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Practical Learning. Real Skills. Career Focus.
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Learn through guided practice, projects,
                  activities and hands-on technical training.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-bold text-teal-700 transition-colors hover:text-teal-800"
            >
              Learn More About Us

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* =========================
            TRUST POINTS
        ========================== */}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <CheckCircle2
              size={20}
              className="shrink-0 text-teal-700"
            />

            <span className="text-sm font-semibold text-slate-700">
              Practical Training
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <CheckCircle2
              size={20}
              className="shrink-0 text-teal-700"
            />

            <span className="text-sm font-semibold text-slate-700">
              Real-World Projects
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <CheckCircle2
              size={20}
              className="shrink-0 text-teal-700"
            />

            <span className="text-sm font-semibold text-slate-700">
              Career-Focused Skills
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default TrustStats;