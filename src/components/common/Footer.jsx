import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700">
                <span className="text-lg font-black">
                  D
                </span>
              </div>

              <div className="leading-tight">
                <div className="text-lg font-extrabold">
                  DevMasters
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-400">
                  Learning Tech
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Learn practical skills, build real projects and
              develop the confidence to grow your professional
              career in technology and digital skills.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/19DC1xnQh2/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-teal-600 hover:bg-teal-700 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/devmasterslearningtech?igsh=MXdrMGYxdTZpOW93cg=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-teal-600 hover:bg-teal-700 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-teal-600 hover:bg-teal-700 hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  About Institute
                </Link>
              </li>

              <li>
                <Link
                  to="/founder"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Founder / Instructor
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Our Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/students"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Student Success
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================
              COURSES
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Popular Courses
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/courses/full-stack-development"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Full Stack Development
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/frontend-development"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Frontend Development
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/backend-development"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Backend Development
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/python-development"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  Python Development
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/ui-ux-design"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  UI/UX Design
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/ebay-virtual-assistant"
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  eBay Virtual Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Phone */}
              <a
                href="tel:03440359135"
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 text-teal-400">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Call / WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-300 transition-colors group-hover:text-teal-400">
                    0344-0359135
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:devmasterslearningtech@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 text-teal-400">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-slate-300 transition-colors group-hover:text-teal-400">
                    devmasterslearningtech@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-teal-400">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    Near Millat College,
                    <br />
                    Ahmad Pur East
                  </p>
                </div>
              </div>
            </div>

            {/* Admission CTA */}
            <Link
              to="/admission"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Apply for Admission
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================== */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} DevMastersLearningTech. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300 sm:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300 sm:text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;