import {
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

import Container from "../common/Container";
import AdmissionForm from "./AdmissionForm";

function AdmissionSection({ contact }) {
  const whatsappNumber = contact.whatsapp.replace(/\D/g, "");

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* =========================
              ADMISSION FORM
          ========================== */}
          <AdmissionForm
            whatsappNumber={whatsappNumber}
          />

          {/* =========================
              INFORMATION
          ========================== */}
          <div className="lg:pt-8">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Admission Process
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              How To Enroll
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Getting started is simple. Send us your inquiry
              and our team will guide you through the next steps.
            </p>

            <div className="mt-8 space-y-5">

              {[
                {
                  number: "01",
                  title: "Submit Your Inquiry",
                  description:
                    "Complete the admission form with your basic information and preferred course.",
                },
                {
                  number: "02",
                  title: "Talk To Our Team",
                  description:
                    "Our team will contact you to answer your questions and discuss course details.",
                },
                {
                  number: "03",
                  title: "Choose Your Course",
                  description:
                    "Select the course, schedule and training option that suits your goals.",
                },
                {
                  number: "04",
                  title: "Start Learning",
                  description:
                    "Complete the admission process and begin your practical learning journey.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-black text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Quick Contact */}
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">

              <h3 className="text-lg font-black text-slate-950">
                Need Quick Information?
              </h3>

              <div className="mt-5 space-y-4">

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-bold text-slate-700">
                    WhatsApp: {contact.whatsapp}
                  </span>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-semibold leading-6 text-slate-600">
                    {contact.address}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-semibold text-slate-600">
                    Monday - Saturday · 03:00 PM - 08:00 PM
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-600"
                  />

                  <span className="text-sm font-semibold text-slate-600">
                    Sunday · 10:00 AM - 08:00 PM
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default AdmissionSection;