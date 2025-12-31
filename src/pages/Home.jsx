import BirthdayCountdown from "../components/BirthdayCountdown";
import BirthdayWishes from "../components/BirthdayWishes";
import FloatingHearts from "../components/FloatingHearts";
import HeroSection from "../components/HeroSection";
import PhotoGallery from "../components/PhotoGallery";
import SurprisePopup from "../components/SurprisePopup";

export default function Home() {
  return (
    <>
    <FloatingHearts /> 
    <SurprisePopup />
      <HeroSection />
       <BirthdayCountdown />  
       <BirthdayWishes />
       
      <PhotoGallery />
    </>
  );
}
