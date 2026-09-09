import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";

import { siteSettings } from "../../data/siteSettings";

function FinalCTA() {
  const { admission, cta } = siteSettings;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">

          {/* =================================
              BACKGROUND DECORATION
          ================================== */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* =================================
                BADGE
            ================================== */}

            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-300">

              <Sparkles size={14} />

              {admission.sessionLabel}
            </div>

            {/* =================================
                HEADING
            ================================== */}

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              {cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              {cta.subtitle}
            </p>

            {/* =================================
                SESSION INFORMATION
            ================================== */}

            <div className="mx-auto mt-7 inline-flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 sm:flex-row sm:gap-5">

              <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                Session Starts
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="font-black text-yellow-400">
                {admission.startDate}
              </div>

            </div>

            {/* =================================
                BUTTONS
            ================================== */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Explore Courses

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <MessageCircle size={18} />

                Contact Us
              </Link>

            </div>

            {/* =================================
                TRUST POINTS
            ================================== */}

            <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3">

              {[
                "Practical Training",
                "Project-Based Learning",
                "Professional Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400"
                >
                  <CheckCircle2
                    size={15}
                    className="text-teal-400"
                  />

                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default FinalCTA;