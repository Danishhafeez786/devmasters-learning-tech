import {
  Quote,
  Star,
} from "lucide-react";

import Container from "../common/Container";

function StudentTestimonials({ testimonials }) {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
            Student Testimonials
          </span>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            What Students Say
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            Real feedback from students about their learning
            experience and practical training.
          </p>

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >

              <Quote
                size={30}
                className="text-teal-400"
              />

              <div className="mt-5 flex gap-1">

                {Array.from({
                  length: testimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                "{testimonial.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>

                  <p className="text-sm font-black text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {testimonial.course}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default StudentTestimonials;