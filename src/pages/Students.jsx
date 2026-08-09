import StudentSuccessHero from "../components/students/StudentSuccessHero";
import StudentStats from "../components/students/StudentStats";
import StudentGallery from "../components/students/StudentGallery";
import StudentProjects from "../components/students/StudentProjects";
import StudentTestimonials from "../components/students/StudentTestimonials";
import SuccessStories from "../components/students/SuccessStories";
import LearningJourney from "../components/students/LearningJourney";
import StudentVideos from "../components/students/StudentVideos";
import StudentSuccessCTA from "../components/students/StudentSuccessCTA";

import {
  studentStats,
  studentGallery,
  studentProjects,
  testimonials,
  successStories,
  studentVideos,
} from "../data/students";

function Students() {
  return (
    <>
      <StudentSuccessHero />

      <StudentStats stats={studentStats} />

      <StudentGallery gallery={studentGallery} />

      <StudentProjects projects={studentProjects} />

      <StudentTestimonials testimonials={testimonials} />

      <SuccessStories stories={successStories} />

      <LearningJourney />

      <StudentVideos videos={studentVideos} />

      <StudentSuccessCTA />
    </>
  );
}

export default Students;