import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Over", href: "#about" },
  { label: "Aanbod", href: "#products" },
  { label: "Thema's", href: "#themes" },
  { label: "Team", href: "#team" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="container-tight flex items-center justify-between">
        <a
          href="#top"
          className={cn(
            "font-ui text-sm font-semibold uppercase tracking-[0.28em] transition-colors",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          Mama Monologen
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-ui text-sm tracking-wide transition-colors hover:text-primary",
                scrolled ? "text-foreground/70" : "text-white/80",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tolhuistuin.nl/evenementen/mamamonologen-3"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui glow-pink rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tickets
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden transition-colors",
            scrolled || open ? "text-foreground" : "text-white",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 border-t border-border/60" : "max-h-0",
        )}
      >
        <div className="container-tight flex flex-col gap-1 bg-background/95 py-4 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-ui py-2 text-base text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tolhuistuin.nl/evenementen/mamamonologen-3"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-ui mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
          >
            Tickets
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
