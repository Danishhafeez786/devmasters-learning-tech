import {
  Award,
} from "lucide-react";

import Container from "../common/Container";

function CourseCertificate({ course }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <div className="grid items-center gap-10 lg:grid-cols-2">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
              <Award size={24} />
            </div>

            <span className="mt-5 block text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              Course Completion
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              {course.certificate.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {course.certificate.description}
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3">

            <img
              src={course.certificate.image}
              alt="Course completion certificate"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}

export default CourseCertificate;