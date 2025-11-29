import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-warm opacity-5" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Boek een sessie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Breng Mamamonologen naar jouw organisatie, theater of gemeenschap
          </p>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mt-6" />
        </div>

        <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 border border-primary/20">
          <div className="space-y-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth">
                <div className="mt-1 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a 
                    href="mailto:maudgussenhoven@gmail.com"
                    className="text-lg text-primary hover:underline"
                  >
                    maudgussenhoven@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth">
                <div className="mt-1 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Telefoon</p>
                  <a 
                    href="tel:0640711798"
                    className="text-lg text-primary hover:underline"
                  >
                    06 40 71 17 98
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth">
                <div className="mt-1 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Website</p>
                  <a 
                    href="https://www.mamamonologen.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary hover:underline"
                  >
                    www.mamamonologen.nl
                  </a>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-soft transition-smooth"
                  onClick={() => window.location.href = 'mailto:maudgussenhoven@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Stuur een email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-primary hover:bg-primary/5 rounded-full transition-smooth"
                  onClick={() => window.location.href = 'tel:0640711798'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel direct
                </Button>
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-foreground/80 leading-relaxed">
                Perfect voor theaters, festivals, organisaties, bedrijven en gemeenschappen 
                die op zoek zijn naar diepgaande, verbindende ervaringen
              </p>
            </div>
          </div>
        </div>

        {/* Future vision */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Waar het naartoe groeit
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "Theatrale sessie",
              "Volledige voorstelling",
              "Workshops & verdiepingsdagen",
              "Audio- of podcastreeks",
              "Boek of bundel"
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-xl p-4 text-foreground/80 hover:border-primary/50 hover:text-primary transition-smooth"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
