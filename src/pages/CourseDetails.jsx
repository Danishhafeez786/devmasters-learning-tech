import { Navigate, useParams } from "react-router";

import CourseDetailsHero from "../components/course-details/CourseDetailsHero";
import CourseQuickStats from "../components/course-details/CourseQuickStats";
import CourseOverview from "../components/course-details/CourseOverview";
import CourseTechnologies from "../components/course-details/CourseTechnologies";
import CourseCurriculum from "../components/course-details/CourseCurriculum";
import CourseProjects from "../components/course-details/CourseProjects";
import CourseAudience from "../components/course-details/CourseAudience";
import TrainingMethod from "../components/course-details/TrainingMethod";
import CourseCertificate from "../components/course-details/CourseCertificate";
import CourseFAQ from "../components/course-details/CourseFAQ";
import CourseEnrollmentCTA from "../components/course-details/CourseEnrollmentCTA";

import { courses } from "../data/courses";

function CourseDetails() {
  const { courseId } = useParams();

  const course = courses.find(
    (item) => item.id === courseId
  );

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <>
      <CourseDetailsHero course={course} />

      <CourseQuickStats course={course} />

      <CourseOverview course={course} />

      <CourseTechnologies course={course} />

      <CourseCurriculum course={course} />

      <CourseProjects course={course} />

      <CourseAudience course={course} />

      <TrainingMethod course={course} />

      <CourseCertificate course={course} />

      <CourseFAQ course={course} />

      <CourseEnrollmentCTA course={course} />
    </>
  );
}

export default CourseDetails;