import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const TicketsPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="items-center">
          <p className="eyebrow mb-2 justify-center">Tolhuistuin · Amsterdam</p>
          <DialogTitle className="display text-3xl">Mama Monologen</DialogTitle>
          <DialogDescription className="text-base text-foreground/80">
            Te zien in Tolhuistuin, Amsterdam. Mis het niet en bestel je tickets.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button asChild size="lg" className="font-ui rounded-full">
            <a
              href="https://tolhuistuin.nl/evenementen/mamamonologen-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Koop tickets
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TicketsPopup;
