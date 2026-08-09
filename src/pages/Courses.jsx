import CoursesHero from "../components/courses/CoursesHero";
import CoursesGrid from "../components/courses/CoursesGrid";
import CourseBenefits from "../components/courses/CourseBenefits";

import FinalCTA from "../components/home/FinalCTA";

function Courses() {
  return (
    <>
      <CoursesHero />

      <CoursesGrid />

      <CourseBenefits />

      <FinalCTA />
    </>
  );
}

export default Courses;