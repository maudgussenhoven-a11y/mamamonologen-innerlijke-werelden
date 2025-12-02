import maudPortrait from "@/assets/maud-photo.jpg";

const Maker = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            De maker
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-medium border-4 border-primary/10">
                <img 
                  src={maudPortrait} 
                  alt="Maud Gussenhoven - Maker van Mamamonologen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-warm rounded-full blur-2xl opacity-30 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Maud Gussenhoven
            </h3>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                <span className="font-semibold text-primary">Actrice, moeder en Voice Dialogue practitioner.</span>
              </p>
              
              <p>
                Maud is gedreven door de missie om de verborgen wereld van moeders zichtbaar te maken — 
                in kunst, in contact en in de samenleving.
              </p>

              <p>
                Door haar achtergrond in theater en psychologie combineert ze de kracht van storytelling 
                met diepgaande innerlijke verkenning. Met Mamamonologen creëert ze een plek waar 
                authenticiteit en kwetsbaarheid gevierd worden.
              </p>

              <p className="text-muted-foreground italic pt-4">
                "Ik geloof dat wanneer we onze innerlijke stemmen durven te horen, 
                we elkaar eindelijk echt kunnen ontmoeten."
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-block bg-secondary/50 px-6 py-3 rounded-full">
                <p className="text-sm font-medium text-secondary-foreground">
                  🎭 Voice Dialogue Practitioner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maker;
