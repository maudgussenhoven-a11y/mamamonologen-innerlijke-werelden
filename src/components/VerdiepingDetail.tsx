const VerdiepingDetail = () => {
  return (
    <section id="verdieping" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2 text-center">
            De Verdieping
          </h2>
          <p className="text-center text-primary/90 font-serif text-lg mb-8">
            een dag van bewustwording
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-foreground/80">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-foreground/60 mb-1">Wanneer</p>
              <p className="font-serif text-lg">vrijdag 30 oktober</p>
              <p className="font-serif text-lg">10:00 – 16:00 uur</p>
            </div>
            <div className="hidden sm:block w-px bg-border" />
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-foreground/60 mb-1">Waar</p>
              <p className="font-serif text-lg">
                <a
                  href="https://deruimteamsterdam.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 transition-smooth"
                >
                  De Ruimte
                </a>
              </p>
              <p className="font-serif text-lg">Amsterdam</p>
            </div>
            <div className="hidden sm:block w-px bg-border" />
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-foreground/60 mb-1">Investering</p>
              <p className="font-serif text-lg">€145</p>
              <p className="text-sm text-primary/80">earlybirdprijs tot 20 september</p>
              <p className="text-sm text-foreground/70">daarna €180</p>
            </div>
          </div>

          <div className="space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            <p>
              Na de voorstelling Mama Monologen een aantal keer te hebben opgevoerd, organiseren we nu deze verdiepingsdag waarbij we met een groepje van 16 vrouwen verder aan de slag gaan met Voice Dialogue en de innerlijke stemmen die ons dagelijks leven sturen. Welke delen van jezelf ken je goed? Welke stemmen krijgen te weinig ruimte?
            </p>
            <p>
              Misschien loop je als ouder wel eens vast in het veelvragende leven, en ben je benieuwd hoe je meer kunt reageren vanuit een innerlijk weten, in plaats van dat het leven je overkomt. En wat heb jij nodig om als ouder meer te leven vanuit een plek die bij jou past?
            </p>
            <p>
              Yinske en Maud begeleiden een dag waarin we de diepte ingaan. We creëren een open, veilige en inspirerende ruimte voor bewustwording en zelfontwikkeling, omringd door gelijkgestemden die net zo nieuwsgierig zijn naar hun innerlijke wereld als jij. Verwacht een dag met lunch, koffie en thee.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="text-foreground/80">
              Tickets via{" "}
              <a
                href="mailto:maudgussenhoven@gmail.com?subject=Tickets%20De%20Verdieping"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-smooth"
              >
                maudgussenhoven@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerdiepingDetail;
