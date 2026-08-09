import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "../common/Container";

function SuccessStories({ stories }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Success Stories
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            From Learning to Practical Skills
          </h2>

        </div>

        <div className="mt-12 space-y-8">

          {stories.map((story, index) => (
            <article
              key={story.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >

              <div className="grid lg:grid-cols-[0.35fr_0.65fr]">

                <div className="min-h-[260px]">

                  <img
                    src={story.image}
                    alt={story.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="p-6 sm:p-8 lg:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700">
                      {story.course}
                    </span>

                    <span className="text-xs font-bold text-slate-400">
                      Success Story #{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-black text-slate-950">
                    {story.name}
                  </h3>

                  <div className="mt-7 grid gap-6 md:grid-cols-3">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        Starting Point
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {story.before}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        Training Journey
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {story.training}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                        Achievement
                      </p>

                      <div className="mt-2 flex items-start gap-2">

                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-teal-600"
                        />

                        <p className="text-sm font-semibold leading-6 text-slate-700">
                          {story.achievement}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default SuccessStories;