import Reveal from "@/components/Reveal";

const Reviews = () => {
  return (
    <section id="reviews" className="section bg-secondary/40">
      <div className="container-tight">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-5 justify-center">In beeld</p>
          <h2 className="display text-4xl text-foreground md:text-5xl">
            Reviews
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-md shadow-medium">
            <iframe
              src="https://www.youtube.com/embed/98DSVD0k8J8"
              title="MAMA MONOLOGEN Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Reviews;
