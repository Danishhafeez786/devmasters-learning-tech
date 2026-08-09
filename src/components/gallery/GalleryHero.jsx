import {
  Camera,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container>

        <div className="relative py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-yellow-300">

              <Sparkles size={14} />

              Our Gallery

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">

              Explore Our

              <span className="block text-teal-400">
                Learning Environment
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Take a closer look at our institute, students,
              practical training sessions, seminars, workshops,
              projects and learning activities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
              >
                <Camera size={18} />

                Explore Gallery
              </a>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white">

                <ImageIcon size={18} />

                Real Institute Moments

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default GalleryHero;