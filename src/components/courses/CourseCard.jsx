import {
  ArrowRight,
  Clock3,
  Layers3,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

function CourseCard({ course }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">

        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Featured */}

        {course.featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-[11px] font-extrabold text-slate-950">

            <Sparkles size={12} />

            Featured

          </div>
        )}

        {/* Level */}

        <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur">
          {course.level}
        </div>

      </div>

      {/* Content */}

      <div className="p-5 sm:p-6">

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Layers3 size={14} />
            {course.format}
          </span>

        </div>

        <h3 className="mt-4 text-xl font-black text-slate-950">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {course.shortDescription}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">

          {course.technologies
            .slice(0, 4)
            .map((technology) => (
              <span
                key={technology}
                className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-600"
              >
                {technology}
              </span>
            ))}

          {course.technologies.length > 4 && (
            <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-500">
              +{course.technologies.length - 4}
            </span>
          )}

        </div>

        {/* Link */}

        <Link
          to={`/courses/${course.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 transition-colors hover:text-teal-900"
        >
          View Course Details

          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />

        </Link>

      </div>

    </article>
  );
}

export default CourseCard;