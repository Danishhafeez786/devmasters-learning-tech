import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  GraduationCap,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const coursesRef = useRef(null);
  const moreRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        coursesRef.current &&
        !coursesRef.current.contains(event.target)
      ) {
        setCoursesOpen(false);
      }

      if (
        moreRef.current &&
        !moreRef.current.contains(event.target)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route/navigation item is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCoursesOpen(false);
    setMoreOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative inline-flex items-center py-2 text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-teal-700"
        : "text-slate-700 hover:text-teal-700"
    }`;

  const dropdownLinkClass =
    "block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-teal-50 hover:text-teal-700";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
              <GraduationCap size={25} strokeWidth={2} />
            </div>

            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                DevMasters
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
                Learning Tech
              </div>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden items-center gap-6 lg:flex">

            {/* Home */}
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* About */}
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Courses Dropdown */}
            <div className="relative" ref={coursesRef}>
              <button
                type="button"
                onClick={() => {
                  setCoursesOpen((previous) => !previous);
                  setMoreOpen(false);
                }}
                className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-teal-700"
                aria-expanded={coursesOpen}
                aria-haspopup="menu"
              >
                Courses

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coursesOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <div className="border-b border-slate-100 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      Our Courses
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Learn practical, career-focused skills.
                    </p>
                  </div>

                  <div className="mt-1">
                    <NavLink
                      to="/courses"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      All Courses
                    </NavLink>

                    <NavLink
                      to="/courses/full-stack-development"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      Full Stack Development
                    </NavLink>

                    <NavLink
                      to="/courses/frontend-development"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      Frontend Development
                    </NavLink>

                    <NavLink
                      to="/courses/backend-development"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      Backend Development
                    </NavLink>

                    <NavLink
                      to="/courses/python-development"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      Python Development
                    </NavLink>

                    <NavLink
                      to="/courses/ui-ux-design"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      UI/UX Design
                    </NavLink>

                    <NavLink
                      to="/courses/graphic-designing"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      Graphic Designing
                    </NavLink>

                    <NavLink
                      to="/courses/artificial-intelligence"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      Artificial Intelligence
                    </NavLink>

                    <NavLink
                      to="/courses/ebay-virtual-assistant"
                      onClick={() => setCoursesOpen(false)}
                      className={dropdownLinkClass}
                    >
                      eBay Virtual Assistant
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>

            {/* Students */}
            <NavLink to="/students" className={navLinkClass}>
              Students
            </NavLink>

            {/* Gallery */}
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>

            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => {
                  setMoreOpen((previous) => !previous);
                  setCoursesOpen(false);
                }}
                className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-teal-700"
                aria-expanded={moreOpen}
                aria-haspopup="menu"
              >
                More

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-3 w-60 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <NavLink
                    to="/founder"
                    onClick={() => setMoreOpen(false)}
                    className={dropdownLinkClass}
                  >
                    Founder / Instructor
                  </NavLink>

                  <NavLink
                    to="/videos"
                    onClick={() => setMoreOpen(false)}
                    className={dropdownLinkClass}
                  >
                    Videos
                  </NavLink>

                  <NavLink
                    to="/testimonials"
                    onClick={() => setMoreOpen(false)}
                    className={dropdownLinkClass}
                  >
                    Testimonials
                  </NavLink>

                  <NavLink
                    to="/events"
                    onClick={() => setMoreOpen(false)}
                    className={dropdownLinkClass}
                  >
                    Seminars & Events
                  </NavLink>

                  <NavLink
                    to="/faq"
                    onClick={() => setMoreOpen(false)}
                    className={dropdownLinkClass}
                  >
                    FAQ
                  </NavLink>

                  <NavLink
                    to="/contact"
                    onClick={() => setMoreOpen(false)}
                    className={dropdownLinkClass}
                  >
                    Contact
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* =========================
              DESKTOP CTA
          ========================== */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:03440359135"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-teal-700"
            >
              <Phone size={17} />
              <span>Call Us</span>
            </a>

            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700 lg:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================== */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">

              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                About
              </NavLink>

              {/* Mobile Courses */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setCoursesOpen((previous) => !previous)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
                >
                  <span>Courses</span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-200 ${
                      coursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {coursesOpen && (
                  <div className="mt-1 space-y-1 border-l-2 border-teal-100 pl-3">
                    <NavLink
                      to="/courses"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      All Courses
                    </NavLink>

                    <NavLink
                      to="/courses/full-stack-development"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Full Stack Development
                    </NavLink>

                    <NavLink
                      to="/courses/frontend-development"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Frontend Development
                    </NavLink>

                    <NavLink
                      to="/courses/backend-development"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Backend Development
                    </NavLink>

                    <NavLink
                      to="/courses/python-development"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Python Development
                    </NavLink>

                    <NavLink
                      to="/courses/ui-ux-design"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      UI/UX Design
                    </NavLink>

                    <NavLink
                      to="/courses/graphic-designing"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Graphic Designing
                    </NavLink>

                    <NavLink
                      to="/courses/artificial-intelligence"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Artificial Intelligence
                    </NavLink>

                    <NavLink
                      to="/courses/ebay-virtual-assistant"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      eBay Virtual Assistant
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/projects"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/students"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                Students
              </NavLink>

              <NavLink
                to="/gallery"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                Gallery
              </NavLink>

              {/* Mobile More */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setMoreOpen((previous) => !previous)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
                >
                  <span>More</span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-200 ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {moreOpen && (
                  <div className="mt-1 space-y-1 border-l-2 border-teal-100 pl-3">
                    <NavLink
                      to="/founder"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Founder / Instructor
                    </NavLink>

                    <NavLink
                      to="/videos"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Videos
                    </NavLink>

                    <NavLink
                      to="/testimonials"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Testimonials
                    </NavLink>

                    <NavLink
                      to="/events"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Seminars & Events
                    </NavLink>

                    <NavLink
                      to="/faq"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      FAQ
                    </NavLink>

                    <NavLink
                      to="/contact"
                      onClick={closeMobileMenu}
                      className={dropdownLinkClass}
                    >
                      Contact
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <div className="mt-3 grid grid-cols-1 gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
                <a
                  href="tel:03440359135"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-700 px-4 py-3 text-sm font-bold text-teal-700 transition-colors hover:bg-teal-50"
                >
                  <Phone size={17} />
                  Call Us
                </a>

                <Link
                  to="/admission"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-4 py-3 text-sm font-extrabold text-slate-950 transition-colors hover:bg-yellow-300"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;