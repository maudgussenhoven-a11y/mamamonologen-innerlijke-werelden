const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Mamamonologen
          </h3>
          <p className="text-muted-foreground">
            Waar innerlijke stemmen gehoord worden
          </p>
          
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="mailto:maudgussenhoven@gmail.com"
              className="text-primary hover:text-primary/80 transition-smooth"
            >
              Email
            </a>
            <span className="text-border">•</span>
            <a 
              href="tel:0640711798"
              className="text-primary hover:text-primary/80 transition-smooth"
            >
              06 40 71 17 98
            </a>
            <span className="text-border">•</span>
            <a 
              href="https://www.mamamonologen.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-smooth"
            >
              www.mamamonologen.nl
            </a>
          </div>

          <div className="pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mamamonologen. Alle rechten voorbehouden.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
