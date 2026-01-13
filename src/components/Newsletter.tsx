import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
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
    
    // Simulate subscription
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
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Op de hoogte blijven?
        </h2>
        <p className="text-lg text-foreground/80 mb-8">
          Meld je aan voor de nieuwsbrief en ontvang updates over voorstellingen, workshops en meer.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Je e-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background/80 border-primary/20 focus:border-primary"
          />
          <Button type="submit" disabled={isLoading} className="whitespace-nowrap">
            {isLoading ? "Bezig..." : "Aanmelden"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
