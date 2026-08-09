import HeroSection from "../components/home/HeroSection";
import TrustStats from "../components/home/TrustStats";
import AboutInstitute from "../components/home/AboutInstitute";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedCourses from "../components/home/FeaturedCourses";
import TrainingProcess from "../components/home/TrainingProcess";
import ProfessionalServices from "../components/home/ProfessionalServices";
import StudentExperience from "../components/home/StudentExperience";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import SuccessStory from "../components/home/SuccessStory";
import FAQSection from "../components/home/FAQSection";
import FinalCTA from "../components/home/FinalCTA";

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
      <GalleryPreview />
      <Testimonials />
      <SuccessStory />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

export default Home;