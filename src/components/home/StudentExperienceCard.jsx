import { ArrowUpRight } from "lucide-react";

function StudentExperienceCard({ item }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-slate-100 ${
        item.size === "large"
          ? "min-h-[420px] lg:row-span-2"
          : item.size === "medium"
          ? "min-h-[200px]"
          : "min-h-[200px]"
      }`}
    >
      {/* Image */}

      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

      {/* Content */}

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

        <div className="flex items-end justify-between gap-4">

          <div>

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
              {item.category}
            </span>

            <h3 className="mt-3 text-xl font-black text-white">
              {item.title}
            </h3>

            <p className="mt-2 max-w-md text-sm leading-5 text-slate-200/80">
              {item.description}
            </p>

          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={19} />
          </div>

        </div>

      </div>
    </article>
  );
}

export default StudentExperienceCard;