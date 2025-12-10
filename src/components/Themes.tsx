const Themes = () => {
  const themes = [
    {
      title: "Polariteiten",
      description: "De tegenstellende stemmen die in ons allemaal leven"
    },
    {
      title: "De innerlijke criticus",
      description: "Een harde kant die we allemaal kennen"
    },
    {
      title: "Mythische dimensie",
      description: "De archetypische kracht die in ons allen leeft"
    },
    {
      title: "Transformatie",
      description: "Door bewustzijn en verbinding ontstaat verandering"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Thema's die centraal staan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deze thema's zijn geworteld in moederschap, maar herkenbaar voor iedereen 
            die leeft in relatie met anderen
          </p>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                {theme.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
