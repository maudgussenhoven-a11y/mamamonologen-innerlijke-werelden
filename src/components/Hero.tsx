import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/mama-monologen-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(25_30%_12%)] to-[hsl(260_40%_45%)]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[hsl(32_45%_97%)] drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
          MAMA MONOLOGEN
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-[hsl(32_45%_95%)] mb-8 leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Een intieme voorstelling die de gelaagdheid van moederschap zichtbaar maakt
        </p>

        <p className="text-lg md:text-xl text-[hsl(32_45%_90%)] mb-12 max-w-2xl mx-auto drop-shadow animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Waar innerlijke stemmen gehoord worden. Waar tegenstellingen mogen bestaan. 
          Waar we samen de diepte opzoeken.
        </p>

        {/* Banner Image */}
        <div className="rounded-2xl overflow-hidden shadow-medium max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <img 
            src={bannerImage} 
            alt="MAMA MONOLOGEN - Maud Gussenhoven"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
