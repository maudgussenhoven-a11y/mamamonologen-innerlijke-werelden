import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/mama-monologen-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bannerImage} 
          alt="MAMA MONOLOGEN - Maud Gussenhoven"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
          MAMA MONOLOGEN
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Een intieme voorstelling die de gelaagdheid van moederschap zichtbaar maakt
        </p>

        <p className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto drop-shadow animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Waar innerlijke stemmen gehoord worden. Waar tegenstellingen mogen bestaan. 
          Waar we samen de diepte opzoeken.
        </p>
      </div>
    </section>
  );
};

export default Hero;
