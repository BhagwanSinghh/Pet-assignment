import Reservation from "../components/Home/Reservation.js";
import ReservationVideo from "../components/Home/ReservationVideo.js";
import Services from "../components/Home/Services.js";
import Story from "../components/Home/Story.js";
import CarePackages from "../components/Home/CarePackages.js";
import ServiceExperience from "../components/Home/ServiceExperience.js";
import WhyChooseUs from "../components/Home/WhyChooseUs.js";
import TrustedPartner from "../components/Home/TrustedPartner.js";
import PricingPlan from "../components/Home/PricingPlan.js";
import Testimonial from "../components/Home/Testimonial.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollButton/ScrollButton"


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Reservation />
      <ReservationVideo />
      <Services />
      <Story />
      <CarePackages />
      <ServiceExperience />
      <WhyChooseUs />
      <TrustedPartner />
      <PricingPlan />
      <Testimonial />
      <Footer />
      <ScrollToTopButton/>
    </>
  );
};

export default HomePage;


