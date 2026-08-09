import {
  ArrowRight,
  Camera,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import StudentExperienceCard from "./StudentExperienceCard";

import { studentExperience } from "../../data/studentExperience";

function StudentExperience() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =================================
            HEADER
        ================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              <Sparkles size={14} />

              Student Experience
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Learning Happens
              <span className="text-teal-700">
                {" "}Beyond the Classroom
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              From classroom learning and practical activities to
              seminars, projects and student collaboration, we
              encourage students to actively participate in their
              learning journey.
            </p>

          </div>

          {/* Gallery Button */}

          <Link
            to="/gallery"
            className="hidden shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-700 shadow-sm transition-all hover:border-teal-200 hover:text-teal-700 lg:inline-flex"
          >
            <Camera size={17} />

            View Full Gallery

            <ArrowRight size={17} />
          </Link>

        </div>

        {/* =================================
            PHOTO GRID
        ================================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">

          {studentExperience.map((item) => (
            <div
              key={item.id}
              className={
                item.size === "large"
                  ? "lg:col-span-2 lg:row-span-2"
                  : item.size === "medium"
                  ? "lg:col-span-1"
                  : "lg:col-span-1"
              }
            >
              <StudentExperienceCard item={item} />
            </div>
          ))}

        </div>

        {/* =================================
            MOBILE GALLERY BUTTON
        ================================== */}

        <div className="mt-8 flex justify-center lg:hidden">

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-teal-700"
          >
            <Camera size={17} />

            Explore Student Gallery

            <ArrowRight size={17} />
          </Link>

        </div>

      </Container>
    </section>
  );
}

export default StudentExperience;