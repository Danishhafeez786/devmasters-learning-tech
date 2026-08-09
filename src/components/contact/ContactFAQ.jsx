import {
  useState,
} from "react";

import {
  ChevronDown,
} from "lucide-react";

import Container from "../common/Container";

function ContactFAQ() {

  const [openIndex, setOpenIndex] =
    useState(null);

  const faqs = [
    {
      question: "How can I apply for admission?",
      answer:
        "You can submit the admission inquiry form on this page or contact us directly through phone or WhatsApp.",
    },

    {
      question: "Can I visit the institute before admission?",
      answer:
        "Yes. We encourage prospective students to contact the institute and arrange a visit to learn more about the training environment and available courses.",
    },

    {
      question: "Which course should I choose?",
      answer:
        "The right course depends on your current skills, education and career goals. Contact our team and we can help you choose an appropriate learning path.",
    },

    {
      question: "Do courses include practical projects?",
      answer:
        "Our technical training focuses on practical learning, exercises and project-based activities.",
    },

    {
      question: "Can I contact the institute through WhatsApp?",
      answer:
        "Yes. WhatsApp is one of the quickest ways to ask about courses, schedules and admission information.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Admission FAQ
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">

          {faqs.map((faq, index) => {

            const isOpen =
              openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >

                  <span className="text-sm font-black text-slate-950">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-slate-400 transition ${
                      isOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 py-5">

                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default ContactFAQ;