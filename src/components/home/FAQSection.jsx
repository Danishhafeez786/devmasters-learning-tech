import { useState } from "react";

import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";

import Container from "../common/Container";
import FAQItem from "../common/FAQItem";

import { faqs } from "../../data/faqs";

function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  const handleToggle = (id) => {
    setOpenId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =================================
            HEADER
        ================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            <Sparkles size={14} />

            Frequently Asked Questions
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Have Questions?
            <span className="text-teal-700">
              {" "}We're Here to Help.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find answers to some of the common questions
            students ask before joining a course.
          </p>

        </div>

        {/* =================================
            FAQ CONTENT
        ================================== */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.5fr] lg:items-start">

          {/* =================================
              LEFT CARD
          ================================== */}

          <div className="overflow-hidden rounded-3xl bg-slate-950 p-7 sm:p-8 lg:sticky lg:top-24">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
              <HelpCircle size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-black text-white">
              Still Have Questions?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Every student's situation is different. If you
              cannot find the answer you're looking for, talk
              to our team and we'll help you understand the
              available options.
            </p>

            {/* Small Info */}

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

              <div className="flex items-start gap-3">

                <MessageCircle
                  size={19}
                  className="mt-0.5 shrink-0 text-teal-400"
                />

                <div>

                  <p className="text-sm font-bold text-white">
                    Need Personal Guidance?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Discuss your course, skill level and
                    learning goals with us.
                  </p>

                </div>

              </div>

            </div>

            {/* CTA */}

            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* =================================
              QUESTIONS
          ================================== */}

          <div className="space-y-3">

            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() =>
                  handleToggle(faq.id)
                }
              />
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default FAQSection;