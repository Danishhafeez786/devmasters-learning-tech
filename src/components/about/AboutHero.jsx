import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

import Container from "../common/Container";
import { aboutPageData } from "../../data/about";

function AboutHero() {
  const { hero } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt="DevMastersLearningTech institute"
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <Container>
        <div className="relative flex min-h-[520px] items-center py-20 sm:min-h-[580px] lg:min-h-[620px]">

          <div className="max-w-3xl">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-300">

              <Sparkles size={14} />

              {hero.badge}

            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {hero.description}
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Explore Our Courses

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-white/10"
              >
                Talk to Us
              </Link>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
}

export default AboutHero;