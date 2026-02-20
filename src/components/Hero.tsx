import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="MAMA MONOLOGEN - Innerlijke stemmen van moederschap"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
          MAMA MONOLOGEN
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Een theatraal onderzoek naar de verborgen wereld van moederschap
        </p>

        <p className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto drop-shadow animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Waar innerlijke stemmen gehoord worden. Waar tegenstellingen mogen bestaan. 
          Waar we samen de diepte opzoeken.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-medium transition-smooth"
            asChild
          >
            <a href="https://shop.paylogic.com/315d9e0988354ccf917efa2073ce3e37/" target="_blank" rel="noopener noreferrer">Koop tickets 25 maart</a>
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-medium transition-smooth"
            asChild
          >
            <a href="https://shop.paylogic.com/f5c0da98404a4cac8f8fad4e527789cd" target="_blank" rel="noopener noreferrer">Koop tickets 28 maart</a>
          </Button>
        </div>
      </div>

      {/* Decorative organic shapes 
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    */}
      </section>
  );
};

export default Hero;
