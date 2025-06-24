import Hero from "./assets/sections/Hero";
import Bento from "./assets/sections/Bento";
import FlyingCircle from "./assets/components/FlyingCircle";
import Testimonials from "./assets/sections/Testimonials";
import Pricing from "./assets/sections/Pricing";
import Faq from "./assets/sections/Faq";
import Footer from "./assets/sections/Footer";

function HomePage() {
  const spots = 1;

  return (
    <>
      <FlyingCircle />
      <div className="min-h-screen flex justify-center flex-col bg-black overflow-x-hidden">
        <Hero spots={spots} />
        <Bento />
        <Testimonials />
        <Pricing spots={spots} />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;