import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.09]">

      {/* =========================
          IMAGE
      ========================== */}

      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">

        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Icon */}
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-teal-700 text-white shadow-lg">
          <Icon size={20} />
        </div>

      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="p-6">

        <h3 className="text-xl font-black text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {service.description}
        </p>

        {/* Features */}

        <div className="mt-5 space-y-2.5">

          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <CheckCircle2
                size={16}
                className="shrink-0 text-teal-400"
              />

              <span>{feature}</span>
            </div>
          ))}

        </div>

        {/* Link */}

        <Link
          to={`/services/${service.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-teal-400 transition-all duration-200 group-hover:gap-3 hover:text-teal-300"
        >
          Explore Service

          <ArrowRight size={17} />
        </Link>

      </div>
    </article>
  );
}

export default ServiceCard;