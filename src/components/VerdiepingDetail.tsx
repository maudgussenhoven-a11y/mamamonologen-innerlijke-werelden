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
              <p className="font-serif text-lg">€175</p>
              <p className="text-sm text-primary/80">earlybirdprijs</p>
            </div>
          </div>

          <div className="space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            <p>
              Tijdens deze verdiepingsdag krijg je de kans je eigen innerlijke stemmen te ontmoeten. We werken daarvoor met Voice Dialogue, een krachtige methode uit de transformatiepsychologie. In een kleine groep van 18, in een veilige en oordeelloze sfeer, ontdek je welke innerlijke stemmen jouw leven sturen en hoe je vanuit meer zelfkennis en zelfcompassie kunt kiezen, in plaats van reageren.
            </p>
            <p>
              Een dag om stil te staan, dieper te kijken en met nieuwe energie verder te gaan.
            </p>
            <p>
              Tijdens De Verdieping maak je kennis met Voice Dialogue en ga je op onderzoek naar je eigen innerlijke stemmen en polariteiten. Welke delen van jezelf ken je goed? Welke stemmen krijgen te weinig ruimte? En wat heb jij nodig om als ouder meer te leven vanuit een plek die bij jou past?
            </p>
            <p>
              Samen met Yinske begeleid ik een dag waarin we de diepte ingaan. We creëren een open, veilige en inspirerende ruimte voor bewustwording en zelfontwikkeling, met een vleugje kunst! Omringd door gelijkgestemden die net zo nieuwsgierig zijn naar hun innerlijke wereld als jij.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="font-serif text-lg text-foreground/90 mb-3">
              Tickets zijn nog niet beschikbaar.
            </p>
            <p className="text-foreground/80">
              Wil je je vast aanmelden voor De Verdieping? Stuur dan een mailtje naar{" "}
              <a
                href="mailto:maudgussenhoven@gmail.com?subject=Aanmelding%20De%20Verdieping"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-smooth"
              >
                maudgussenhoven@gmail.com
              </a>
              {" "}— dan zetten we je vast op de lijst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerdiepingDetail;
