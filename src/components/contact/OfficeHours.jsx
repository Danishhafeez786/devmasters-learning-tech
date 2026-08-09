import {
  Clock3,
} from "lucide-react";

import Container from "../common/Container";

function OfficeHours({ hours }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">

              <Clock3 size={22} />

            </div>

            <div>

              <h2 className="text-xl font-black text-slate-950">
                Office & Admission Hours
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Visit or contact us during these hours.
              </p>

            </div>

          </div>

          <div className="mt-6 divide-y divide-slate-100">

            {hours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between gap-4 py-4"
              >

                <span className="text-sm font-bold text-slate-700">
                  {item.day}
                </span>

                <span className="text-sm font-semibold text-slate-500">
                  {item.time}
                </span>

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default OfficeHours;