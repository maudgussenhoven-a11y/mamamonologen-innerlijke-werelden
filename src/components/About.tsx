import aboutPhoto from "@/assets/about-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Wat is Mamamonologen?
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              Mamamonologen is een <span className="text-primary">theatraal, intiem en onderzoekend</span> project 
              dat de gelaagdheid van moederschap zichtbaar maakt. Het is geen traditionele voorstelling, maar een combinatie 
              van monoloog, embodiment, innerlijke stemmen en interactie met het publiek.
            </p>
            <p className="text-foreground/90">
              Een plek waar de binnenwereld van vrouwen, met al haar tegenstellingen, verlangens, twijfels en krachten, 
              eindelijk <span className="text-accent">gehoord mag worden</span>.
            </p>
            <p className="text-foreground/90">
              Een plek waar alle mensen een inspirerende, veilige en verbindende ruimte vinden om 
              via theater naar binnen te luisteren, elkaar te ontmoeten en de diepgang op te zoeken die in het dagelijks 
              leven vaak ongezien blijft.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl shadow-medium overflow-hidden">
              <img 
                src={aboutPhoto} 
                alt="Mamamonologen portret" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mb-20">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-medium max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/2jCRu13ZzcM"
              title="Mamamonologen video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Experience description */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
            Tijdens deze voorstelling neem ik je mee op een reis door mijn innerlijke landschap - een uitnodiging om ook jouw eigen lagen te verkennen. We raken aan wat vaak onuitgesproken blijft, waar de universele donkere en lichtere kanten van het leven zichtbaar worden.
          </p>
        </div>

        {/* Why section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <h3 className="text-3xl md:text-4xl mb-6 text-foreground">
            Waarom dit project?
          </h3>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              De binnenwereld van moeders blijft vaak <span className="text-accent">onzichtbaar</span>. 
              Van ons wordt verwacht dat we zorgzaam, stabiel en liefdevol zijn, terwijl we ondertussen alles draaiende houden en vooral veel van onszelf weggeven.
            </p>
            <p>
              Toen ik een quote van Dr. Gabor Maté las, viel er iets op zijn plek: de druk die moeders voelen gaat vaak verder dan wat één mens kan dragen. Bij mij uit zich dat in een constant gevoel van <span className="text-primary">tekortschieten</span>.
            </p>
            <p>
              Als ik werk, mis ik mijn kinderen. Als ik bij hen ben, voel ik de druk van alles wat nog moet. Alsof ik nooit helemaal op de juiste plek ben.
            </p>
            <p>
              Ik wil alles tegelijk en verwacht dat ook van mezelf: tijd voor mijn kinderen, ruimte voor mezelf, liefde, werk, gezondheid, verbondenheid. Die tegenstrijdigheden leven voortdurend naast elkaar.
            </p>
            <p className="text-primary font-medium">
              Mamamonologen is ontstaan vanuit dat besef.
            </p>
            <p>
              Niet om die spanningen op te lossen, maar om ze <span className="text-accent">zichtbaar te maken, te erkennen en samen te dragen</span>. Door mijn verschillende innerlijke moederdelen te leren kennen, ontdekte ik dat leven met tegenstellingen geen falen is, maar een vorm van bewust leven.
            </p>
            <p>
              Mamamonologen wil ruimte maken voor een eerlijker en menselijker beeld van moederschap, in een maatschappij die zorg en kwetsbaarheid vaak onderwaardeert. Tegelijkertijd gaat dit project niet alleen over moeders. De innerlijke stemmen en tegenstrijdigheden die hier onderzocht worden, zijn <span className="text-accent">universeel</span> en raken aan wat het betekent om mens te zijn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
