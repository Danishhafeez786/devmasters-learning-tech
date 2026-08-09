import {
  Eye,
  Target,
} from "lucide-react";

import Container from "../common/Container";

import { aboutPageData } from "../../data/about";

function MissionVision() {
  const { mission, vision } = aboutPageData;

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Mission */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Target size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-950">
              {mission.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {mission.description}
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-3xl bg-slate-950 p-7 sm:p-9">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-400">
              <Eye size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-white">
              {vision.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              {vision.description}
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default MissionVision;