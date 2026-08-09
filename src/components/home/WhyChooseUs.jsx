import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import { whyChooseUs } from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-700">
            <Sparkles size={14} />

            Why Choose Us
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            More Than Just a
            <span className="text-teal-700">
              {" "}Training Course
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We focus on helping students understand, practice and
            apply their skills so they can continue learning and
            growing beyond the classroom.
          </p>
        </div>

        {/* =========================
            BENEFIT CARDS
        ========================== */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >

                {/* Decorative Number */}
                <span className="pointer-events-none absolute -right-2 -top-6 text-8xl font-black leading-none text-slate-50 transition-colors duration-300 group-hover:text-teal-50">
                  0{item.id}
                </span>

                {/* Icon */}
                <div className="relative flex h-13 w-13 h-13 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* Bottom indicator */}
                <div className="relative mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-teal-700">
                  <CheckCircle2 size={15} />

                  Practical Approach
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}

        <div className="mt-12 overflow-hidden rounded-3xl bg-slate-950">
          <div className="relative px-6 py-10 sm:px-10 lg:px-12">

            {/* Background decoration */}
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-700/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-400">
                  Ready to Start?
                </p>

                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Turn Your Interest Into Practical Skills.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                  Explore our courses and find a learning path
                  that matches your goals.
                </p>
              </div>

              <Link
                to="/courses"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Explore Courses

                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}

export default WhyChooseUs;