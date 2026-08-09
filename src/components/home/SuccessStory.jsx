import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

import { successStories } from "../../data/successStories";

function SuccessStory() {
  const story = successStories[0];

  if (!story) return null;

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <Container>

        <div className="overflow-hidden rounded-[2rem] bg-slate-950">

          <div className="grid lg:grid-cols-2">

            {/* =========================
                IMAGE
            ========================== */}

            <div className="relative min-h-[380px] lg:min-h-[520px]">

              <img
                src={story.image}
                alt={story.studentName}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r" />

              <div className="absolute bottom-6 left-6">

                <div className="rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  Student Success Story
                </div>

              </div>

            </div>

            {/* =========================
                CONTENT
            ========================== */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-teal-400">
                <Sparkles size={16} />

                {story.course}
              </div>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                {story.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                {story.story}
              </p>

              {/* Journey */}

              <div className="mt-7 space-y-3">

                {story.journey.map((step) => (
                  <div
                    key={step}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-teal-400"
                    />

                    <span className="text-sm font-semibold text-slate-300">
                      {step}
                    </span>
                  </div>
                ))}

              </div>

              {/* Project */}

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Practical Project
                </p>

                <p className="mt-2 font-bold text-white">
                  {story.project}
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default SuccessStory;