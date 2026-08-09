import {
  ExternalLink,
  MapPin,
} from "lucide-react";

import Container from "../common/Container";

function LocationSection({ contact }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Visit Us
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Find Our Institute
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Visit our institute to learn more about our
              courses, training environment and admission process.
            </p>

            <div className="mt-7 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">

                <MapPin size={20} />

              </div>

              <div>

                <p className="text-sm font-black text-slate-950">
                  Institute Address
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {contact.address}
                </p>

              </div>

            </div>

            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Open in Google Maps

              <ExternalLink size={16} />

            </a>

          </div>

          {/* Map */}

          <div className="min-h-[350px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm">

            <iframe
              title="DevMastersLearningTech Location"
              src="YOUR_GOOGLE_MAPS_EMBED_URL"
              className="h-full min-h-[350px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}

export default LocationSection;