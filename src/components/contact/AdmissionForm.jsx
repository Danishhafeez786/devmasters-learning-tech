import { useState } from "react";

import {
  CheckCircle2,
  Send,
} from "lucide-react";

function AdmissionForm({ whatsappNumber }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    education: "",
    contactMethod: "WhatsApp",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Desktop Development",
    "UI/UX Design",
    "Canva",
    "HR & Administration",
    "POS Training",
    "Other",
  ];

  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==============================
  // HANDLE FORM SUBMIT
  // ==============================

  const handleSubmit = (event) => {
    event.preventDefault();

    // ==============================
    // CREATE WHATSAPP MESSAGE
    // ==============================

    const whatsappMessage = `
Hello DevMastersLearningTech, I would like to inquire about admission for the following course:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: Course Admission

Course: ${formData.course}
Education / Qualification: ${formData.education}
Preferred Contact Method: ${formData.contactMethod}

Message:
${formData.message}

Thank you.
    `.trim();

    // ==============================
    // CREATE WHATSAPP URL
    // ==============================

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    // ==============================
    // OPEN WHATSAPP
    // ==============================

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    // ==============================
    // SHOW SUCCESS SCREEN
    // ==============================

    setSubmitted(true);
  };

  // ==============================
  // RESET FORM
  // ==============================

  const handleNewInquiry = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      education: "",
      contactMethod: "WhatsApp",
      message: "",
    });
  };

  return (
    <div id="admission-form">

      {/* =========================================
          HEADER
      ========================================== */}

      <div>

        <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
          Admission Inquiry
        </span>

        <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
          Apply for Admission
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Fill out the form and our team will contact you
          with course and admission details.
        </p>

      </div>

      {/* =========================================
          SUCCESS MESSAGE
      ========================================== */}

      {submitted ? (

        <div className="mt-8 rounded-2xl bg-teal-50 p-6 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">

            <CheckCircle2 size={28} />

          </div>

          <h3 className="mt-4 text-xl font-black text-slate-950">
            Inquiry Opened in WhatsApp
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Your admission details have been prepared in WhatsApp.
            Please press the Send button in WhatsApp to submit your inquiry.
          </p>

          <button
            type="button"
            onClick={handleNewInquiry}
            className="mt-5 text-sm font-bold text-teal-700 hover:text-teal-800"
          >
            Submit another inquiry
          </button>

        </div>

      ) : (

        /* =========================================
           FORM
        ========================================== */

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* =====================================
              NAME
          ====================================== */}

          <div>

            <label
              htmlFor="name"
              className="text-sm font-bold text-slate-700"
            >
              Full Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />

          </div>

          {/* =====================================
              PHONE
          ====================================== */}

          <div>

            <label
              htmlFor="phone"
              className="text-sm font-bold text-slate-700"
            >
              Phone / WhatsApp *
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="03XX XXXXXXX"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />

          </div>

          {/* =====================================
              EMAIL
          ====================================== */}

          <div>

            <label
              htmlFor="email"
              className="text-sm font-bold text-slate-700"
            >
              Email Address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />

          </div>

          {/* =====================================
              COURSE
          ====================================== */}

          <div>

            <label
              htmlFor="course"
              className="text-sm font-bold text-slate-700"
            >
              Interested Course *
            </label>

            <select
              id="course"
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            >

              <option value="">
                Select a course
              </option>

              {courses.map((course) => (
                <option
                  key={course}
                  value={course}
                >
                  {course}
                </option>
              ))}

            </select>

          </div>

          {/* =====================================
              EDUCATION
          ====================================== */}

          <div>

            <label
              htmlFor="education"
              className="text-sm font-bold text-slate-700"
            >
              Education / Qualification *
            </label>

            <input
              id="education"
              name="education"
              type="text"
              required
              value={formData.education}
              onChange={handleChange}
              placeholder="e.g. Matric, Intermediate, Graduation"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />

          </div>

          {/* =====================================
              CONTACT METHOD
          ====================================== */}

          <div>

            <label
              htmlFor="contactMethod"
              className="text-sm font-bold text-slate-700"
            >
              Preferred Contact Method *
            </label>

            <select
              id="contactMethod"
              name="contactMethod"
              required
              value={formData.contactMethod}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            >

              <option value="WhatsApp">
                WhatsApp
              </option>

              <option value="Phone Call">
                Phone Call
              </option>

              <option value="Email">
                Email
              </option>

            </select>

          </div>

          {/* =====================================
              MESSAGE
          ====================================== */}

          <div>

            <label
              htmlFor="message"
              className="text-sm font-bold text-slate-700"
            >
              Message *
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you would like to know..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            />

          </div>

          {/* =====================================
              SUBMIT
          ====================================== */}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-teal-800"
          >

            <Send size={17} />

            Send Inquiry on WhatsApp

          </button>

          <p className="text-center text-xs leading-5 text-slate-400">
            Your information will only be used to respond
            to your admission inquiry.
          </p>

        </form>

      )}

    </div>
  );
}

export default AdmissionForm;