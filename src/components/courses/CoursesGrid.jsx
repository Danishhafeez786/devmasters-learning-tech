import { useMemo, useState } from "react";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import Container from "../common/Container";
import CourseCard from "./CourseCard";
import CourseCategories from "./CourseCategories";

import { courses } from "../../data/courses";

function CoursesGrid() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {

      const matchesCategory =
        activeCategory === "all" ||
        course.category === activeCategory;

      const search =
        searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        course.title.toLowerCase().includes(search) ||
        course.shortDescription
          .toLowerCase()
          .includes(search) ||
        course.technologies.some((technology) =>
          technology.toLowerCase().includes(search)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="all-courses" className="bg-slate-50">

      <CourseCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <Container>

        {/* Search Header */}

        <div className="flex flex-col gap-5 border-t border-slate-200 py-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">

              <SlidersHorizontal size={14} />

              Course Directory

            </span>

            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
              Explore Our Courses
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {filteredCourses.length} course
              {filteredCourses.length !== 1
                ? "s"
                : ""}{" "}
              available
            </p>

          </div>

          {/* Search */}

          <div className="relative w-full lg:max-w-sm">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search courses..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />

          </div>

        </div>

        {/* Course Grid */}

        {filteredCourses.length > 0 ? (

          <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">

            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>

        ) : (

          <div className="pb-20 text-center">

            <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8">

              <h3 className="text-lg font-black text-slate-950">
                No Courses Found
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Try another search term or select a
                different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
              >
                View All Courses
              </button>

            </div>

          </div>

        )}

      </Container>

    </section>
  );
}

export default CoursesGrid;