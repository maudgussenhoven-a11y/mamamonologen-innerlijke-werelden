import { useState } from "react";
import aboutPhoto from "@/assets/about-photo.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Ongeldig e-mailadres",
        description: "Vul een geldig e-mailadres in.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "newsletter",
        email: email,
      }).toString(),
    })
      .then(() => {
        toast({
          title: "Bedankt voor je aanmelding!",
          description: "Je ontvangt binnenkort onze nieuwsbrief.",
        });
        setEmail("");
      })
      .catch(() => {
        toast({
          title: "Er is een fout opgetreden",
          description: "Probeer het later opnieuw.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} name="newsletter" data-netlify="true" netlify-honeypot="bot-field" className="flex gap-2">
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="text" name="bot-field" className="hidden" />
      <Input
        type="email"
        placeholder="Je e-mailadres"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-background/80 border-primary/20 text-sm h-9"
      />
      <Button type="submit" disabled={isLoading} size="sm" className="whitespace-nowrap">
        {isLoading ? "..." : "Aanmelden"}
      </Button>
    </form>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 pb-12 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Speeldata */}
        <div className="text-center mb-16 bg-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Speeldata</h2>
          <p className="text-lg font-semibold text-foreground/90 mb-4">Tolhuistuin, Amsterdam Noord</p>
          <div className="space-y-2 text-foreground/80 mb-6">
            <p>Woensdag 25 maart 20:00 - 21:30 uur</p>
            <p>Zaterdag 28 maart 11:00 - 12:30 uur</p>
          </div>
          <Button asChild size="lg">
            <a href="https://shop.paylogic.com/315d9e0988354ccf917efa2073ce3e37" target="_blank" rel="noopener noreferrer">
              Koop tickets
            </a>
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Wat is Mamamonologen?
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              Mamamonologen is een <span className="text-primary">theatraal, intiem en onderzoekend</span> project 
              dat de gelaagdheid van moederschap zichtbaar maakt. Het is geen traditionele voorstelling, maar een combinatie 
              van monoloog, embodiment, innerlijke stemmen en interactie met het publiek.
            </p>
            <p className="text-foreground/90">
              Een plek waar de binnenwereld van vrouwen, met al haar tegenstellingen, verlangens, twijfels en krachten, 
              eindelijk <span className="text-accent">gehoord mag worden</span>.
            </p>
            <p className="text-foreground/90">
              Een plek waar alle mensen een inspirerende, veilige en verbindende ruimte vinden om 
              via theater naar binnen te luisteren, elkaar te ontmoeten en de diepgang op te zoeken die in het dagelijks 
              leven vaak ongezien blijft.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl shadow-medium overflow-hidden">
              <img 
                src={aboutPhoto} 
                alt="Mamamonologen portret" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Newsletter compact box */}
            <div className="mt-8 bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Op de hoogte blijven?</h4>
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                Meld je aan voor de nieuwsbrief
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mb-20">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-medium max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/2jCRu13ZzcM"
              title="Mamamonologen video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <p className="text-foreground/90 italic mb-4">
              "Mamamonologen werkt heel verbindend. De eerlijkheid vond ik mooi, in al die verschillende lagen. Elkaar zien, jezelf laten zien. Het gevoel van samen. De kracht van het moederschap, maar ook het kwetsbare en het rauwe. Alles hoort erbij en dat vond ik zo mooi aan deze bijeenkomst."
            </p>
            <p className="text-primary font-semibold">— Amber</p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <p className="text-foreground/90 italic mb-4">
              "Inspirerend, verbindend, veilig, energie, kwetsbaar, eerlijk, herkenbaar en ook fun, lachen, entertainment!"
            </p>
            <p className="text-primary font-semibold">— Anoniem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
