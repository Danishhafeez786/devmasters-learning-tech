import { Routes, Route } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Founder from "../pages/Founder";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Projects from "../pages/Projects";
import Students from "../pages/Students";
import Gallery from "../pages/Gallery";
import Videos from "../pages/Videos";
import Testimonials from "../pages/Testimonials";
import Events from "../pages/Events";
import FAQ from "../pages/FAQ";
import Admission from "../pages/Admission";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/founder" element={<Founder />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/:courseId" element={<CourseDetails />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/students" element={<Students />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/events" element={<Events />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/admission" element={<Admission />} />

        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
