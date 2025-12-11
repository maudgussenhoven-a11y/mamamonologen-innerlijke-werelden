import Hero from "@/components/Hero";
import About from "@/components/About";
import Themes from "@/components/Themes";
import ForWho from "@/components/ForWho";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Themes />
      <ForWho />
      <Team />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
