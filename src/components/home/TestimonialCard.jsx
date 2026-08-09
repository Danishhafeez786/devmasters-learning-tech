import {
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

      {/* =========================
          STUDENT HEADER
      ========================== */}

      <div className="flex items-center gap-4">

        {/* Student Image */}

        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Student Info */}

        <div className="min-w-0">

          <div className="flex items-center gap-1.5">

            <h3 className="truncate font-black text-slate-950">
              {testimonial.name}
            </h3>

            <CheckCircle2
              size={16}
              className="shrink-0 text-teal-600"
            />

          </div>

          <p className="mt-1 text-xs font-semibold text-slate-500">
            {testimonial.course}
          </p>

        </div>

      </div>

      {/* =========================
          RATING
      ========================== */}

      <div className="mt-5 flex items-center gap-1">

        {Array.from({
          length: testimonial.rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="currentColor"
            className="text-yellow-500"
          />
        ))}

      </div>

      {/* =========================
          QUOTE
      ========================== */}

      <div className="relative mt-5">

        <Quote
          size={38}
          className="absolute -top-2 right-0 text-teal-100"
        />

        <p className="relative text-sm leading-7 text-slate-600">
          "{testimonial.testimonial}"
        </p>

      </div>

      {/* =========================
          ACHIEVEMENT
      ========================== */}

      {testimonial.achievement && (
        <div className="mt-6 border-t border-slate-100 pt-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Learning Achievement
          </p>

          <div className="mt-2 flex items-start gap-2">

            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-teal-600"
            />

            <p className="text-sm font-semibold text-slate-700">
              {testimonial.achievement}
            </p>

          </div>

        </div>
      )}

    </article>
  );
}

export default TestimonialCard;