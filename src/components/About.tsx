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
    setTimeout(() => {
      toast({
        title: "Bedankt voor je aanmelding!",
        description: "Je ontvangt binnenkort onze nieuwsbrief.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
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
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-6xl">
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

        {/* Experience description */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
            Tijdens deze voorstelling neem ik je mee op een reis door mijn innerlijke landschap - een uitnodiging om ook jouw eigen lagen te verkennen. We raken aan wat vaak onuitgesproken blijft, waar de universele donkere en lichtere kanten van het leven zichtbaar worden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
