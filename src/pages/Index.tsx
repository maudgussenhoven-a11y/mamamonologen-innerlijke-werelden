import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Retrospective from "@/components/Retrospective";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyProject from "@/components/WhyProject";
import Themes from "@/components/Themes";
import ForWho from "@/components/ForWho";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import TicketsPopup from "@/components/TicketsPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TicketsPopup />
      <Navigation />
      <main>
        <Hero />
        <Retrospective />
        <About />
        <Products />
        <WhyProject />
        <Themes />
        <ForWho />
        <Team />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
