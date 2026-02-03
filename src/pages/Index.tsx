import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Differentials />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
