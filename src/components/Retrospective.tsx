import tolhuistuinImg from "@/assets/mama-monologen-tolhuistuin.jpg.asset.json";
import roodeBioscoopImg from "@/assets/mama-monologen-roode-bioscoop.jpg.asset.json";

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
              src={tolhuistuinImg.url}
              alt="MAMA MONOLOGEN in Tolhuistuin"
              className="w-full h-72 object-cover rounded-md"
            />
            <img
              src={roodeBioscoopImg.url}
              alt="MAMA MONOLOGEN in de Roode Bioscoop"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>

          <div className="space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            <p>
              We hebben twee keer in Tolhuistuin gespeeld in maart 2026 en in juni 2026 in de Roode Bioscoop. Alle drie uitverkochte zalen en wat zijn wij trots.
            </p>
            <p>
              In maart 2026 mochten we MAMA MONOLOGEN spelen voor twee volledig uitverkochte zalen. Beide heel bijzondere voorstellingen. Vanaf de eerste scène was er voelbaar veel herkenning in de zaal: gelach, ontroering, stilte en momenten waarop het publiek zichtbaar geraakt werd. De monoloog op het podium opende niet alleen gesprekken over moederschap, maar ook over twijfel, verbinding, eenzaamheid, verwachtingen en de vele innerlijke stemmen die daarin meespelen.
            </p>
            <p>
              In het nagesprek ontstonden ontzettend waardevolle momenten. Daar werd gedeeld, gespiegeld en verdiept. Het was indrukwekkend om te zien hoeveel de voorstelling in beweging bracht, niet alleen bij moeders, maar ook bij kinderen, vaders, partners en anderen die zich herkenden in de ervaring van de gelaagdheid van het menszijn.
            </p>
            <p>Een paar reacties uit het publiek:</p>
            <blockquote className="border-l-2 border-primary pl-4 italic font-bold">
              "Door de voorstelling ervaar ik meer acceptatie van de innerlijke stemmen."
            </blockquote>
            <blockquote className="border-l-2 border-primary pl-4 italic font-bold">
              "Ik heb ervaren dat ik wat zachter mag zijn naar mezelf toe in het moederschap."
            </blockquote>
            <blockquote className="border-l-2 border-primary pl-4 italic font-bold">
              "Als 'kind' krijg ik hierdoor een inkijkje in het leven en de innerlijke monoloog van een moeder. Ik sta daar nu veel meer bij stil. Als kind voelt het allemaal vanzelfsprekend, maar nu realiseerde ik me hoeveel een moeder zelf ook twijfelt en kritisch kan zijn op zichzelf."
            </blockquote>
            <blockquote className="border-l-2 border-primary pl-4 italic font-bold">
              "Ja, dit hebben meer mensen te zien, ik kom nog een keer mee en dan met mijn moeder."
            </blockquote>
            <p>
              Deze reacties bevestigen precies waar MAMA MONOLOGEN voor staat: ruimte maken voor herkenning, verbinding en emoties. Met als thema moederschap, maar raakt eigenlijk de gehele gelaagdheid van de mens.
            </p>
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
