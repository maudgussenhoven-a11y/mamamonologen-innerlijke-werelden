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

        {/* Nieuws banner */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <p className="text-lg md:text-xl text-white font-medium mb-4">
            YES! Mama Monologen staat op woensdag 10 juni 20:00 uur in de Roode Bioscoop.
          </p>
          <Button 
            asChild
            className="bg-[hsl(12_65%_55%)] hover:bg-[hsl(12_65%_45%)] text-white font-medium px-8 py-3 rounded-full text-base transition-all"
          >
            <a href="https://www.roodebioscoop.nl/mamamonologen#vdmorder" target="_blank" rel="noopener noreferrer">
              Koop tickets
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
