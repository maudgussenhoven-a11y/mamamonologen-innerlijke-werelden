import Hero from "@/components/Hero";
import About from "@/components/About";
import Themes from "@/components/Themes";
import ForWho from "@/components/ForWho";
import Maker from "@/components/Maker";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Themes />
      <ForWho />
      <Maker />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
