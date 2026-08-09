import { ArrowUpRight } from "lucide-react";

function GalleryCard({ item, large = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-slate-100 ${
        large
          ? "min-h-[420px] lg:min-h-[500px]"
          : "min-h-[240px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

      {/* Category */}

      <div className="absolute left-4 top-4">
        <span className="rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          {item.category}
        </span>
      </div>

      {/* Content */}

      <div className="absolute inset-x-0 bottom-0 p-5">

        <div className="flex items-end justify-between gap-4">

          <div>
            <h3
              className={`font-black text-white ${
                large ? "text-2xl" : "text-lg"
              }`}
            >
              {item.title}
            </h3>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={18} />
          </div>

        </div>

      </div>
    </article>
  );
}

export default GalleryCard;