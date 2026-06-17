import forWhoPhoto from "@/assets/forwho-photo.jpg";
import Reveal from "@/components/Reveal";

const ForWho = () => {
  const audiences = [
    {
      title: "Ouders",
      description: "Moeders, vaders en ouders in elke fase van hun reis",
    },
    {
      title: "Professionals",
      description:
        "In zorg, onderwijs, hulpverlening of welzijn die dieper willen begrijpen",
    },
    {
      title: "Theaterpubliek",
      description: "Die houdt van kwetsbaar, interdisciplinair en authentiek werk",
    },
    {
      title: "Zelfontdekkers",
      description:
        "Iedereen die zichzelf beter wil begrijpen en innerlijk wil groeien",
    },
  ];

  return (
    <section className="section bg-background">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-md shadow-medium">
              <img
                src={forWhoPhoto}
                alt="Intiem moment van verbinding"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <p className="eyebrow mb-5">Voor wie</p>
            <h2 className="display text-4xl text-foreground md:text-5xl lg:text-6xl">
              Voor wie is het?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Deze ervaring spreekt tot iedereen die op zoek is naar verbinding,
              erkenning en diepgang.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {audiences.map((audience, index) => (
                <div
                  key={audience.title}
                  className={`border-l-2 pl-5 ${
                    index % 2 === 0 ? "border-primary/50" : "border-accent/50"
                  }`}
                >
                  <h3 className="display text-xl text-foreground">
                    {audience.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Session info */}
        <Reveal className="mt-16 rounded-lg border border-border bg-card p-8 shadow-soft md:mt-20 md:p-12">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <p className="eyebrow mb-4">In de praktijk</p>
              <h3 className="display text-2xl text-foreground md:text-3xl">
                De theatrale sessie
              </h3>
            </div>
            <div className="space-y-3 text-lg leading-relaxed text-foreground/85 md:col-span-2">
              <p>
                Een intieme bijeenkomst van{" "}
                <span className="font-medium text-primary">1,5–2 uur</span>{" "}
                waarin:
              </p>
              <ul className="space-y-2">
                {[
                  "Innerlijke moeders tot leven worden gebracht",
                  "Deelnemers worden uitgenodigd hun eigen stem te ontmoeten",
                  "Ruimte is voor reflectie, herkenning en uitwisseling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2 italic text-muted-foreground">
                Deze vorm is laagdrempelig, diepgaand en geschikt voor groepen van
                15–100 mensen.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ForWho;
