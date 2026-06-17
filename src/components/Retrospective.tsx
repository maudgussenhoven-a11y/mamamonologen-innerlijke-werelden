import tolhuistuinImg from "@/assets/tolhuistuin.jpg";
import roodeBioscoopImg from "@/assets/roodebioscoop.jpg";
import Reveal from "@/components/Reveal";

const Retrospective = () => {
  return (
    <section className="section bg-background">
      <div className="container-tight">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Images column */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <img
                src={tolhuistuinImg}
                alt="Mama Monologen in de Tolhuistuin, Amsterdam"
                className="aspect-[4/5] w-full rounded-md object-cover shadow-soft"
              />
              <img
                src={roodeBioscoopImg}
                alt="Mama Monologen in de Roode Bioscoop, Amsterdam"
                className="absolute -bottom-10 -right-6 hidden w-2/3 rounded-md border-4 border-background object-cover shadow-medium sm:block sm:aspect-[4/3]"
              />
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal className="lg:col-span-7 lg:pl-6" delay={120}>
            <p className="eyebrow mb-5">Terugblik</p>
            <h2 className="display mb-8 text-4xl text-foreground md:text-5xl">
              Mama Monologen in Amsterdam
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent first-letter:[text-shadow:0_0_18px_hsl(146_90%_52%/0.5)]">
                We speelden in Tolhuistuin en in de Roode Bioscoop. Twee totaal
                verschillende locaties en ook echt andere ervaringen. Wat me
                iedere keer weer raakt, is wat er gebeurt nadat de monoloog is
                afgelopen. Tijdens de voorstelling zet ik de deur open naar mijn
                eigen innerlijke wereld. Naar de tegenstrijdigheden, de liefde,
                de frustratie en alles daartussenin. En vervolgens zie ik hoe
                mensen die deur ook een stukje naar zichzelf openen.
              </p>
              <p>
                In het nagesprek ontstaat telkens iets bijzonders. Mensen
                herkennen zichzelf in mijn spel en in de verhalen van anderen. Ze
                worden geraakt en er wordt iets in beweging gezet. Yinske weet
                daarin een sfeer neer te zetten waarin alles welkom is. Waar je
                mag delen, maar niets hoeft. Die veiligheid en nuance maken het
                verschil.
              </p>
              <p>
                Elke keer nadat we MAMA MONOLOGEN hebben gespeeld, voel ik
                opnieuw hoe groot de behoefte is aan plekken waar we niets hoeven
                op te lossen. Plekken waar de gelaagdheid van het mens-zijn
                zichtbaar mag worden. Waar we onszelf mogen herkennen in elkaar.
                En waarin voor ieder mens iets in beweging wordt gezet, klein of
                groot. Bovendien is er de mogelijkheid om daarop verder te bouwen
                in een verdiepingsworkshop. Dat maakt dat wat tijdens de
                voorstelling en het nagesprek ontstaat, ook echt de ruimte krijgt
                om door te werken. En dat dit alles in een kunstvorm kan
                plaatsvinden, vind ik iedere keer weer bijzonder. Juist omdat
                kunst ons uitnodigt om te voelen op een andere manier dan dat we
                misschien gewend zijn.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Retrospective;
