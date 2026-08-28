import { Button } from "@/components/ui/button";

interface Show {
  date: string;
  day: string;
  city: string;
  venue: string;
  ticketUrl?: string;
  ticketLabel?: string;
}

const shows: Show[] = [
  {
    date: "16 september",
    day: "Woensdag",
    city: "Amsterdam",
    venue: "Tolhuistuin",
    ticketUrl: "https://tolhuistuin.nl/evenementen/mamamonologen-3",
  },
  {
    date: "30 oktober",
    day: "Vrijdag",
    city: "Amsterdam",
    venue: "De Ruimte",
    ticketLabel: "Binnenkort",
  },
  {
    date: "13 november",
    day: "Vrijdag",
    city: "Winsum",
    venue: "Op Maarhuizen",
    ticketUrl: "https://opmaarhuizen.nl/mama-monologen",
  },
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Speellijst
          </h2>
          <p className="text-foreground/70 text-lg">
            Zie hieronder waar je bij wil zijn.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
          <ul className="divide-y divide-border">
            {shows.map((show, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 md:p-8 hover:bg-muted/30 transition-smooth"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <div className="min-w-[140px]">
                    <p className="text-primary font-serif text-lg">{show.day}</p>
                    <p className="text-foreground font-serif text-2xl">{show.date}</p>
                  </div>
                  <div>
                    <p className="text-foreground/90 text-lg">{show.city}</p>
                    <p className="text-foreground/60">{show.venue}</p>
                  </div>
                </div>

                {show.ticketUrl ? (
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tickets
                    </a>
                  </Button>
                ) : (
                  <Button disabled size="lg" variant="secondary" className="w-full md:w-auto">
                    {show.ticketLabel || "Binnenkort"}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
