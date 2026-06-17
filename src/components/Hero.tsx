import headerImage from "@/assets/maud-roode-bioscoop-header.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {/* Background image with editorial gradient */}
      <div className="absolute inset-0">
        <img
          src={headerImage}
          alt="MAMA MONOLOGEN — Maud Gussenhoven op het podium in de Roode Bioscoop"
          className="h-full w-full animate-ken-burns object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-transparent" />
        {/* Neon light leak */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20 mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="container-tight relative z-10 pb-20 pt-32 md:pb-28">
        <div className="max-w-3xl">
          <p
            className="eyebrow mb-6 text-white/90 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Theatrale voorstelling · Amsterdam
          </p>

          <h1
            className="display text-glow-pink animate-fade-up text-5xl text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "250ms" }}
          >
            Mama Monologen
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-xl leading-relaxed text-white/90 md:text-2xl"
            style={{ animationDelay: "400ms" }}
          >
            Een intieme voorstelling die de gelaagdheid van moederschap zichtbaar
            maakt.
          </p>

          <p
            className="mt-4 max-w-xl animate-fade-up text-lg leading-relaxed text-white/70"
            style={{ animationDelay: "520ms" }}
          >
            Waar innerlijke stemmen gehoord worden. Waar tegenstellingen mogen
            bestaan. Waar we samen de diepte opzoeken.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "640ms" }}
          >
            <a
              href="https://tolhuistuin.nl/evenementen/mamamonologen-3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui glow-pink inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Koop tickets
            </a>
            <a
              href="#about"
              className="font-ui inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Ontdek de voorstelling
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
