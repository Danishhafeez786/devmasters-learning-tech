import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import Container from "../common/Container";

function ContactCTA({ phone }) {

  const whatsappNumber =
    phone.replace(/\D/g, "");

  const message = encodeURIComponent(
    "Assalam-o-Alaikum, I would like to know more about admission and available courses at DevMastersLearningTech."
  );

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="overflow-hidden rounded-[2rem] bg-teal-700 px-6 py-12 text-center sm:px-10 lg:px-16">

          <div className="mx-auto max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-100">
              Have Questions?
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Let's Talk About Your Future
            </h2>

            <p className="mt-4 text-base leading-7 text-teal-50">
              Contact us today to discuss courses, schedules,
              admission and your learning goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-teal-700 transition hover:bg-teal-50"
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>

              <a
                href="#admission-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
              >
                Apply Now

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default ContactCTA;