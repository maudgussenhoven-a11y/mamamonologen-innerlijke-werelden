import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";
import productsPhoto from "@/assets/products-photo.jpg";

interface Product {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  gradient: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      title: "Theatrale sessie op maat",
      subtitle: "Intiem en interactief",
      description: "Een bijeenkomst van 1,5-2 uur waarin innerlijke moeders tot leven komen",
      details: [
        "Duur: 1,5–2 uur",
        "Groepsgrootte: 15–100 mensen",
        "Monologen vanuit verschillende innerlijke stemmen",
        "Interactie en reflectie met het publiek",
        "Laagdrempelig en diepgaand",
        "Geschikt voor theaters, festivals en organisaties"
      ],
      gradient: "from-primary/20 to-primary/10"
    },
    {
      title: "Theatervoorstelling",
      subtitle: "Volledige mythische ervaring",
      description: "Een complete voorstelling die de binnenwereld van moeders zichtbaar maakt",
      details: [
        "Volledige theaterproductie",
        "Combinatie van monoloog en embodiment",
        "Voice Dialogue-methodiek",
        "Onderzoek naar innerlijke stemmen",
        "Universele menselijke thema's",
        "Voor grotere theaterlocaties"
      ],
      gradient: "from-accent/20 to-accent/10"
    },
    {
      title: "Verdiepingsworkshop",
      subtitle: "Ontmoet je eigen stemmen",
      description: "Diepgaande workshop waarin deelnemers hun innerlijke dialoog verkennen",
      details: [
        "Halve of hele dag workshop",
        "Kleinere groepen voor intensieve begeleiding",
        "Voice Dialogue oefeningen",
        "Persoonlijke reflectie en uitwisseling",
        "Praktische tools voor zelfonderzoek",
        "Geschikt voor professionals en particulieren"
      ],
      gradient: "from-secondary/30 to-secondary/20"
    }
  ];

  return (
    <>
      <section id="products" className="pt-12 pb-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-warm opacity-5" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Wat we aanbieden
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Verschillende vormen om de innerlijke wereld te verkennen
            </p>
            <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-12" />
            <div className="relative rounded-2xl overflow-hidden shadow-medium max-w-2xl mx-auto">
              <img 
                src={productsPhoto} 
                alt="MAMA MONOLOGEN sessie in actie" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 mt-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${product.gradient} border border-border/50 hover:border-primary/50 transition-smooth group cursor-pointer`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-primary/80 mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10"
                  >
                    Lees meer
                  </Button>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-5 transition-smooth" />
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Breng MAMA MONOLOGEN naar jouw organisatie
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Perfect voor theaters, festivals, organisaties, bedrijven en gemeenschappen 
                die op zoek zijn naar diepgaande, verbindende ervaringen
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-soft transition-smooth"
                onClick={() => window.location.href = 'mailto:maudgussenhoven@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Stuur een email
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary hover:bg-primary/5 rounded-full transition-smooth"
                onClick={() => window.location.href = 'tel:0640711798'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel direct
              </Button>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:maudgussenhoven@gmail.com"
                  className="text-foreground/80 hover:text-primary transition-smooth"
                >
                  maudgussenhoven@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:0640711798"
                  className="text-foreground/80 hover:text-primary transition-smooth"
                >
                  06 40 71 17 98
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-foreground/80">
                  www.mamamonologen.nl
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              {selectedProduct?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              {selectedProduct?.description}
            </p>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-foreground">Wat kun je verwachten:</h4>
              <ul className="space-y-2">
                {selectedProduct?.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Interesse? Neem contact op voor beschikbaarheid en prijzen
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => window.location.href = 'mailto:maudgussenhoven@gmail.com'}
                  className="flex-1"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button 
                  onClick={() => window.location.href = 'tel:0640711798'}
                  variant="outline"
                  className="flex-1"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Bel
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Products;
