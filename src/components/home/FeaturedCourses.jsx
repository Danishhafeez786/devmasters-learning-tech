import {
  ArrowRight,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import CourseCard from "./CourseCard";

import { courses } from "../../data/courses";

function FeaturedCourses() {
  const featuredCourses = courses.filter(
    (course) => course.featured
  );

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =========================
            HEADER
        ========================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              <Sparkles size={14} />

              Featured Courses
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Learn Skills That
              <span className="text-teal-700">
                {" "}Move You Forward
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore our practical training programs designed
              to help students develop technical, creative and
              digital skills through structured learning and
              real-world practice.
            </p>
          </div>

          {/* Desktop View All */}
          <Link
            to="/courses"
            className="hidden shrink-0 items-center gap-2 text-sm font-extrabold text-teal-700 transition-all hover:gap-3 hover:text-teal-800 lg:inline-flex"
          >
            View All Courses

            <ArrowRight size={18} />
          </Link>
        </div>

        {/* =========================
            COURSE GRID
        ========================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

        {/* =========================
            MOBILE VIEW ALL
        ========================== */}

        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-teal-700"
          >
            View All Courses

            <ArrowRight size={18} />
          </Link>
        </div>

        {/* =========================
            BOTTOM INFO
        ========================== */}

        <div className="mt-12 rounded-3xl border border-teal-100 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <BookOpenCheck size={23} />
              </div>

              <div>
                <h3 className="font-black text-slate-950">
                  Looking for the right course?
                </h3>

                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                  Explore the complete course catalog or contact
                  us to discuss which learning path best matches
                  your goals.
                </p>
              </div>

            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              Talk to Us

              <ArrowRight size={17} />
            </Link>

          </div>
        </div>

      </Container>
    </section>
  );
}

export default FeaturedCourses;