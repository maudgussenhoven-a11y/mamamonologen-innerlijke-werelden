import Reveal from "@/components/Reveal";

const WhyProject = () => {
  return (
    <section className="section bg-ink text-ink-foreground">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5 text-primary/90">De aanleiding</p>
            <h2 className="display text-4xl text-ink-foreground md:text-5xl">
              Waarom dit project?
            </h2>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal className="space-y-5 text-lg leading-relaxed text-ink-foreground/75">
              <p>
                De binnenwereld van moeders blijft vaak{" "}
                <span className="text-primary">onzichtbaar</span>. Van ons wordt
                verwacht dat we zorgzaam, stabiel en liefdevol zijn, terwijl we
                ondertussen alles draaiende houden en vooral veel van onszelf
                weggeven.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="my-10 border-l-2 border-primary pl-6 font-display text-2xl italic leading-snug text-ink-foreground md:text-3xl">
                "Mothers and parents in general, have pressures on them that are
                actually beyond the natural responsibility of a human being"
                <footer className="font-ui mt-4 text-sm not-italic uppercase tracking-widest text-ink-foreground/50">
                  — Dr. Gabor Maté
                </footer>
              </blockquote>
            </Reveal>

            <Reveal className="space-y-5 text-lg leading-relaxed text-ink-foreground/75" delay={120}>
              <p>
                Toen ik deze quote las, viel er iets op zijn plek: de druk die
                moeders voelen gaat vaak verder dan wat één mens kan dragen. Bij
                mij uit zich dat in een constant gevoel van{" "}
                <span className="text-primary">tekortschieten</span>.
              </p>
              <p>
                Als ik werk, mis ik mijn kinderen. Als ik bij hen ben, voel ik de
                druk van alles wat nog moet. Alsof ik nooit helemaal op de juiste
                plek ben.
              </p>
              <p>
                Ik wil alles tegelijk en verwacht dat ook van mezelf: tijd voor
                mijn kinderen, ruimte voor mezelf, liefde, werk, gezondheid,
                verbondenheid. Die tegenstrijdigheden leven voortdurend naast
                elkaar.
              </p>
              <p className="font-display text-xl text-ink-foreground">
                MAMA MONOLOGEN is ontstaan vanuit dat besef.
              </p>
              <p>
                Niet om die spanningen op te lossen, maar om ze{" "}
                <span className="text-accent">
                  zichtbaar te maken, te erkennen en samen te dragen
                </span>
                . Door mijn verschillende innerlijke moederdelen te leren kennen,
                ontdekte ik dat leven met tegenstellingen mij een rijker mens
                maakt.
              </p>
              <p>
                MAMA MONOLOGEN wil ruimte maken voor een eerlijker en menselijker
                beeld van moederschap, in een maatschappij die zorg en
                kwetsbaarheid vaak onderwaardeert. Tegelijkertijd gaat dit project
                niet alleen over moeders. De innerlijke stemmen en
                tegenstrijdigheden die hier onderzocht worden, zijn{" "}
                <span className="text-accent">universeel</span> en raken aan wat
                het betekent om mens te zijn.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProject;
