import {
  ArrowRight,
  Camera,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";

import { aboutPageData } from "../../data/about";

function LearningEnvironment() {
  const { environment } = aboutPageData;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Our Environment
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {environment.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {environment.description}
            </p>

          </div>

          <Link
            to="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-800"
          >
            View Gallery

            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          {environment.images.map((image, index) => (
            <div
              key={image}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >

              <img
                src={image}
                alt={`DevMastersLearningTech learning environment ${index + 1}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 0
                    ? "h-[430px] md:h-full"
                    : "h-[205px]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-bold text-white">

                <Camera size={17} />

                Institute Life

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default LearningEnvironment;