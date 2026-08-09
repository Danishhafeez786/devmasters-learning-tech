import {
  ChevronDown,
} from "lucide-react";

import Container from "../common/Container";

function CourseFAQ({ course }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Course FAQ
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="mt-10 space-y-3">

            {course.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-slate-900">

                  {faq.question}

                  <ChevronDown
                    size={19}
                    className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  />

                </summary>

                <div className="border-t border-slate-100 px-5 pb-5 pt-4">

                  <p className="text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>

                </div>

              </details>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default CourseFAQ;