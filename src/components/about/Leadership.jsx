import {
  CheckCircle2,
  Quote,
} from "lucide-react";

import Container from "../common/Container";

import { leadership } from "../../data/team";

function Leadership() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Image */}

          <div className="relative mx-auto w-full max-w-md">

            <div className="overflow-hidden rounded-[2rem] bg-slate-100">
              <img
                src={leadership.image}
                alt={leadership.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Leadership
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Meet the Person Behind the Learning Journey
            </h2>

            <div className="mt-6 flex gap-3">

              <Quote
                size={34}
                className="shrink-0 text-teal-200"
              />

              <p className="text-base leading-8 text-slate-600">
                {leadership.description}
              </p>

            </div>

            <div className="mt-7">

              <h3 className="text-xl font-black text-slate-950">
                {leadership.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-teal-700">
                {leadership.designation}
              </p>

            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {leadership.expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
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

export default Leadership;