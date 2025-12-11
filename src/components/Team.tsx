import maudPortrait from "@/assets/maud-photo.jpg";
import mariekePhoto from "@/assets/marieke-photo.jpg";

const teamMembers = [
  {
    name: "Maud Gussenhoven",
    role: "Maker, Voice Dialogue practitioner en moeder",
    description: [
      "Maud is gedreven door de missie om de verborgen wereld van moeders zichtbaar te maken — in kunst, in contact en in de samenleving.",
      "Door haar achtergrond in theater en voice dialogue combineert ze de kracht van acteren met diepgaande innerlijke verkenning. Met Mamamonologen creëert ze een plek waar authenticiteit en kwetsbaarheid gevierd worden."
    ],
    quote: "Ik geloof dat wanneer we onze innerlijke stemmen durven te horen, we elkaar eindelijk echt kunnen ontmoeten.",
    image: maudPortrait,
    tag: "Voice Dialogue Practitioner"
  },
  {
    name: "Yinske Silva",
    role: "Cofounder, moderator en moeder",
    description: [
      "Yinske is vanaf het eerste moment een drijvende kracht binnen Mamamonologen. Als (stem)coach, performer en maker brengt ze een unieke combinatie van sensitiviteit en scherpte mee.",
      "Tijdens de sessies creëert ze een open, veilige sfeer, stelt ze de juiste vragen op het juiste moment en tilt ze het gesprek moeiteloos naar een diepere laag. Haar aanwezigheid zorgt voor rust, verbinding en verdieping."
    ],
    quote: "Mamamonologen is een project dat raakt. Het maakt ruimte voor die gevoelens en ervaringen over moederschap die we voor onszelf houden. Als Maud speelt en ons aanspreekt ontstaat er magie.",
    image: null,
    tag: "(Stem)coach & Performer"
  },
  {
    name: "Marieke Giebels",
    role: "Dramaturgische begeleiding en moeder",
    description: [
      "Marieke begeleidt Mamamonologen als dramaturg en ondersteunt Maud in het schrijven, verfijnen en vormgeven van de monologen.",
      "Met haar theatrale blik zorgt ze ervoor dat persoonlijke verhalen uitgroeien tot krachtig, gelaagd en artistiek werk. Als moeder resoneert ze sterk met het project, wat haar betrokkenheid zowel inhoudelijk als persoonlijk verdiept."
    ],
    quote: "Wat mij raakt aan Mamamonologen, is dat er een ruimte geschept wordt waarin we delen van onszelf tonen die vaak onbespreekbaar zijn. Waardoor we in alle kleinschalige intimiteit kunst gebruiken om samen te kunnen zijn in iets dat vaak als eenzaam wordt ervaren.",
    image: mariekePhoto,
    tag: "Dramaturg"
  },
  {
    name: "Sophie Simenel",
    role: "Productie, ondersteuning en moeder",
    description: [
      "Sophie is de praktische motor achter Mamamonologen. Met haar heldere blik, daadkracht en warme betrokkenheid zorgt ze ervoor dat ideeën werkelijkheid worden: concreet, georganiseerd en in beweging.",
      "Ze bewaakt het proces, houdt het doel scherp en is een onmisbare drijvende kracht binnen het project."
    ],
    quote: null,
    image: null,
    tag: "Productie"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Het team
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`grid md:grid-cols-5 gap-8 md:gap-12 items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image or Placeholder */}
              <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative">
                  {member.image ? (
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-medium border-4 border-primary/10">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-soft border-4 border-primary/10 bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center">
                      <span className="text-6xl md:text-7xl font-bold text-primary/30">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-warm rounded-full blur-2xl opacity-30 -z-10" />
                </div>
              </div>

              {/* Content */}
              <div className={`md:col-span-3 space-y-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    {member.role}
                  </p>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                  {member.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {member.quote && (
                    <p className="text-muted-foreground italic pt-2 border-l-4 border-primary/30 pl-4">
                      "{member.quote}"
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <div className="inline-block bg-secondary/50 px-5 py-2 rounded-full">
                    <p className="text-sm font-medium text-secondary-foreground">
                      🎭 {member.tag}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
