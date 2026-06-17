import Reveal from "@/components/Reveal";

const Themes = () => {
  const themes = [
    {
      title: "Polariteiten",
      description: "De tegenstellende stemmen die in ons allemaal leven",
    },
    {
      title: "De innerlijke criticus",
      description: "Een harde kant die we allemaal kennen",
    },
    {
      title: "Mythische dimensie",
      description: "De archetypische kracht die in ons allen leeft",
    },
    {
      title: "Transformatie",
      description: "Door bewustzijn en verbinding ontstaat verandering",
    },
  ];

  return (
    <section id="themes" className="section bg-secondary/40">
      <div className="container-tight">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">De kern</p>
            <h2 className="display text-4xl text-foreground md:text-5xl lg:text-6xl">
              Thema's die centraal staan
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Deze thema's zijn geworteld in moederschap, maar herkenbaar voor
              iedereen die leeft in relatie met anderen.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border md:mt-20">
          {themes.map((theme, index) => (
            <Reveal
              key={theme.title}
              delay={index * 80}
              className="group grid items-baseline gap-4 border-b border-border py-8 transition-colors md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="font-ui col-span-1 text-sm font-medium tracking-widest text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display col-span-4 text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {theme.title}
              </h3>
              <p className="col-span-7 text-lg leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
