import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import WhyChooseUs from "../components/WhyChooseUs";
import AISection from "../components/AISection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedDestinations />

      <WhyChooseUs />

      <AISection />

      <Footer />
    </>
  );
}

export default Home;