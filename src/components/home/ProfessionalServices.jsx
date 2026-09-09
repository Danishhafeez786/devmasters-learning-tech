import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";
import ServiceCard from "./ServiceCard";

import { services } from "../../data/services";

function ProfessionalServices() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">

      {/* =================================
          BACKGROUND DECORATION
      ================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-700/10 blur-3xl" />

      <Container>

        {/* =================================
            HEADER
        ================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
            <Sparkles size={14} />

            Professional Services
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Learning to
            <span className="text-teal-400">
              {" "}Real-World Solutions
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Our professional experience extends beyond the
            classroom. We also work on practical technology,
            software and digital solutions for businesses and
            organizations.
          </p>

        </div>

        {/* =================================
            SERVICE CARDS
        ================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

        {/* =================================
            BOTTOM TRUST STRIP
        ================================== */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">

          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                <BriefcaseBusiness size={23} />
              </div>

              <div>
                <h3 className="font-black text-white">
                  Have a Technology Project?
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                  Tell us what you are building or what problem
                  you need to solve, and let's discuss a practical
                  solution.
                </p>
              </div>

            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Discuss Your Project

              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </Container>
    </section>
  );
}

export default ProfessionalServices;