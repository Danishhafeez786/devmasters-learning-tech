import HeroSection from "../components/home/HeroSection";
import TrustStats from "../components/home/TrustStats";
import AboutInstitute from "../components/home/AboutInstitute";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedCourses from "../components/home/FeaturedCourses";
import TrainingProcess from "../components/home/TrainingProcess";
import ProfessionalServices from "../components/home/ProfessionalServices";
import StudentExperience from "../components/home/StudentExperience";

function Home() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <AboutInstitute />
      <WhyChooseUs />
      <FeaturedCourses />
      <TrainingProcess />
      <ProfessionalServices />
      <StudentExperience />
    </>
  );
}

export default Home;