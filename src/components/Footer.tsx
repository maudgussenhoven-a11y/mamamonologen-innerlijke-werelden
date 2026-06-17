const Footer = () => {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-tight py-16 md:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.3em] text-ink-foreground">
            Mama Monologen
          </h3>
          <p className="font-display text-2xl italic text-ink-foreground/70 md:text-3xl">
            Waar innerlijke stemmen gehoord worden
          </p>

          <div className="font-ui mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:maudgussenhoven@gmail.com"
              className="text-ink-foreground/80 transition-colors hover:text-primary"
            >
              maudgussenhoven@gmail.com
            </a>
            <span className="text-ink-foreground/30">·</span>
            <a
              href="tel:0640711798"
              className="text-ink-foreground/80 transition-colors hover:text-primary"
            >
              06 40 71 17 98
            </a>
            <span className="text-ink-foreground/30">·</span>
            <a
              href="https://www.mamamonologen.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground/80 transition-colors hover:text-primary"
            >
              www.mamamonologen.nl
            </a>
          </div>
        </div>

        <div className="font-ui mt-12 border-t border-ink-foreground/15 pt-8 text-center text-xs text-ink-foreground/40">
          © {new Date().getFullYear()} MAMA MONOLOGEN. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
