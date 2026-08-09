import {
  ArrowDown,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container>

        <div className="relative py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-yellow-300">

              <Sparkles size={14} />

              Admissions Open

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">

              Start Your

              <span className="block text-teal-400">
                Learning Journey
              </span>

              With Us

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ready to learn practical skills and build your
              professional future? Contact us today or submit
              your admission inquiry.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="#admission-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300"
              >
                Apply for Admission

                <ArrowDown size={18} />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default ContactHero;