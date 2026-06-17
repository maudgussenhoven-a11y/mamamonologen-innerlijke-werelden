import { useState } from "react";
import stylizedPhoto from "@/assets/hero-image-stylized.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

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
    <form
      onSubmit={handleSubmit}
      name="newsletter"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="flex flex-col gap-2 sm:flex-row"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="text" name="bot-field" className="hidden" />
      <Input
        type="email"
        placeholder="Je e-mailadres"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-ui h-11 flex-1 rounded-full border-border bg-background px-5 text-sm"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="font-ui h-11 whitespace-nowrap rounded-full px-6"
      >
        {isLoading ? "..." : "Aanmelden"}
      </Button>
    </form>
  );
};

const About = () => {
  return (
    <section id="about" className="section bg-secondary/40">
      <div className="container-tight">
        {/* Intro: collage + statement */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow mb-5">Wat is het?</p>
            <h2 className="display mb-8 text-4xl text-foreground md:text-5xl lg:text-6xl">
              Wat is Mama Monologen?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                MAMA MONOLOGEN is een{" "}
                <span className="font-medium text-primary">
                  intieme voorstelling
                </span>{" "}
                die de gelaagdheid van moederschap zichtbaar maakt. Het is geen
                traditionele voorstelling, maar een combinatie van monoloog,
                embodiment, innerlijke stemmen en interactie met het publiek.
              </p>
              <p>
                Een plek waar de binnenwereld van vrouwen, met al haar
                tegenstellingen, verlangens, twijfels en krachten, eindelijk{" "}
                <span className="font-medium text-foreground">
                  gehoord mag worden
                </span>
                .
              </p>
              <p>
                Een plek waar alle mensen een inspirerende, veilige en
                verbindende ruimte vinden om via theater naar binnen te
                luisteren, elkaar te ontmoeten en de diepgang op te zoeken die in
                het dagelijks leven vaak ongezien blijft.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="overflow-hidden rounded-md bg-background shadow-medium">
              <img
                src={stylizedPhoto}
                alt="MAMA MONOLOGEN — gestileerd portret van innerlijke werelden"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Video */}
        <Reveal className="mt-20 md:mt-28">
          <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-md shadow-medium">
            <iframe
              src="https://www.youtube.com/embed/2jCRu13ZzcM"
              title="MAMA MONOLOGEN video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-8 md:mt-24 md:grid-cols-2">
          <Reveal as="figure">
            <blockquote className="text-lg italic leading-relaxed text-foreground/85">
              "MAMA MONOLOGEN werkt heel verbindend. De eerlijkheid vond ik mooi,
              in al die verschillende lagen. Elkaar zien, jezelf laten zien. Het
              gevoel van samen. De kracht van het moederschap, maar ook het
              kwetsbare en het rauwe. Alles hoort erbij en dat vond ik zo mooi aan
              deze bijeenkomst."
            </blockquote>
            <figcaption className="font-ui mt-5 text-sm font-medium uppercase tracking-widest text-primary">
              — Amber
            </figcaption>
          </Reveal>
          <Reveal as="figure" delay={120}>
            <blockquote className="text-lg italic leading-relaxed text-foreground/85">
              "Inspirerend, verbindend, veilig, energie, kwetsbaar, eerlijk,
              herkenbaar en ook fun, lachen, entertainment!"
            </blockquote>
            <figcaption className="font-ui mt-5 text-sm font-medium uppercase tracking-widest text-accent">
              — Anoniem
            </figcaption>
          </Reveal>
        </div>

        {/* Newsletter */}
        <Reveal className="mx-auto mt-20 max-w-2xl rounded-lg border border-border bg-card p-8 text-center shadow-soft md:mt-24 md:p-10">
          <Mail className="mx-auto mb-4 h-6 w-6 text-primary" />
          <h3 className="display mb-2 text-2xl text-foreground">
            Op de hoogte blijven?
          </h3>
          <p className="mb-6 text-foreground/70">
            Meld je aan voor de nieuwsbrief en mis geen enkele voorstelling.
          </p>
          <div className="mx-auto max-w-md">
            <NewsletterForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
