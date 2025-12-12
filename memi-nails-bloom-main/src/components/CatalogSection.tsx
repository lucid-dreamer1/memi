import { Clock, Sparkles } from "lucide-react";

const services = [
  {
    name: "Manicure Classica",
    description: "Cura completa delle unghie con limatura, cuticole e smalto",
    duration: "45 min",
    price: "€25",
  },
  {
    name: "Manicure con Semipermanente",
    description: "Manicure completa con applicazione di smalto semipermanente",
    duration: "60 min",
    price: "€35",
  },
  {
    name: "Ricostruzione Gel",
    description: "Allungamento e ricostruzione unghie con gel modellante",
    duration: "90 min",
    price: "€50",
  },
  {
    name: "Nail Art",
    description: "Decorazioni artistiche personalizzate sulle tue unghie",
    duration: "30+ min",
    price: "da €10",
  },
  {
    name: "Refill Gel",
    description: "Manutenzione e riempimento della ricrescita gel",
    duration: "60 min",
    price: "€40",
  },
  {
    name: "Pedicure Curativo",
    description: "Trattamento completo dei piedi con cura delle unghie",
    duration: "60 min",
    price: "€35",
  },
];

const CatalogSection = () => {
  return (
    <section id="catalogo" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Servizi</p>
          <h2 className="section-title">Catalogo</h2>
          <p className="font-body text-muted-foreground mt-6 max-w-xl mx-auto">
            Trattamenti professionali per ogni esigenza, utilizzando solo prodotti di alta qualità
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="glass-card p-8 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Sparkles className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                <span className="font-display text-3xl font-semibold text-foreground">
                  {service.price}
                </span>
              </div>
              
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                {service.name}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-body text-sm">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contatti"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-elegant hover:-translate-y-0.5"
          >
            Prenota un Appuntamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
