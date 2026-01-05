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
              De binnenwereld van moeders is vaak <span className="text-accent">onzichtbaar</span>. 
              We worden geacht sterk, stabiel en liefdevol te zijn en vooral veel van onszelf op te geven.
            </p>
            <p>
              Mamamonologen maakt deze verborgen lagen zichtbaar, niet om ze op te lossen, maar om ze te 
              <span className="text-primary"> erkennen, te eren en samen te dragen</span>.
            </p>
            <p>
              Het project wil ruimte creëren voor een eerlijker en menselijker beeld van moederschap in een 
              maatschappij die het nog te vaak onderwaardeert. Tegelijkertijd is dit geen verhaal alleen voor moeders. 
              De innerlijke stemmen, rollen en tegenstrijdigheden die hier worden onderzocht, zijn 
              <span className="text-accent"> menselijk en universeel</span>.
            </p>
            <blockquote className="text-2xl md:text-3xl italic text-primary font-light pt-6 mt-6 border-t border-border/30">
              "Ik geloof dat wanneer we onze innerlijke stemmen durven te horen, we onszelf, elkaar en de wereld echt kunnen zien."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
