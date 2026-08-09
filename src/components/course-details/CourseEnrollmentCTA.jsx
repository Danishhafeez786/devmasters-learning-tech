import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";

function CourseEnrollmentCTA({ course }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-10 lg:px-16">

          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
              Ready to Start?
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Start Learning {course.shortTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Have questions about admission, schedule, fees or
              course details? Contact us and we'll guide you.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 hover:bg-yellow-300"
              >
                Ask About Admission

                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white hover:bg-white/10"
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default CourseEnrollmentCTA;