import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import TestimonialCard from "./TestimonialCard";

import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =================================
            HEADER
        ================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-700">
            <Sparkles size={14} />

            Student Testimonials
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Hear From Our
            <span className="text-teal-700">
              {" "}Students
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Every student's journey is different. Here are some
            experiences and learning outcomes shared by our
            students.
          </p>

        </div>

        {/* =================================
            TESTIMONIAL CARDS
        ================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}

        </div>

        {/* =================================
            BOTTOM CTA
        ================================== */}

        <div className="mt-12 rounded-3xl bg-slate-950 p-6 sm:p-8 lg:p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                <MessageCircle size={23} />
              </div>

              <div>

                <h3 className="font-black text-white">
                  Ready to Start Your Own Learning Journey?
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                  Explore our courses and find a program that
                  matches your learning and career goals.
                </p>

              </div>

            </div>

            <Link
              to="/courses"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-yellow-300"
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

export default Testimonials;