import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container-tight text-center">
        <p className="eyebrow mb-5 justify-center">404</p>
        <h1 className="display mb-4 text-5xl text-foreground md:text-6xl">
          Pagina niet gevonden
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Deze pagina bestaat niet of is verplaatst.
        </p>
        <a
          href="/"
          className="font-ui inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Terug naar home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
