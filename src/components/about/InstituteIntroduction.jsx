import { CheckCircle2 } from "lucide-react";

import Container from "../common/Container";

import { aboutPageData } from "../../data/about";

function InstituteIntroduction() {
  const { introduction } = aboutPageData;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={introduction.image}
                alt="DevMastersLearningTech learning environment"
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            {/* Floating card */}

            <div className="absolute -bottom-5 right-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:right-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400">
                    Our Approach
                  </p>

                  <p className="text-sm font-black text-slate-900">
                    Practical Learning
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              About Our Institute
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {introduction.title}
            </h2>

            <div className="mt-6 space-y-5">

              {introduction.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}

            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Practical Training",
                "Project-Based Learning",
                "Professional Guidance",
                "Skill Development",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default InstituteIntroduction;