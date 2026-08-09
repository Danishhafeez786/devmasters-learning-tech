import {
  BriefcaseBusiness,
  Code2,
  Palette,
  Monitor,
} from "lucide-react";

import Container from "../common/Container";

import { courseCategories } from "../../data/courses";

const categoryIcons = {
  development: Code2,
  design: Palette,
  digital: Monitor,
  business: BriefcaseBusiness,
};

function CourseCategories({
  activeCategory,
  onCategoryChange,
}) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>

        <div className="text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Explore by Category
          </span>

          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
            Find the Right Learning Path
          </h2>

        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* All */}

          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`rounded-2xl border p-5 text-left transition-all ${
              activeCategory === "all"
                ? "border-teal-600 bg-teal-50"
                : "border-slate-200 bg-white hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
            }`}
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Monitor size={20} />
            </div>

            <h3 className="mt-4 font-black text-slate-950">
              All Courses
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Explore all available learning programs.
            </p>

          </button>

          {courseCategories.map((category) => {

            const Icon = categoryIcons[category.id];

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onCategoryChange(category.id)
                }
                className={`rounded-2xl border p-5 text-left transition-all ${
                  activeCategory === category.id
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                }`}
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={20} />
                </div>

                <h3 className="mt-4 font-black text-slate-950">
                  {category.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {category.description}
                </p>

              </button>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default CourseCategories;