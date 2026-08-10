import {
  ArrowRight,
  Clock3,
  Layers3,
} from "lucide-react";

import { Link } from "react-router";

function CourseCard({ course }) {
  const Icon = course.icon;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl">

      {/* =========================
          IMAGE
      ========================== */}

      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">

        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            {course.category}
          </span>
        </div>

        {/* Icon */}
        <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/90 text-teal-700 shadow-lg backdrop-blur-sm">
          <Icon size={20} />
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="p-5 sm:p-6">

        <h3 className="text-xl font-black tracking-tight text-slate-950">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {course.description}
        </p>

        {/* Course Meta */}
        <div className="mt-5 flex flex-wrap gap-2">

          <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
            <Clock3 size={14} className="text-teal-700" />
            {course.duration}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
            <Layers3 size={14} className="text-teal-700" />
            {course.level}
          </span>

        </div>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {course.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-teal-50 px-2.5 py-1 text-[11px] font-bold text-teal-700"
            >
              {technology}
            </span>
          ))}

          {course.technologies.length > 3 && (
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500">
              +{course.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-slate-100" />

        {/* Details Link */}
        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 transition-all duration-200 group-hover:gap-3 hover:text-teal-800"
        >
          View Course Details

          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default CourseCard;