import stylizedPhoto from "@/assets/hero-image-stylized.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 pb-12 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Wat is MAMA MONOLOGEN?
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              MAMA MONOLOGEN is een <span className="text-primary">intieme voorstelling</span> dat de gelaagdheid van moederschap zichtbaar maakt. Het is geen traditionele voorstelling, maar een combinatie 
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
                src={stylizedPhoto} 
                alt="MAMA MONOLOGEN portret" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Newsletter compact box */}
            <div className="mt-8 bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Op de hoogte blijven?</h4>
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                Meld je aan voor de nieuwsbrief
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mb-20">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-medium max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/2jCRu13ZzcM"
              title="MAMA MONOLOGEN video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <p className="text-foreground/90 italic mb-4">
              "MAMA MONOLOGEN werkt heel verbindend. De eerlijkheid vond ik mooi, in al die verschillende lagen. Elkaar zien, jezelf laten zien. Het gevoel van samen. De kracht van het moederschap, maar ook het kwetsbare en het rauwe. Alles hoort erbij en dat vond ik zo mooi aan deze bijeenkomst."
            </p>
            <p className="text-primary font-semibold">— Amber</p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <p className="text-foreground/90 italic mb-4">
              "Inspirerend, verbindend, veilig, energie, kwetsbaar, eerlijk, herkenbaar en ook fun, lachen, entertainment!"
            </p>
            <p className="text-primary font-semibold">— Anoniem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
