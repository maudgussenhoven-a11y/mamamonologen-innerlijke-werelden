import tolhuistuinImg from "@/assets/tolhuistuin.jpg";
import roodeBioscoopImg from "@/assets/roodebioscoop.jpg";

const Retrospective = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
            MAMA MONOLOGEN in Tolhuistuin en in de Roode Bioscoop
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <img
              src={tolhuistuinImg}
              alt="MAMA MONOLOGEN in Tolhuistuin"
              className="w-full h-72 object-cover rounded-md"
            />
            <img
              src={roodeBioscoopImg}
              alt="MAMA MONOLOGEN in de Roode Bioscoop"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>

          <div className="space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            <p>
              We speelden in Tolhuistuin en in de Roode Bioscoop. Twee totaal verschillende locaties en ook echt andere ervaringen. Wat me iedere keer weer raakt, is wat er gebeurt nadat de monoloog is afgelopen. Tijdens de voorstelling zet ik de deur open naar mijn eigen innerlijke wereld. Naar de tegenstrijdigheden, de liefde, de frustratie en alles daartussenin. En vervolgens zie ik hoe mensen die deur ook een stukje naar zichzelf openen.
            </p>
            <p>
              In het nagesprek ontstaat telkens iets bijzonders. Mensen herkennen zichzelf in mijn spel en in de verhalen van anderen. Ze worden geraakt en er wordt iets in beweging gezet. Yinske weet daarin een sfeer neer te zetten waarin alles welkom is. Waar je mag delen, maar niets hoeft. Die veiligheid en nuance maken het verschil.
            </p>
            <p>
              Elke keer nadat we MAMA MONOLOGEN hebben gespeeld, voel ik opnieuw hoe groot de behoefte is aan plekken waar we niets hoeven op te lossen. Plekken waar de gelaagdheid van het mens-zijn zichtbaar mag worden. Waar we onszelf mogen herkennen in elkaar. En waarin voor ieder mens iets in beweging wordt gezet, klein of groot. Bovendien is er de mogelijkheid om daarop verder te bouwen in een verdiepingsworkshop. Dat maakt dat wat tijdens de voorstelling en het nagesprek ontstaat, ook echt de ruimte krijgt om door te werken. En dat dit alles in een kunstvorm kan plaatsvinden, vind ik iedere keer weer bijzonder. Juist omdat kunst ons uitnodigt om te voelen op een andere manier dan dat we misschien gewend zijn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retrospective;
