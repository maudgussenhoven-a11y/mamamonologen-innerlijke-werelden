import maudPortrait from "@/assets/maud-photo.jpg";
import mariekePhoto from "@/assets/marieke-photo.jpg";
import sophiePhoto from "@/assets/sophie-photo.jpg";
import yinskePhoto from "@/assets/yinske-photo.jpg";
import Reveal from "@/components/Reveal";

const teamMembers = [
  {
    name: "Maud Gussenhoven",
    role: "Maker, Voice Dialogue practitioner en moeder",
    description: [
      "Maud is gedreven door de missie om de verborgen wereld van moeders zichtbaar te maken, in kunst, in contact en in de samenleving.",
      "Door haar achtergrond in theater en voice dialogue combineert ze de kracht van acteren met diepgaande innerlijke verkenning. Met MAMA MONOLOGEN creëert ze een plek waar authenticiteit en kwetsbaarheid gevierd worden.",
    ],
    quote:
      "Het erkennen en uitspreken van onze innerlijke stemmen geeft vrijheid: het maakt ons lichter, eerlijker en meer verbonden met onszelf én anderen.",
    image: maudPortrait,
    tag: "Voice Dialogue Practitioner",
  },
  {
    name: "Yinske Silva",
    role: "Cofounder, moderator en moeder",
    description: [
      "Yinske is vanaf het eerste moment een drijvende kracht binnen MAMA MONOLOGEN. Als (stem)coach, performer en maker brengt ze een unieke combinatie van sensitiviteit en scherpte mee.",
      "Tijdens de sessies creëert ze een open, veilige sfeer, stelt ze de juiste vragen op het juiste moment en tilt ze het gesprek moeiteloos naar een diepere laag. Haar aanwezigheid zorgt voor rust, verbinding en verdieping.",
    ],
    quote:
      "MAMA MONOLOGEN is een project dat raakt. Het maakt ruimte voor die gevoelens en ervaringen over moederschap die we voor onszelf houden. Als Maud speelt en ons aanspreekt ontstaat er magie.",
    image: yinskePhoto,
    tag: "(Stem)coach & Performer",
  },
  {
    name: "Marieke Giebels",
    role: "Dramaturgische begeleiding en moeder",
    description: [
      "Marieke begeleidt MAMA MONOLOGEN als dramaturg en ondersteunt Maud in het schrijven, verfijnen en vormgeven van de monologen.",
      "Met haar theatrale blik zorgt ze ervoor dat persoonlijke verhalen uitgroeien tot krachtig, gelaagd en artistiek werk. Als moeder resoneert ze sterk met het project, wat haar betrokkenheid zowel inhoudelijk als persoonlijk verdiept.",
    ],
    quote:
      "Wat mij raakt aan MAMA MONOLOGEN, is dat er een ruimte geschept wordt waarin we delen van onszelf tonen die vaak onbespreekbaar zijn. Waardoor we in alle kleinschalige intimiteit kunst gebruiken om samen te kunnen zijn in iets dat vaak als eenzaam wordt ervaren.",
    image: mariekePhoto,
    tag: "Dramaturg",
  },
  {
    name: "Sophie Simenel",
    role: "Productie, ondersteuning en moeder",
    description: [
      "Sophie is de praktische motor achter MAMA MONOLOGEN. Met haar heldere blik, daadkracht en warme betrokkenheid zorgt ze ervoor dat ideeën werkelijkheid worden: concreet, georganiseerd en in beweging. Ze bewaakt het proces, houdt het doel scherp en is een onmisbare drijvende kracht binnen het project.",
    ],
    quote:
      "Ik word enthousiast van echte verhalen. En van echte mensen die gepassioneerd zijn en dit willen delen. De tegenstellingen en gemeenschappelijkheden uit de verhalen en ervaringen van MAMA MONOLOGEN zijn voor mij inspirerend als mens, moeder en producent.",
    image: sophiePhoto,
    tag: "Productie",
  },
];

const Team = () => {
  return (
    <section id="team" className="section bg-background">
      <div className="container-tight">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">De makers</p>
            <h2 className="display text-4xl text-foreground md:text-5xl lg:text-6xl">
              Het team
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {teamMembers.map((member, index) => (
            <Reveal
              key={member.name}
              className="grid items-center gap-8 md:grid-cols-12 md:gap-14"
            >
              {/* Image */}
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-md shadow-medium">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <span className="font-ui text-sm font-medium uppercase tracking-widest text-primary/70">
                  {member.tag}
                </span>
                <h3 className="display mt-3 text-3xl text-foreground md:text-4xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-lg text-primary">{member.role}</p>

                <div className="mt-5 space-y-4 leading-relaxed text-foreground/80">
                  {member.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <blockquote className="mt-6 border-l-2 border-primary/40 pl-5 font-display text-lg italic leading-relaxed text-foreground/70">
                  "{member.quote}"
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
