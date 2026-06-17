import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import productsPhoto from "@/assets/voorstelling.jpg";
import Reveal from "@/components/Reveal";

interface Product {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      title: "Theatrale sessie op maat",
      subtitle: "Intiem en interactief",
      description:
        "Een bijeenkomst van 1,5-2 uur waarin innerlijke moeders tot leven komen",
      details: [
        "Duur: 1,5–2 uur",
        "Groepsgrootte: 15–100 mensen",
        "Monologen vanuit verschillende innerlijke stemmen",
        "Interactie en reflectie met het publiek",
        "Laagdrempelig en diepgaand",
        "Geschikt voor theaters, festivals en organisaties",
      ],
    },
    {
      title: "Theatervoorstelling",
      subtitle: "Volledige mythische ervaring",
      description:
        "Een complete voorstelling die de binnenwereld van moeders zichtbaar maakt",
      details: [
        "Volledige theaterproductie",
        "Combinatie van monoloog en embodiment",
        "Voice Dialogue-methodiek",
        "Onderzoek naar innerlijke stemmen",
        "Universele menselijke thema's",
        "Voor grotere theaterlocaties",
      ],
    },
    {
      title: "Verdiepingsworkshop",
      subtitle: "Ontmoet je eigen stemmen",
      description:
        "Diepgaande workshop waarin deelnemers hun innerlijke dialoog verkennen",
      details: [
        "Halve of hele dag workshop",
        "Kleinere groepen voor intensieve begeleiding",
        "Voice Dialogue oefeningen",
        "Persoonlijke reflectie en uitwisseling",
        "Praktische tools voor zelfonderzoek",
        "Geschikt voor professionals en particulieren",
      ],
    },
  ];

  return (
    <>
      <section id="products" className="section bg-background">
        <div className="container-tight">
          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-5">Het aanbod</p>
              <h2 className="display text-4xl text-foreground md:text-5xl lg:text-6xl">
                Wat we aanbieden
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Verschillende vormen om de innerlijke wereld te verkennen.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-md shadow-medium">
                <img
                  src={productsPhoto}
                  alt="MAMA MONOLOGEN sessie in actie"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Offerings */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-20 md:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.title}
                delay={index * 100}
                className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="flex h-full flex-col text-left"
                >
                  <span className="font-ui text-sm font-medium tracking-widest text-primary/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-4 text-2xl text-foreground">
                    {product.title}
                  </h3>
                  <p className="font-ui mt-1 text-sm font-medium uppercase tracking-wider text-primary/80">
                    {product.subtitle}
                  </p>
                  <p className="mt-4 flex-1 leading-relaxed text-foreground/75">
                    {product.description}
                  </p>
                  <span className="font-ui mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    Lees meer
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Contact CTA */}
          <Reveal className="mt-16 overflow-hidden rounded-lg bg-ink p-8 text-ink-foreground md:mt-20 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h3 className="display text-3xl text-ink-foreground md:text-4xl">
                  Breng Mama Monologen naar jouw organisatie
                </h3>
                <p className="mt-4 max-w-md text-lg text-ink-foreground/70">
                  Perfect voor theaters, festivals, organisaties, bedrijven en
                  gemeenschappen die op zoek zijn naar diepgaande, verbindende
                  ervaringen.
                </p>
              </div>
              <div className="md:justify-self-end">
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Button
                    size="lg"
                    className="font-ui glow-pink rounded-full"
                    onClick={() =>
                      (window.location.href = "mailto:maudgussenhoven@gmail.com")
                    }
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Stuur een email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-ui rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
                    onClick={() => (window.location.href = "tel:0640711798")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Bel direct
                  </Button>
                </div>
                <p className="font-ui mt-6 text-sm text-ink-foreground/50">
                  maudgussenhoven@gmail.com · 06 40 71 17 98 · www.mamamonologen.nl
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <p className="eyebrow mb-2">{selectedProduct?.subtitle}</p>
            <DialogTitle className="display text-3xl">
              {selectedProduct?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              {selectedProduct?.description}
            </p>
            <div>
              <h4 className="font-ui mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                Wat kun je verwachten
              </h4>
              <ul className="space-y-2">
                {selectedProduct?.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <p className="mb-4 text-sm text-muted-foreground">
                Interesse? Neem contact op voor beschikbaarheid en prijzen.
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() =>
                    (window.location.href = "mailto:maudgussenhoven@gmail.com")
                  }
                  className="font-ui flex-1 rounded-full"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button
                  onClick={() => (window.location.href = "tel:0640711798")}
                  variant="outline"
                  className="font-ui flex-1 rounded-full"
                >
                  <Phone className="mr-2 h-4 w-4" />
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
