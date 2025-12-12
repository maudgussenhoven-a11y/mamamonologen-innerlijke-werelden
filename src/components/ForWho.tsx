import forWhoPhoto from '@/assets/forwho-photo.jpg';

const ForWho = () => {
  const audiences = [
    {
      title: "Ouders",
      description: "Moeders, vaders en ouders in elke fase van hun reis",
      gradient: "from-primary/20 to-primary/10"
    },
    {
      title: "Professionals",
      description: "In zorg, onderwijs, hulpverlening of welzijn die dieper willen begrijpen",
      gradient: "from-secondary/30 to-secondary/20"
    },
    {
      title: "Theaterpubliek",
      description: "Die houdt van kwetsbaar, interdisciplinair en authentiek werk",
      gradient: "from-primary/15 to-accent/15"
    },
    {
      title: "Zelfontdekkers",
      description: "Iedereen die zichzelf beter wil begrijpen en innerlijk wil groeien",
      gradient: "from-accent/15 to-primary/15"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-medium max-w-sm mx-auto lg:mx-0">
            <img 
              src={forWhoPhoto} 
              alt="Intiem moment van verbinding" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Voor wie is het?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Deze ervaring spreekt tot iedereen die op zoek is naar verbinding, 
              erkenning en diepgang
            </p>
            <div className="w-24 h-1 bg-gradient-warm rounded-full mt-6 mx-auto lg:mx-0" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${audience.gradient} border border-border/50 hover:border-primary/50 transition-smooth group`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {audience.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {audience.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-5 transition-smooth" />
            </div>
          ))}
        </div>

        {/* Session info box */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-medium border border-primary/20">
          <div className="flex items-start gap-6">
            <div className="text-5xl">🎭</div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-foreground">De theatrale sessie</h3>
              <div className="space-y-3 text-lg text-foreground/90 leading-relaxed">
                <p>Een intieme bijeenkomst van <span className="font-semibold text-primary">1,5–2 uur</span> waarin:</p>
                <ul className="space-y-2 ml-6 list-disc list-outside">
                  <li>Innerlijke moeders tot leven worden gebracht</li>
                  <li>Deelnemers worden uitgenodigd hun eigen stem te ontmoeten</li>
                  <li>Ruimte is voor reflectie, herkenning en uitwisseling</li>
                </ul>
                <p className="pt-3 text-muted-foreground italic">
                  Deze vorm is laagdrempelig, diepgaand en geschikt voor groepen van 15–100 mensen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
