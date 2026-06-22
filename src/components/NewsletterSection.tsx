import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
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
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-foreground">Op de hoogte blijven?</h4>
          </div>
          <p className="text-sm text-foreground/70 mb-4">
            Meld je aan voor de nieuwsbrief
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
