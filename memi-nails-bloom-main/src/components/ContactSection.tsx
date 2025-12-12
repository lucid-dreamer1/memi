import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contatti"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle text-primary-foreground/70 mb-4">
            Contattami
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary-foreground">
            Prenota Ora
          </h2>
          <p className="font-body text-primary-foreground/80 mt-6 max-w-xl mx-auto">
            Contattami per prenotare il tuo appuntamento o per qualsiasi
            informazione
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-9 max-w-5xl mx-auto justify-items-center">
          <a
            href="mailto:info@meminails.it"
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300 group w-full"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-medium mb-2">Email</h3>
            <p className="font-body text-sm text-primary-foreground/70">
              info@meminails.it
            </p>
          </a>

          <a
            href="https://instagram.com/_memi.nails_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300 group w-full"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-medium mb-2">Instagram</h3>
            <p className="font-body text-sm text-primary-foreground/70">
              @_memi.nails_
            </p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10">
            <MapPin className="w-5 h-5" />
            <span className="font-body text-sm">Capodrise (CE)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
