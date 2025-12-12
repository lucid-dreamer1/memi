import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToGallery = () => {
    document.querySelector("#galleria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center -translate-y-6">
          <p
            className="section-subtitle mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Estetista Professionale
          </p>

          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 tracking-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Memi Nails
          </h1>

          <p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            La cura delle tue unghie è la mia passione.
            <br />
            Trattamenti personalizzati per valorizzare la tua bellezza naturale.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contatti"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contatti")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-elegant hover:-translate-y-0.5"
            >
              Prenota Ora
            </a>

            <a
              href="#catalogo"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#catalogo")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-body text-sm uppercase tracking-widest rounded-full hover:bg-foreground/5 transition-all duration-300"
            >
              Scopri i Servizi
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToGallery}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="font-body text-xs uppercase tracking-widest">
          Scopri
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
