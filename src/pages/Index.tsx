import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyProject from "@/components/WhyProject";
import Themes from "@/components/Themes";
import ForWho from "@/components/ForWho";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <WhyProject />
      <Themes />
      <ForWho />
      <Team />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
