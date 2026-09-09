import {
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";

function GalleryCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-10 lg:px-16">

          <div className="mx-auto max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
              Start Your Journey
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Want To Be Part Of Our Next Gallery?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Join DevMastersLearningTech and start building
              your own practical learning journey.
            </p>

            <Link
              to="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
            >
              Explore Courses

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default GalleryCTA;