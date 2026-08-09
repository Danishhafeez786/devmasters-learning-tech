import HeroSection from "../components/home/HeroSection";
import TrustStats from "../components/home/TrustStats";
import AboutInstitute from "../components/home/AboutInstitute";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedCourses from "../components/home/FeaturedCourses";

function Home() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <AboutInstitute />
      <WhyChooseUs />
      <FeaturedCourses />
    </>
  );
}

export default Home;