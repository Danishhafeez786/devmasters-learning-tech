import {
  Award,
  Clock3,
  Laptop,
  Wrench,
} from "lucide-react";

import Container from "../common/Container";

function CourseQuickStats({ course }) {
  const stats = [
    {
      icon: Clock3,
      label: "Duration",
      value: course.duration,
    },
    {
      icon: Laptop,
      label: "Format",
      value: course.format,
    },
    {
      icon: Wrench,
      label: "Learning",
      value: "Practical",
    },
    {
      icon: Award,
      label: "Completion",
      value: "Certificate",
    },
  ];

  return (
    <section className="relative z-10 -mt-6">
      <Container>

        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 border-b border-slate-100 p-5 last:border-b-0 sm:nth-2:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={20} />
                </div>

                <div>

                  <p className="text-xs font-semibold text-slate-400">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-sm font-black text-slate-900">
                    {stat.value}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default CourseQuickStats;