import {
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";

function StudentSuccessCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="overflow-hidden rounded-[2rem] bg-teal-700 px-6 py-12 text-center sm:px-10 lg:px-16">

          <div className="mx-auto max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-100">
              Your Journey Can Start Here
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Become Our Next Success Story
            </h2>

            <p className="mt-4 text-base leading-7 text-teal-50">
              Start learning practical skills, work on real projects
              and build confidence for your professional journey.
            </p>

            <Link
              to="/courses"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
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

export default StudentSuccessCTA;